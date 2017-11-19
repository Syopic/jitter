angular.module('ira').controller('MapCtrl', ['$rootScope', '$scope', '$http', "$stateParams", "facilitiesData", "statisticData", "boundsData", "StoreService", "$state", "$window", "$interval", "DataService",
    function ($rootScope, $scope, $http, $stateParams, facilitiesData, statisticData, boundsData, StoreService, $state, $window, $interval, DataService) {
        
        // ------------ State params ------------
        var areaId = $stateParams.areaId;


        $scope.areaInfo = "";
        $scope.currentAreaName = "";
        $scope.currentFacilityType = ""
        $scope.isShowCoverage = true;
        $scope.pointData = [];
        
        $scope.isGlobalMap = areaId == 0;
        
        var cGrades = [];
        var currentLayer = null;
        var currentRadiusShape = null;
        var currentMaxRadiusShape = null;
        
        // ------------ Collections ------------
        $scope.areasCollection = [];
        $scope.facilityTypesCollection = [];
        $scope.caseCollection = [];
        
        $scope.areasCollection = StoreService.getAreaCollection(boundsData.getData());
        $scope.facilityTypesCollection = StoreService.getFacilityTypeParam("name")
        $scope.caseCollection = StoreService.getCaseCollection();
        $scope.currentCase =  $scope.caseCollection[0];

        // ------------ Map configure ------------
        var map = L.map('map', {
            doubleClickZoom: false
        });

        map.on('click', clearRadiuses);
        var mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            minZoom: 5,
            maxZoom: 15,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Navigation button
        L.easyButton('fa-home icon-lg', function (btn, map) {
            $rootScope.currentRegion = "";
            setFocusOnArea(0);
            $state.go('root.map', { areaId: 0 }, { notify: false });
        }).addTo(map);

        var info = L.control({ position: 'topright' });

        info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'mapinfo'); // create a div with a class "info"
            this.update();
            return this._div;
        };

        info.update = function (props) {
            
            if (props && $scope.isGlobalMap) {
                var value = statisticData.getData()[props.name][$scope.currentCase];
                this._div.innerHTML = '<h4>' + props.name + '</h4>' + $scope.currentCase + ': <b>' + value.toFixed(2) + '</b>';
            } else {
                this._div.innerHTML = $scope.isGlobalMap ? $scope.currentCase : '<h4>' + $scope.currentAreaName + 
                '</h4>Region Type: <b>' + $scope.areaInfo["Region Type"] + 
                '</b><br>Population: <b>' + $scope.areaInfo["Population"] + 
                '</b><br>Facilities available: <b>' + $scope.pointData.length + '</b>';
            }
        };

        angular.element($window).bind('resize', function(){
            if (areaId == 0) {
                var updateMap = function() {
                    setFocusOnArea(0);
                };
                $interval(updateMap, 500, 1);
            }
        });

        info.addTo(map);

        var legend = L.control({ position: 'bottomleft' });

        function updateLegend() {
            var minValue = Infinity;
            var maxValue = -Infinity;
            cGrades = [];
            if ($scope.isGlobalMap) {
                angular.forEach(statisticData.getData(), function (area, key) {
                    if (key != "Malawi") {
                        minValue = Math.min(minValue, area[$scope.currentCase]);
                        maxValue = Math.max(maxValue, area[$scope.currentCase]);
                    }
                });
                var step = (maxValue - minValue ) / 7;
                for (var i = 0; i < 7; i++) {
                    cGrades[i] = (i * step + minValue).toFixed(2);
                }
            }

            legend.onAdd = function (map) {
                var div;
                if ($scope.isGlobalMap) {
                    div = L.DomUtil.create('div', 'maplegendinfo maplegend'),
                        grades = cGrades,
                        labels = [];

                    for (var i = 0; i < grades.length; i++) {
                        div.innerHTML +=
                            '<i style="background:' + StoreService.getColor(grades, grades[i]) + ';  border-radius: 3px; border: 1px solid; border-color: white;"></i> ' +
                            grades[i] + (grades[i + 1] ? ' &ndash; ' + grades[i + 1] + '<br>' : '+');
                    }
                } else {

                    div = L.DomUtil.create('div', 'maplegendinfo maplegend'), labels = StoreService.getFacilityTypeParam("name");
                    div.innerHTML = '<label class="checkbox-inline" ><input id="checkbox1" type="checkbox" value="" ' + ($scope.isShowCoverage ? 'checked' : 'unchecked') + ' onchange="angular.element(this).scope().coverageChanged(this)">Show coverage</label><br><br>';

                    for (var i = 1; i < labels.length; i++) {
                        div.innerHTML += '<i style="background:' + StoreService.getFacilityTypeParam("color")[i] + '; border-radius: 3px; border: 1px solid; border-color: white;"></i> ' + labels[i] + '<br>';
                    }
                    
                }

                return div;
            };
            
            legend.addTo(map);
        }
        $scope.coverageChanged = function(e) {
            $scope.isShowCoverage = e.checked;
            var id = StoreService.getStatByDistrictName(boundsData.getData(), $scope.currentAreaName);
            drawMarkers($scope.pointData);
        }
        

        // ------------ Navigate ------------

        $scope.onParamsUpdate = function () {
            clearRadiuses();
            var id = StoreService.getStatByDistrictName(boundsData.getData(), $scope.currentAreaName);
            updateLegend();
            //setFocusOnArea(id);
            clearMarkers();
            drawMarkers($scope.pointData);
            info.update();
            geojson.setStyle(style);
        }

        setGeoJson(areaId);
        updateLegend();
        
        function setFocusOnArea(aId) {
            areaId = aId;
            $scope.isGlobalMap = areaId == 0;
            var areaInfo = boundsData.getData()[areaId];
            var bounds = [[areaInfo.bounds[1], areaInfo.bounds[0]], [areaInfo.bounds[3], areaInfo.bounds[2]]];
            map.fitBounds(bounds);
            
            updateLegend();
            info.update();

            $scope.areaInfo = statisticData.getData()[areaInfo.name];
            $scope.currentAreaName = $scope.areasCollection[areaId];
            $state.go('root.map', { areaId: areaId }, { notify: false });
            
            if ($scope.isGlobalMap) {
                mainLayer.setOpacity(0.2);
                clearMarkers();
            } else {
                mainLayer.setOpacity(1);
                fillMarkers(areaId);
            }
            geojson.setStyle(style);

        }

        function setGeoJson(areaId) {
            var areaInfo = boundsData.getData()[areaId];
            $.getJSON('data/geojson/' + areaInfo.geojson, function (data) {
                geojson = L.geoJson(data, {
                    clickable: true,
                    style: style,
                    onEachFeature: onEachFeature
                }).addTo(map);
                setFocusOnArea(areaId);
            })
        }

        function onEachFeature(feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: onAreaClick
            });
        }

        function onAreaClick(e) {
            var layer = e.target;
            if (areaId != layer.feature.id) {
                areaId = layer.feature.id;
                setFocusOnArea(areaId);
                currentLayer = layer;
            }
        }
        
        function highlightFeature(e) {
            var layer = e.target;
            info.update(layer.feature.properties);
            if ($scope.isGlobalMap) {
                layer.setStyle({
                    color: '#8F5900',
                    weight: 3,
                    opacity: 1,
                    fillOpacity: 0.5
                });
            } else {
                layer.setStyle({
                    color: '#666',
                    opacity: 0.5
                });
            }
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
            }
        }
        
        function resetHighlight(e) {
            var layer = e.target;
            geojson.resetStyle(e.target);
            info.update();

            if (currentLayer && !L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                currentLayer.bringToFront();
            }
        }

        // ------------ Markers ------------

        var mapMarkers = [];
        function clearMarkers(areaId) {
            markers.clearLayers();
            for(var i = 0; i < mapMarkers.length; i++){
                 map.removeLayer(mapMarkers[i]);
             }
        }

        var markers = L.markerClusterGroup({
            showCoverageOnHover: false,
            maxClusterRadius: 20,
            //disableClusteringAtZoom: true,
            singleMarkerMode: false,
            iconCreateFunction: function (cluster) {
				return L.divIcon({ html: cluster.getChildCount(), className: 'mycluster', iconSize: L.point(20, 20) });
			}
        });
        map.addLayer(markers);
       
        function fillMarkers(areaId) {
            clearMarkers(areaId);
            var areaInfo = boundsData.getData()[areaId];
            var params = {
                text: areaInfo.name
            }
            DataService.getFacilityMapData(params).then(function (response) {

                $scope.pointData = response.data.data.facilitiesByDistrictName;
                drawMarkers(response.data.data.facilitiesByDistrictName);
            });
        }

        function drawMarkers(pointsData) {
            clearMarkers(areaId);
            for (var i = 0; i < pointsData.length; i++) {
                var element = pointsData[i];
                if (element) {
                    for (var j = 0; j < element.services.length; j++) {

                        var facilityType = element.services[j].serviceType;
                        if ($scope.currentFacilityType == "Show All" || $scope.currentFacilityType == StoreService.facilityTypes[facilityType].name) {
                            var latitude = element.location.split(',')[0];
                            var longitude = element.location.split(',')[1];
                            var iconImg = StoreService.facilityTypes[facilityType].icon;
                            var color = StoreService.facilityTypes[facilityType].color;

                            //if (!iconImg) iconImg = "marker-icon.png";

                            var icon = L.icon({
                                iconUrl: 'img/markers/' + iconImg,
                                shadowUrl: 'img/markers/marker-shadow.png',
                                iconSize: [25, 41], // size of the icon
                                shadowSize: [41, 41], // size of the shadow
                                iconAnchor: [12, 40], // point of the icon which will correspond to marker's location
                                shadowAnchor: [12, 40],  // the same for the shadow
                                popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
                            });
                            if ($scope.isShowCoverage) {
                                var c1 = L.circle([latitude, longitude], {fillColor: color, fillOpacity: 0.03, opacity: 0, radius: Math.random() * 100 + 5000 });
                                c1.addTo(map);
                                mapMarkers.push(c1);
                            }

                            var marker = L.marker([latitude, longitude], { id: element.id, icon: icon, color: color, radius: 2000, maxRadius: 5000 }).on('click', onClickMarker);
                            markers.addLayer(marker);

                        }
                    }
                }
            }
        }
        

        function onClickMarker(e) {
            clearRadiuses();
            currentMaxRadiusShape = L.circle(e.latlng, {  fillColor: e.target.options.color, opacity: 0, fillOpacity: 0.2, radius: e.target.options.maxRadius });
            currentRadiusShape = L.circle(e.latlng, {  fillColor: e.target.options.color, opacity: 0, fillOpacity: 0.3, radius: e.target.options.radius });
            map.setView(e.target.getLatLng(), map.getZoom());
            currentMaxRadiusShape.addTo(map);
            currentRadiusShape.addTo(map);

            
            DataService.getFacilityById({id:e.target.options.id}).then(function (response) {
                e.target.bindPopup("<b><a href='#!/datatable/"+ response.data.data.facilityById.name +"' target='_blank'>" + response.data.data.facilityById.name + "</a></b>" +
                "<br>Village:   <b>" + response.data.data.facilityById.village + '</b>' +
                "<br>ContactName:<b><a href='#!/datatable/"+ response.data.data.facilityById.contactName +"' target='_blank'>" + response.data.data.facilityById.contactName + '</a></b>').openPopup()
            });
        } 

        function clearRadiuses() {
            if (currentMaxRadiusShape) map.removeLayer(currentMaxRadiusShape);
            if (currentRadiusShape) map.removeLayer(currentRadiusShape);
        }

        function style(feature) {
            return {
                color: feature.properties.name == $scope.currentAreaName ? '#666' : $scope.isGlobalMap ? '#fff' : '#ccc',
                weight: $scope.isGlobalMap ? 2 : 3,
                fillColor: !$scope.isGlobalMap ? '#f2efe9' : StoreService.getColor(cGrades, statisticData.getData()[feature.properties.name][$scope.currentCase]),
                fill: true,
                opacity: feature.properties.name == $scope.currentAreaName ? 1 : 1,
                fillOpacity: feature.properties.name == $scope.currentAreaName ? 0 : $scope.isGlobalMap ? 0.7 : 0.9,
            };
        }

    }]);
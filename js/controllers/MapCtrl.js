angular.module('ira').controller('MapCtrl', ['$rootScope', '$scope', '$http', "$stateParams", "facilitiesData", "statisticData", "boundsData", "StoreService", "$state",
    function ($rootScope, $scope, $http, $stateParams, facilitiesData, statisticData, boundsData, StoreService, $state) {
        // ------------ State params ------------
        var areaId = $stateParams.areaId;


        $scope.areaInfo = "";
        $scope.currentAreaName = "";
        $scope.currentCase = "";
        $scope.currentFacilityType = ""
        $scope.isShowCoverage = true;

        $scope.isGlobalMap = false;

        var cGrades = [0, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5];
        var currentLayer = null;


        // ------------ Collections ------------
        $scope.areasCollection = [];
        $scope.facilityTypesCollection = [];
        $scope.caseCollection = [];

        $scope.areasCollection = StoreService.getAreaCollection(boundsData.getData());
        $scope.facilityTypesCollection = StoreService.getFacilityTypes();
        $scope.caseCollection = StoreService.getCaseCollection();

        // ------------ Map configure ------------
        var map = L.map('map', {
            doubleClickZoom: false
        });
        var mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            minZoom: 7,
            maxZoom: 15,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })
            .addTo(map);

        // Navigation button
        L.easyButton('fa-home icon-lg', function (btn, map) {
            $rootScope.currentRegion = "";
            setFocusOnArea(0);
            $state.go('root.map', { areaId: 0 }, { notify: false });
        }).addTo(map);

        
        

        //L.control.scale().addTo(map);

        var info = L.control();

        info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'mapinfo'); // create a div with a class "info"
            this.update();
            return this._div;
        };

        // method that we will use to update the control based on feature properties passed
        info.update = function (props) {
            if (props && $scope.isGlobalMap) {
                var value = statisticData.getData()[props.name][$scope.currentCase];
                this._div.innerHTML = '<h4>' + props.name + '</h4>' + $scope.currentCase + ':<br />' + value.toFixed(2);
            } else {
                this._div.innerHTML = $scope.isGlobalMap ? $scope.currentCase : '<h4>' + $scope.currentAreaName + '</h4>Region Type: <b>' + $scope.areaInfo["Region Type"] + '</b><br>Population: <b>' + $scope.areaInfo["Population"] + '</b>';
            }
        };

        info.addTo(map);

        var legend = L.control({ position: 'bottomleft' });

        function updateLegend() {

            var maxValue = 0;
            if ($scope.isGlobalMap) {
                angular.forEach(statisticData.getData(), function (area, key) {
                    maxValue = Math.max(maxValue, area[$scope.currentCase]);
                });
                var step = maxValue / 7;
                for (var i = 0; i < 7; i++) {
                    cGrades[i] = (i * step).toFixed(2);
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
                            '<i style="background:' + getColor(grades, grades[i]) + '"></i> ' +
                            grades[i] + (grades[i + 1] ? ' &ndash; ' + grades[i + 1] + '<br>' : '+');
                    }
                } else {

                    div = L.DomUtil.create('div', 'maplegendinfo maplegend'), labels = StoreService.getFacilityTypes();
                    div.innerHTML = '<label class="checkbox-inline" ><input id="checkbox1" type="checkbox" value="" checked onchange="angular.element(this).scope().coverageChanged(this)">Show coverage</label><br><br>';

                    for (var i = 1; i < labels.length; i++) {
                        div.innerHTML += '<i style="background:' + StoreService.getFacilitColors()[i] + '"></i> ' + ' &ndash; ' +labels[i] + '<br>';
                    }
                    
                }

                return div;
            };
            
            legend.addTo(map);
        }
        $scope.coverageChanged = function(e) {
            $scope.isShowCoverage = e.checked;
            var id = StoreService.getStatByDistrictName(boundsData.getData(), $scope.currentAreaName);
            fillMarkers(id);
        }
        

        // ------------ Navigate ------------

        $scope.onParamsUpdate = function () {
            var id = StoreService.getStatByDistrictName(boundsData.getData(), $scope.currentAreaName);
            //if (id != areaId) {
                setFocusOnArea(id);
            //}
            console.log($scope.currentCase); 
            info.update();
            updateLegend();
            geojson.setStyle(style);
        }

        setGeoJson(areaId);
        
        function setFocusOnArea(areaId) {
            this.areaId = areaId;
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
            var areaId = layer.feature.id;
            setFocusOnArea(areaId);
            currentLayer = layer;
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

            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
               // currentLayer.bringToFront();
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
            maxClusterRadius: 10,
            singleMarkerMode: false,
            iconCreateFunction: function (cluster) {
				return L.divIcon({ html: cluster.getChildCount(), className: 'mycluster', iconSize: L.point(20, 20) });
			}
        });
        map.addLayer(markers);

        function fillMarkers(areaId) {
           // console.log($scope.currentFacilityType);
            clearMarkers(areaId);
            var areaInfo = boundsData.getData()[areaId];
            var pointData = facilitiesData.getData();
            for (var i = 0; i < pointData.length; i++) {
                var element = pointData[i];
                if (element.District == areaInfo.name && ($scope.currentFacilityType == "Show All" || element.FacilityType == $scope.currentFacilityType)) {
                    var iconImg = StoreService.facilityTypes[element.FacilityType].icon;
                    if (!iconImg) iconImg = "marker-icon.png";

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
                        var c1 = L.circle([element.Latitude, element.Longitude], { color: '#004d40', fillColor: '#009688', fillOpacity: 0.1, opacity: 0, radius: Math.random() * 10000 });
                        var c2 = L.circle([element.Latitude, element.Longitude], { color: '#004d40', fillColor: '#009688', opacity: 0, fillOpacity: 0.2, radius: Math.random() * 3000 });
                        c1.addTo(map);
                        c2.addTo(map);
                        mapMarkers.push(c1);
                        mapMarkers.push(c2);
                    }
                
                    var marker = L.marker([element.Latitude, element.Longitude], { icon: icon });
                    markers.addLayer(marker);
                    marker.bindPopup("<b>" + element.Name + "</b><hr>Facility type: <b>" + element.FacilityType + '</b>' + 
                    "<br>Status:    <b>" + element.Status + '</b>' +
                    "<br>Village:   <b>" + element.Village + '</b>' +
                    "<br>Region:    <b>" + element.Region + '</b>' +
                    "<br>ControllingAgency: <b>" + element.ControllingAgency + '</b>' +
                    "<br>Cluster:   <b>" + element.Cluster + '</b>' +
                    "<br>ContactName:   <b>" + element.ContactName + '</b><hr>');
                }
            }
        }

        function getColor(grades, d) {
            d *= 1.1;
            return  d > grades[6] ?   '#BD0026' :
                    d > grades[5] ?   '#E31A1C' :
                    d > grades[4] ?   '#FC4E2A' :
                    d > grades[3] ?   '#FD8D3C' :
                    d > grades[2] ?   '#FEB24C' :
                    d > grades[1] ?   '#FED976' :
                                      '#FFEDA0' ;
        }

        function style(feature) {
            return {
                color: feature.properties.name == $scope.currentAreaName ? '#666' : $scope.isGlobalMap ? '#fff' : '#ccc',
                weight: $scope.isGlobalMap ? 2 : 3,
                fillColor: !$scope.isGlobalMap ? '#f2efe9' : getColor(cGrades, statisticData.getData()[feature.properties.name][$scope.currentCase]),
                fill: true,
                opacity: feature.properties.name == $scope.currentAreaName ? 1 : 1,
                fillOpacity: feature.properties.name == $scope.currentAreaName ? 0 : $scope.isGlobalMap ? 0.7 : 0.9,
            };
        }

    }]);
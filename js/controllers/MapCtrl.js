angular.module('ira').controller('MapCtrl', ['$rootScope', '$scope', '$http', "$stateParams", "commonData", "boundsData", "StoreService", "$state",
    function ($rootScope, $scope, $http, $stateParams, commonData, boundsData, StoreService, $state) {
        // ------------ State params ------------
        var areaId = $stateParams.areaId;

        // ------------ Map configure ------------
        var map = L.map('map');
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            minZoom: 7,
            maxZoom: 15,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Navigation button
        L.easyButton('fa-home', function(btn, map){
            $rootScope.currentRegion = "";
            setFocusOnArea(0);
            $state.go('root.map', {areaId: 0}, {reload:true});
        }).addTo(map);

        // ------------ Navigate ------------
        
        setGeoJson(areaId);
        setFocusOnArea(areaId);
        
        function setFocusOnArea(areaId) {
            var areaInfo = boundsData.getData()[areaId];
            var bounds = [[areaInfo.bounds[1], areaInfo.bounds[0]], [areaInfo.bounds[3], areaInfo.bounds[2]]];
            map.fitBounds(bounds);
        }
        
        function setGeoJson(areaId) {
            var areaInfo = boundsData.getData()[areaId];
            $.getJSON('data/geojson/' + areaInfo.geojson, function (data) {
                geojson = L.geoJson(data, {
                    clickable: true,
                    style: style,
                    onEachFeature: onEachFeature
                }).addTo(map);
            })
        }
        
        
        // var pointData = commonData.getData();
        // var geojson = null;
        
        //console.log("all data in map controller: " + JSON.stringify(pointData));
        
        
        // var areasInfo = boundsData.getData();
        // var area = areasInfo[areaId];
        // var bounds = [[area.bounds[1], area.bounds[0]], [area.bounds[3], area.bounds[2]]];
        // var myGeoJSONPath = 'data/geojson/' + area.geojson;
        
        // L.rectangle(bounds, {color: "#ff7800", weight: 1, fillOpacity: 0.01}).addTo(map);
       // map.fitBounds(bounds);

        //$scope.areaName = area.name;

        function zoomToFeature(e) {
            if ($rootScope.currentRegion != e.target.feature.properties.REGION || e.target.feature.id == 0) {
                $state.go('root.map', {areaId: StoreService.getAreaIdByGeoId(boundsData.getData(), e.target.feature.id)}, {reload: true, notify: true});
                $rootScope.currentRegion = e.target.feature.properties.REGION;
            } else {
                $state.go('root.map', {areaId: StoreService.getAreaIdByGeoId(boundsData.getData(), e.target.feature.id)}, {notify: false});
            }
            map.fitBounds(e.target.getBounds());
        }

        function onEachFeature(feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: zoomToFeature
            });
        }

        function resetHighlight(e) {
            var layer = e.target;
            geojson.resetStyle(e.target);
        }

        function highlightFeature(e) {
            var layer = e.target;

            layer.setStyle({
                color: '#333',
                opacity: 0.6,
                fillOpacity: 0.3
            });

            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
            }
        }

        // $.getJSON(myGeoJSONPath, function (data) {
        //     geojson = L.geoJson(data, {
        //         clickable: true,
        //         style: style,
        //         onEachFeature: onEachFeature
        //     }).addTo(map);
        // })

        /*for (var i = 0; i < pointData.length; i++) {
            var element = pointData[i];
            if (element.District == area.name || element.Region == area.name) {
                var iconImg = StoreService.getFacilityTypes()[element.Type];
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
                L.circle([element.Latitude, element.Longitude], { color: '#004d40', fillColor: '#009688', fillOpacity: 0.1, opacity: 0.1, radius: Math.random() * 10000 }).addTo(map);
                L.circle([element.Latitude, element.Longitude], { color: '#004d40', fillColor: '#009688', opacity: 0.2, fillOpacity: 0.2, radius: Math.random() * 3000 }).addTo(map);
                var marker = L.marker([element.Latitude, element.Longitude], { icon: icon }).addTo(map);
                marker.bindPopup("<b>" + element.Name + "</b><br>" + element.Type).openPopup();
            }
        }*/





        function style(feature) {
            return {
                color: '#444',
                fillColor: getColor(feature.properties.REGION),
                fill: true,
                opacity: 0.4,
                fillOpacity: 0.1
            };
        }

        function getColor(d) {
            var result = '#ffffff';
            switch (d) {
                case "North": 
                    result = '#f61111';
                    break;
                case "Central": 
                    result = '#f9c90a';
                    break;
                case "South": 
                    result = '#24c665';
                    break;

            }
            return result;
            // return d > 1500000 ? '#800026' :
            // d > 1000000 ? '#BD0026' :
            // d > 900000 ? '#E31A1C' :
            // d > 800000 ? '#FC4E2A' :
            // d > 700000 ? '#FD8D3C' :
            // d > 600000 ? '#FEB24C' :
            // d > 500000 ? '#FED976' :
            // '#FFEDA0';
        }

    }]);
angular.module('ira').controller('MapCtrl', ['$rootScope', '$scope', '$http', "$stateParams", "commonData", function($rootScope, $scope, $http, $stateParams, commonData) {
    var pointData = commonData.getData();
    var areaId = $stateParams.areaId;
    var geojson = null;

    var map = L.map('map');
    var markersDict = {
        "Central Hospital" : "marker_hospital.png",
        "District Hospital" : "marker_hospital.png",
        "Health Centre" : "marker_health_center.png",
        "Clinic" : "marker_clinic.png",
        "Maternity" : "marker_maternity.png",
        "Other Hospital" : "marker_hospital.png",
        "Rural/Community Hospital" : "marker_hospital.png",
        "Dispensary" : "marker_dispensary.png",
        "Health Post" : "marker_health_post.png"
    }
    //console.log("all data in map controller: " + JSON.stringify(pointData));

    
  
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        minZoom: 7,
        maxZoom: 15,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
    }).addTo(map);

    var toggle = L.easyButton({
        states: [{
            icon: 'fa-home',
            stateName: 'homeState',
            title: 'Home position',
            onClick: function(control) {
                control.state('backState');
            }
        }, {
          icon: 'fa-reply',
          stateName: 'backState',
          title: 'Back to up level',
          onClick: function(control) {
            control.state('homeState');
          }
        }]
      });
      toggle.addTo(map);

    $.getJSON('data/bounds.json', function(data){
        var areasInfo = data;
        var area = areasInfo[areaId];
        var bounds = [[area.bounds[1], area.bounds[0]], [area.bounds[3], area.bounds[2]]];
        var myGeoJSONPath = 'data/geojson/' + area.geojson;

       // L.rectangle(bounds, {color: "#ff7800", weight: 1, fillOpacity: 0.01}).addTo(map);
        map.fitBounds(bounds);

        $scope.areaName = area.name;

        function zoomToFeature(e) {
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
                color: '#666',
                dashArray: '',
            });
        
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
            }
        }
          
        $.getJSON(myGeoJSONPath,function(data){
            geojson = L.geoJson(data, {
                clickable: true,
                style: style,
                onEachFeature: onEachFeature
            }).addTo(map);
        })

        for (var i = 0; i < pointData.length; i++) {
            var element = pointData[i];
            if (element.District == area.name || element.Region == area.name) {
                var iconImg = markersDict[element.Type];
                if (!iconImg) iconImg = "marker-icon.png";
                
                var icon = L.icon({
                    iconUrl: 'img/markers/' + iconImg,
                    shadowUrl: 'img/markers/marker-shadow.png',
                    iconSize:     [25, 41], // size of the icon
                    shadowSize:   [41, 41], // size of the shadow
                    iconAnchor:   [12, 40], // point of the icon which will correspond to marker's location
                    shadowAnchor: [12, 40],  // the same for the shadow
                    popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
                });
                L.circle([element.Latitude, element.Longitude], {color: '#004d40', fillColor: '#009688', fillOpacity: 0.1, opacity: 0.1, radius: Math.random()*10000}).addTo(map);
                L.circle([element.Latitude, element.Longitude], {color: '#004d40', fillColor: '#009688', opacity: 0.2, fillOpacity: 0.2, radius: Math.random()*3000}).addTo(map);
                var marker = L.marker([element.Latitude, element.Longitude], {icon: icon}).addTo(map);
                marker.bindPopup("<b>" + element.Name+ "</b><br>" + element.Type).openPopup();
            }
        }
    })

    

    
        
    function style(feature) {
        return {
            color: '#999999',
            fillColor: getColor(feature.properties.POP),
            fill: true,
            opacity: 0.7,
            fillOpacity: 0.3
        };
    }
    
    function getColor(d) {
    return d > 1500000 ? '#800026' :
            d > 1000000  ? '#BD0026' :
            d > 900000  ? '#E31A1C' :
            d > 800000  ? '#FC4E2A' :
            d > 700000   ? '#FD8D3C' :
            d > 600000   ? '#FEB24C' :
            d > 500000   ? '#FED976' :
                        '#FFEDA0';
    }

}]);
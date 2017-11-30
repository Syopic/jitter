angular.module('sara').controller('DashboardCtrl', ['$scope',  "boundsData", "ServiceData", "$stateParams","DataFactory", "$timeout", function ($scope,  boundsData, ServiceData, $stateParams, DataFactory, $timeout) {

      

      $stateParams = {disease: "HIV", type: "SARA", country: "Malawi", year: "2010"};
      $scope.series = [];
      $scope.labels = [];
      var countIndicator = 1;
      var Data = {};
      var ind = ServiceData.diseaseIndicatorsDirectory.HIV;
      $scope.disease = $stateParams.disease ? $stateParams.disease : "HIV";
      $scope.cahrtIndicator = ind;
      $scope.selectIndicator = ind[0];
      $scope.series = [$scope.selectIndicator.name];
      $scope.type = "SARA";
      $scope.continent = "Africa";
      $scope.country = "Malawi";
      $scope.year = "2010";
      getData();


      $scope.getParams = function (){
            $stateParams = {disease: $scope.disease, type: $scope.type, country: $scope.country, year: $scope.year}; 
            console.log($stateParams) 
            getData();
            updateMap();
      }


      function getData() {
            DataFactory.getRegionsData($stateParams).then(function (response) {
                  $scope.series.splice(0);
                  $scope.labels.splice(0);
                  Data = response.data.data;
                  $scope.data = [onload(ind, ind[0])];
                  $scope.series = [ind[0].name];
            });
      }

      $timeout(function () {
            updateMap();

      }, 1000);



      $scope.onSellectDisease = function () {
            switch ($scope.disSel) {
                  case 1:
                        ind = ServiceData.diseaseIndicatorsDirectory.HIV;
                        $scope.disease = "HIV"
                       // $scope.series.splice(0);
                       // $scope.labels.splice(0);
                       // getData();
                       // $scope.series = [ind[0].name];
                      
                        $scope.multiselectModel.splice(0);
                        countIndicator = 1;
                       
                        break
                  case 2:
                        ind = ServiceData.diseaseIndicatorsDirectory.TB;
                        $scope.disease = "TB"
                       // $scope.series.splice(0);
                       // $scope.labels.splice(0);
                       // getData();
                       // $scope.series = [ind[0].name];
                       
                        $scope.multiselectModel.splice(0);
                        countIndicator = 1;
                        updateMap();
                        break
                  case 3:
                        ind = ServiceData.diseaseIndicatorsDirectory.Malaria;
                        $scope.disease = "Malaria"
                       // $scope.series.splice(0);
                       // $scope.labels.splice(0);
                      //  getData();
                       // $scope.series = [ind[0].name];
                      
                        $scope.multiselectModel.splice(0);
                        countIndicator = 1;
                        
                        break

                  default:

                        ind = ServiceData.diseaseIndicatorsDirectory.HIV;
                        //$scope.series.splice(0);
                      //  $scope.labels.splice(0);
                       // getData();
                      //  $scope.series = [ind[0].name];
                        
                        break
            }

      }

      $scope.onSellectIndicator = function () {

            // var dat = onload($scope.cahrtIndicator, $scope.selectIndicator);

      };




      function onload(indicator, selind) {

            $scope.cahrtIndicator = indicator;
            $scope.selectIndicator = selind;
            $scope.multiselectData = indicator;
            oneData = [];
            $scope.labels.splice(0);
            var code = selind.code;
            var index = selind.index;

            //load data
            angular.forEach(Data.regions, function (value, key) {
                  $scope.labels.push(value.name);
                  // console.log(lablel);
                  if (value.indexes[index].value == null) {
                        oneData.push(Math.floor(Math.random() * (100 + 1)));
                  } else {
                        oneData.push();
                  }
            })

            return oneData;
      };

      $scope.save = function () {

      };

      function onAddIndicator(selctedind) {
            switch (countIndicator) {
                  case 1:
                        $scope.series = [selctedind.name];
                        $scope.data = [onload(ind, selctedind)];
                        // console.log(ind, selctedind.name);

                        break
                  case 2:
                        $scope.series.push(selctedind.name);
                        $scope.data.push(onload(ind, selctedind));
                        // console.log("add-2", ind, selctedind.name);
                        break
                  case 3:
                        $scope.series.push(selctedind.name);
                        $scope.data.push(onload(ind, selctedind));
                        // console.log("add-3", ind, selctedind.name);
                        break
                  default:
                        $scope.series = [ind[0].name];
                        $scope.data = [onload(ind, ind[0])];
                        break
            }
      };

      ///Multisellect block



      $scope.multiselectModel = [];
      $scope.multiselectData = ind;


      $scope.multiselectSettings = {

            showCheckAll: false,
            styleActive: false,
            buttonClasses: "btn btn-outline-info",
            selectionLimit: 3,
            template: '{{option.name}}',
            scrollableHeight: '300px',
            scrollable: true,
            closeOnSelect: true


      };
      $scope.multiselectEvents = {

            onItemSelect: function (item) {
                  onAddIndicator(item);
                  countIndicator++;
                  if (countIndicator == 3) { countIndicator = 3 };
            },
            onItemDeselect: function (item) {
                  countIndicator--;

                  for (var i = 0; i < $scope.series.length; i++) {
                        if ($scope.series.length == 1) {
                              break
                        } else {
                              if ($scope.series[i] == item.name) {
                                    $scope.series.splice(i, 1);
                                    $scope.data.splice(i, 1);
                              }
                        }
                  }

            },
            onDeselectAll: function () {

                  $scope.series.splice(0);
                  countIndicator = 1;
                  $scope.series = [ind[0].name];
                  $scope.data = [onload(ind, ind[0])];

                  console.log("del all", $scope.series)
            }
      };
      ////-----------
      // ------------ Map configure ------------

      var cGrades = [];

      var map = L.map('map', {
            doubleClickZoom: false,
            zoomControl: false,
            dragging: false,
            tap: false,
            center: [51.505, -0.09],
            zoom: 13
      });

      map.scrollWheelZoom.disable();

      var mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      var info = L.control({ position: 'bottomleft' });
      info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'mapinfo'); // create a div with a class "info"
            this.update();
            return this._div;
      };

      info.update = function (props) {
            if (props) {
                  var value = $scope.data[0][props.id];
                  this._div.innerHTML = '<h4>' + props.name + '</h4>' + $scope.selectIndicator.name + ': <b>' + value.toFixed(2) + '</b>';
            } else {
                  this._div.innerHTML = $scope.selectIndicator.name;
            }
      };

      info.addTo(map);

      mainLayer.setOpacity(0.2);

      var legend = L.control({ position: 'topright' });

      function setGeoJson(areaId) {
            var areaInfo = boundsData.getData()[areaId];
            $.getJSON('data/geojson/' + areaInfo.geojson, function (data) {
                  geojson = L.geoJson(data, {
                        clickable: true,
                        style: style,
                        onEachFeature: onEachFeature
                  }).addTo(map);
                  updateMap();
            })
      }

      function onEachFeature(feature, layer) {
            layer.on({
                  mouseover: highlightFeature,
                  mouseout: resetHighlight,
                  click: highlightFeature
            });
      }

      function highlightFeature(e) {
            var layer = e.target;
            info.update(layer.feature);
            layer.setStyle({
                  color: '#8F5900',
                  weight: 3,
                  opacity: 1,
                  fillOpacity: 0.5
            });
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                  layer.bringToFront();
            }
      }

      function resetHighlight(e) {
            var layer = e.target;
            geojson.resetStyle(e.target);
            info.update();
      }

      function setFocusOnArea(aId) {
            var areaId = aId;
            var areaInfo = boundsData.getData()[areaId];
            var bounds = [[areaInfo.bounds[1], areaInfo.bounds[0]], [areaInfo.bounds[3], areaInfo.bounds[2]]];
            map.fitBounds(bounds);
      }

      function updateMap() {
            var cAreaId = 0;
            switch ($scope.currentArea) {
                  case "Central": cAreaId = 101; break;
                  case "Northern": cAreaId = 102; break;
                  case "Southern": cAreaId = 103; break;
            }
            setFocusOnArea(cAreaId)
            geojson.setStyle(style);

            // legend
            var minValue = Infinity;
            var maxValue = -Infinity;
            cGrades = [];
            angular.forEach($scope.data[0], function (value, key) {
                  minValue = Math.min(minValue, value);
                  maxValue = Math.max(maxValue, value);
            });
            var step = (maxValue - minValue) / 7;
            for (var i = 0; i < 7; i++) {
                  cGrades[i] = (i * step + minValue).toFixed(2);
            }

            legend.onAdd = function (map) {
                  var div;
                  div = L.DomUtil.create('div', 'maplegendinfo maplegend'),
                        grades = cGrades,
                        labels = [];

                  for (var i = 0; i < grades.length; i++) {
                        div.innerHTML +=
                              '<i style="background:' + ServiceData.getColor(grades, grades[i]) + '; border-radius: 3px; border: 1px solid; border-color: white;"></i> ' +
                              grades[i] + (grades[i + 1] ? ' &ndash; ' + grades[i + 1] + '<br>' : '+');
                  }
                  return div;
            };

            legend.addTo(map);
      }

      setGeoJson(0);

      function style(feature) {
            return {
                  color: '#fff',
                  weight: 2,
                  fillColor: ServiceData.getColor(cGrades, $scope.data[0][feature.id]),
                  fill: true,
                  opacity: 1,
                  fillOpacity: 0.9,
            };
      }



      ////-----------

      // $scope.labels = lablel;
      $scope.colors = [{
            backgroundColor: "#0288d1",
            borderColor: "#0288d1"
      }, {
            backgroundColor: "#d50000",
            borderColor: "#d50000"
      },
      {
            backgroundColor: "#dbb820",
            borderColor: "#dbb820"
      }];

      $scope.options = {
            animation: false,
            responsive: true,
            legend: {
                  display: true,
                  onClick: function (event, legendItem) { },
                  labels: {
                        boxWidth: 12 //Width legend colorbox
                  }
            },
            scales: {
                  xAxes: [{
                        gridLines: {
                              display: false
                        }
                  }]
            },
            tooltips: {
                  mode: "index",
                  intersect: false,
                  callbacks: {
                        label: function (tooltipItem, data) {
                              var dat = data.datasets[tooltipItem.datasetIndex].data;
                              var datasetLabel = dat[tooltipItem.index] || 0;
                              var label = data.labels[tooltipItem.index];
                              if (tooltipItem.datasetIndex == 1) {
                                    return datasetLabel.toFixed(2) + ' in District ' + label;
                              } else {
                                    return datasetLabel.toFixed(2) + ' in District ' + label;
                              }
                        }
                  }
            }
      };


}]);
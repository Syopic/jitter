angular.module('sara').controller('DashboardCtrl', ['$scope', "HIV", "TB", "Malaria", "ServiceData", function ($scope, HIV, TB, Malaria, ServiceData) {


      var lablel = [];
      var countIndicator = 1;
      var Data = HIV.getData().data;
      $scope.disease = "HIV";
      var ind = ServiceData.diseaseIndicatorsDirectory.HIV;
      $scope.cahrtIndicator = ind;
      $scope.selectIndicator = ind[0];
      $scope.series = [$scope.selectIndicator.name];
      $scope.data = [onload(ind, ind[0])];





      $scope.onSellectDisease = function () {
            switch ($scope.disease) {
                  case 1:
                        Data = new HIV.getData().data;
                        ind = ServiceData.diseaseIndicatorsDirectory.HIV;
                        $scope.data = [onload(ind, ind[0])];
                        $scope.series = [ind[0].name];
                        break
                  case 2:
                        Data = new TB.getData().data;
                        ind = ServiceData.diseaseIndicatorsDirectory.TB;
                        $scope.data = [onload(ind, ind[0])];
                        $scope.series = [ind[0].name];
                        break
                  case 3:
                        Data = new Malaria.getData().data;
                        ind = ServiceData.diseaseIndicatorsDirectory.Malaria;
                        $scope.data = [onload(ind, ind[0])];
                        $scope.series = [ind[0].name];
                        break

                  default:
                        Data = HIV.getData().data;
                        ind = ServiceData.diseaseIndicatorsDirectory.HIV;
                        $scope.data = [onload(ind, ind[0])];
                        $scope.series = [ind[0].name];
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
            lablel = [];
            var code = selind.code;
            var index = selind.index;

            //load data
            angular.forEach(Data.regions, function (value, key) {
                  lablel.push(key);

                  if (Data.regions[key][index][code] == null) {
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
            // displayProp: 'index',
            //selectedToTop: true,
            styleActive: true,
            buttonClasses: "btn btn-primary btn-block",
            selectionLimit: 3,
            template: '{{option.name}}',
            scrollableHeight: '300px',
            scrollable: true,


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

                 // console.log("del all", $scope.series)
            }
      };
      ////-----------

      $scope.labels = lablel;
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
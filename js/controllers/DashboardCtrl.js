angular.module('sara').controller('DashboardCtrl', function ($scope, $rootScope, $state, $window, $controller, ServiceData, $location, $timeout, $stateParams, DataFactory) {


     

      $scope.continent = $stateParams.continent ? $stateParams.continent : "Africa";
      $scope.country = $stateParams.country ? $stateParams.country : "Kenya";
      $scope.disease = $stateParams.disease ? $stateParams.disease : "HIV";
      $scope.type = $stateParams.type ? $stateParams.type : "SARA";
      $scope.year = $stateParams.year ? $stateParams.year : "2010";
      $scope.years = ServiceData.collections.Years;
      $scope.selectedYear = $scope.year;
      $scope.selectedDisease = $scope.disease;
      $scope.selectedHFA = $scope.type;

      // $rootScope.disease = $scope.disease;
      // $rootScope.type = $scope.type;
      // $rootScope.year = $scope.year;
      // $rootScope.mode = $scope.mode;
      // $rootScope.country = $scope.country;
      // $rootScope.continent = $scope.continent;

      updateSate();


      $scope.expanded = true;
      $scope.series = [];
      $scope.labels = [];
      $scope.data = [];
      var countIndicator = 1;
      var countAxis = [0];
      $scope.Data = {};

      switch ($scope.selectedDisease) {
            case "HIV":
                  $scope.ind = ServiceData.diseaseIndicatorsDirectory.HIV;
                  break
            case "TB":
                  $scope.ind = ServiceData.diseaseIndicatorsDirectory.TB;
                  break
            case "Malaria":
                  $scope.ind = ServiceData.diseaseIndicatorsDirectory.Malaria;
                  break
            default:
                  $scope.ind = ServiceData.diseaseIndicatorsDirectory.HIV;
                  break
      }
      $scope.seriesID = [];
      $scope.cahrtIndicator = $scope.ind;
      $scope.selectIndicator = $scope.ind[0];
      $scope.selectedIndicator = $scope.ind[0];
      $scope.selectIndicatorMap = $scope.ind[0];
      $scope.series = [$scope.selectIndicator.name];
      $scope.hfaSel = 1;
      $scope.isNoData = false;

      getData();


      function getData() {
            var params = {
                  disease: $scope.disease,
                  type: $scope.type,
                  country: $scope.country,
                  year: $scope.year
            }
            $scope.isPendinggData = true;
            DataFactory.getRegions(params).then(function (response) {
                  $scope.multiselectModel.splice(0);
                  countIndicator = 1;
                  $scope.series = [];
                  $scope.labels = [];
                  $scope.Data = response.data.data;
                  if ($scope.Data == null) {
                        $scope.isPendinggData = false;
                        $scope.isNoData = true;
                       // $window.alert("No regions!")
                       // $state.go('root.dashboard', { continent: "Africa", country: "Kenya", disease: $scope.disease, type: $scope.type, year: $scope.year });
                  }else {
                  $scope.data = [onload($scope.ind, $scope.ind[0])];
                  $scope.seriesID[0] = [{ count: 0, name: $scope.ind[0].name }];
                  $scope.legend = ServiceData.getLegend($scope.disease, $scope.ind[0].index);
                  $scope.series = ["[" + $scope.ind[0].code + "] " + $scope.legend + " " + $scope.ind[0].name];
                  // $scope.series = [$scope.ind[0].name];
                  //  $scope.options.scales.yAxes[0].display = true;
                  // $scope.options.scales.yAxes[1].display = false;
                  // $scope.options.scales.yAxes[2].display = false;
                  $scope.isPendinggData = false;
                  }
            });
      }

      $scope.onSellectDisease = function () {
            switch ($scope.selectedDisease) {
                  case "HIV":
                        $scope.ind = ServiceData.diseaseIndicatorsDirectory.HIV;
                        break
                  case "TB":
                        $scope.ind = ServiceData.diseaseIndicatorsDirectory.TB;
                        break
                  case "Malaria":
                        $scope.ind = ServiceData.diseaseIndicatorsDirectory.Malaria;
                        break
                  default:

                        break
            }

      }





      //load data
      function onload(indicator, selind) {

            $scope.cahrtIndicator = indicator;
            $scope.selectedIndicator = $scope.selectIndicator = selind;
            $scope.multiselectData = indicator;
            oneData = [];
            $scope.labels.splice(0);
            var code = selind.code;
            var index = selind.index;

            
            angular.forEach($scope.Data.regions, function (value, key) {
                  $scope.labels.push(value.name);
                  if (value.indexes[index].value == null) {
                        oneData.push(0)
                        // oneData.push(Math.floor(Math.random() * (100 + 1)));
                  } else {
                        oneData.push(value.indexes[index].value);
                  }
            })
            
            return oneData;
      };



      function onAddIndicator(selctedind) {
            switch (countIndicator) {
                  case 1:
                        $scope.series = [];
                        $scope.legend = ServiceData.getLegend($scope.disease, selctedind.index);
                        $scope.series = ["[" + selctedind.code + "] " + $scope.legend + " " + selctedind.name];
                        $scope.seriesID[0] = [{ count: 0, name: selctedind.name }];
                        $scope.data = [onload($scope.ind, selctedind)];
                        //$scope.options.scales.yAxes[0].display = true;
                        break
                  case 2:
                        $scope.legend = ServiceData.getLegend($scope.disease, selctedind.index);
                        $scope.series.push(["[" + selctedind.code + "] " + $scope.legend + " " + selctedind.name]);
                        $scope.seriesID[1] = [{ count: 1, name: selctedind.name }];
                        $scope.data.push(onload($scope.ind, selctedind));
                        //$scope.options.scales.yAxes[1].display = true;
                        break
                  case 3:
                        $scope.legend = ServiceData.getLegend($scope.disease, selctedind.index);
                        $scope.series.push(["[" + selctedind.code + "] " + $scope.legend + " " + selctedind.name]);
                        $scope.seriesID[2] = [{ count: 2, name: selctedind.name }];
                        $scope.data.push(onload($scope.ind, selctedind));
                        // $scope.options.scales.yAxes[2].display = true;
                        break
                  default:

                        $scope.data = [onload($scope.ind, $scope.ind[0])];
                        $scope.legend = ServiceData.getLegend($scope.disease, $scope.ind[0].index);
                        $scope.series = ["[" + $scope.ind[0].code + "] " + $scope.legend + " " + $scope.ind[0].name];
                        break
            }
      };

      ///Multisellect block

      $scope.multiselectModel = [];
      $scope.multiselectData = $scope.ind;
      $scope.multiselectSettings = {

            showCheckAll: false,
            styleActive: false,
            buttonClasses: "btn btn-info",
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
                              if ($scope.seriesID[i][0].name == item.name) {
                                    //  $scope.options.scales.yAxes[$scope.series.length - 1].display = false;
                                   
                                    $scope.series.splice(i, 1);
                                    $scope.data.splice(i, 1);
                                    $scope.seriesID.splice(i, 1);
                                   

                              }
                        }
                  }

            },
            onDeselectAll: function () {
                  // $scope.options.scales.yAxes[0].display = true;
                  // $scope.options.scales.yAxes[1].display = false;
                  // $scope.options.scales.yAxes[2].display = false;
                  $scope.series = [];
                  countIndicator = 1;
                  $scope.data = [onload($scope.ind, $scope.ind[0])];
                  $scope.legend = ServiceData.getLegend($scope.disease, $scope.ind[0].index);
                  $scope.series = ["[" + $scope.ind[0].code + "] " + $scope.legend + " " + $scope.ind[0].name];
                  $scope.seriesID[0] = [{ count: 0, name: $scope.ind[0].name }];
            }
      };
      ////-----------

      ////////////// ------------ Map configure ------------





      $scope.colors = [{
            backgroundColor: "#0288d1",
            borderColor: "#0288d1",
            yAxisID: 'y-axis-1'
      }, {
            backgroundColor: "#d50000",
            borderColor: "#d50000",
            yAxisID: 'y-axis-2'
      },
      {
            backgroundColor: "#dbb820",
            borderColor: "#dbb820",
            yAxisID: 'y-axis-3'
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
                  }],
                  yAxes: [
                        {
                              type: "linear", "id": "y-axis-1", display: false, position: "left",
                              suggestedMin: 0,

                              ticks: {
                                    beginAtZero: true,
                                    // Include a dollar sign in the ticks
                                    callback: function (value, index, values) {
                                          var valueFormat = 0;
                                          if (value > 100000) {
                                                valueFormat = (value.toFixed(2) / 10000);
                                          } else if (value <= 100000 && value > 1) {
                                                valueFormat = (value.toFixed(2) / 10000);
                                          } else if (value <= 1 && value > 0) {
                                                valueFormat = value.toFixed(2);
                                          }
                                          return valueFormat
                                    }
                              },
                              scaleLabel: {
                                    display: true,
                                    labelString: 'Varlue x10000'
                              }

                        },
                        {
                              type: "linear", "id": "y-axis-2", display: false, position: "left",
                              ticks: {
                                    // Include a dollar sign in the ticks
                                    beginAtZero: true,
                                    callback: function (value, index, values) {
                                          var valueFormat = 0;
                                          if (value > 1000000) {
                                                valueFormat = value.toExponential(0);
                                          } else if (value <= 1000000 && value > 1) {
                                                valueFormat = value.toFixed(0);
                                          } else if (value <= 1 && value > 0) {
                                                valueFormat = value.toFixed(2);
                                          }
                                          return valueFormat
                                    }
                              },
                              // scaleLabel: {
                              //       display: true,
                              //       labelString: 'Throughput'
                              //     }
                        },
                        {
                              type: "linear", "id": "y-axis-3", display: false, position: "left",
                              ticks: {
                                    // Include a dollar sign in the ticks
                                    beginAtZero: true,
                                    callback: function (value, index, values) {
                                          var valueFormat = 0;
                                          if (value > 1000000) {
                                                valueFormat = (value.toFixed(0) / 1000000) + "x10^6";
                                          } else if (value <= 1000000 && value > 1) {
                                                valueFormat = value.toFixed(0);
                                          } else if (value <= 1 && value > 0) {
                                                valueFormat = value.toFixed(2);
                                          }
                                          return valueFormat
                                    }
                              },
                              // scaleLabel: {
                              //       display: true,
                              //       labelString: 'Throughput'
                              //     }
                        }
                  ]
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
                                    return datasetLabel + ' in District ' + label;
                              } else {
                                    return datasetLabel + ' in District ' + label;
                              }
                        }
                  }
            }
      };


      $scope.viewTable = function () {
            var url = $state.href('root.datatable', { continent: $scope.continent, country: $scope.country, disease: $scope.disease, type: $scope.type, year: $scope.year, mode: 0 });
            $window.open(url, '_blank');
      }

      function updateSate(isUpdate = false) {
            $state.go('root.dashboard', { continent: $scope.continent, country: $scope.country, disease: $scope.disease, type: $scope.type, year: $scope.year }, { notify: isUpdate });
      }

      DataFactory.getContinents().then(function (response) {
            $scope.continents = response.data.continents;
            $scope.selectedContinent = $scope.continents.filter(c => c.name == $scope.continent)[0];
      });


      $scope.$watch('selectedContinent', function () {
            if ($scope.selectedContinent) {
                  DataFactory.getCountries($scope.selectedContinent.name).then(function (response) {
                        $scope.countries = response.data.countries;
                        $scope.selectedCountry = $scope.countries.filter(c => c.name == $scope.country)[0];
                        if (!$scope.selectedCountry) $scope.selectedCountry = $scope.countries[0];
                  });
            }
      });

      $scope.applyForm = function () {
            $scope.continent = $scope.selectedContinent.name;
            $scope.country = $scope.selectedCountry.name;
            $scope.type = $scope.selectedHFA;
            $scope.disease = $scope.selectedDisease;
            $scope.year = $scope.selectedYear;

            // $rootScope.disease = $scope.disease;
            // $rootScope.type = $scope.type;
            // $rootScope.year = $scope.year;
            // $rootScope.mode = $scope.mode;
            // $rootScope.country = $scope.country;
            // $rootScope.continent = $scope.continent;

            updateSate(true);
      }

      angular.extend(this, $controller('MapCtrl', { $scope: $scope }));

});
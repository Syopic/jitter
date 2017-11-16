angular.module('ira').controller('DashboardCtrl', ['$scope', "statisticData", "StoreService", "boundsData", "$timeout", function ($scope, statisticData, StoreService, boundsData, $timeout) {

  ///////-----------

  $scope.districtDef = "All";
  $scope.areaInfo = "";
  $scope.currentArea = "Malawi";
  $scope.currentCase = "Percentage of all facilities offering screening and referral for TB diagnosis";
  $scope.currentCaseTwo = "Percent of all facilities offering any TB diagnosis services";
  $scope.selectedType = "bar";
  $scope.typeCheked = true;
  $scope.facilityTypes = "";



  /////-----------
  var data1 = StoreService.getDataByCase(statisticData.getData(), $scope.currentCaseTwo);
  var data2 = StoreService.getDataByCase(statisticData.getData(), $scope.currentCase);
  $scope.dashboardTwoData = [data1, data2];
  $scope.dashboardOneData = [data1, data2];
  
  var areas = StoreService.getDataByCase(statisticData.getData(), "District");
  $scope.areasCollection = areas;
  
  $scope.caseCollection = StoreService.getCaseCollectionDashboard();
  $scope.facilityTypesCollection = StoreService.getFacilityTypes();
  
  


  $scope.onParamsUpdate = function () {

    if($scope.currentArea == "Malawi"){
    var data1 = StoreService.getDataByCase(statisticData.getData(), $scope.currentCaseTwo);
    var data2 = StoreService.getDataByCase(statisticData.getData(), $scope.currentCase);
    $scope.dashboardLabel =$scope.areasCollection;
    $scope.dashboardTwoData = [data1, data2];
    uptateChart($scope.selectedType);
    getDataPie();
  }else{
   // var distinct = "District";
    var data1 = StoreService.getDataByArea(statisticData.getData(), $scope.currentCaseTwo,  $scope.currentArea);
    var data2 = StoreService.getDataByArea(statisticData.getData(), $scope.currentCase,  $scope.currentArea);
    var label = StoreService.getDataByArea(statisticData.getData(), "District",  $scope.currentArea);
    $scope.dashboardLabel = label;
    $scope.dashboardTwoData = [data1, data2];
    uptateChart($scope.selectedType);
    getDataPie();
     //console.log( label);
  
  }
   
  };



  //////------
  var cGrades = [0, 0.05, 0.5];
  function getDataPie() {
    var maxValue = 0;
    angular.forEach(statisticData.getData(), function (area, key) {
      maxValue = Math.max(maxValue, area[$scope.currentCase]);
    });
    var step = maxValue / 3;
    for (var i = 0; i < 3; i++) {
      var k = i + 1;
      cGrades[i] = (k * step).toFixed(2);
    }
    $scope.dashboardDataDough = [cGrades];
   // console.log(cGrades, maxValue);
  }
  /////////////-------Data main dashboard----------------- 

  $timeout(function () {
    $scope.dashboardMainOptions = $scope.dashboardTwoOptions;
    $scope.dashboardMainColor = $scope.dashboardTwoColor;
    $scope.dashboardMainData = $scope.dashboardTwoData;
    $scope.dashboardLabel = $scope.areasCollection;
    $scope.dashboardMainLabel = $scope.areasCollection;
    $scope.dashboardMainSeries = [$scope.currentCaseTwo, $scope.currentCase];
  }, 1000);

  $scope.changeChartType = function () {
    if ($scope.typeCheked == true) {
      uptateChart("bar");
    } else {
      uptateChart("line");
    }
  };

  function uptateChart(type) {
    if (type == "bar") {
      $scope.selectedType = "bar";
      $scope.dashboardMainOptions = $scope.dashboardTwoOptions;
      $scope.dashboardMainColor = $scope.dashboardTwoColor;
      $scope.dashboardMainData = $scope.dashboardTwoData;
      $scope.dashboardMainLabel = $scope.dashboardLabel;
      $scope.dashboardMainSeries = [$scope.currentCaseTwo, $scope.currentCase];

    } else {
      $scope.selectedType = "line";
      $scope.dashboardMainOptions = $scope.dashboardOneOptions;
      $scope.dashboardMainColor = $scope.dashboardOneColor;
      $scope.dashboardMainData = $scope.dashboardTwoData;
      $scope.dashboardMainLabel = $scope.dashboardLabel;
      $scope.dashboardMainSeries = [$scope.currentCaseTwo, $scope.currentCase];
    }


  };


  ///////////------------sel checkbox
  $scope.items = [1, 2, 3, 4, 5];
  $scope.selected = [1];
  $scope.toggle = function (item, list) {
    var idx = list.indexOf(item);
    if (idx > -1) {
      list.splice(idx, 1);
    }
    else {
      list.push(item);
    }
  };

  $scope.exists = function (item, list) {
    return list.indexOf(item) > -1;
  };

  $scope.isIndeterminate = function () {
    return ($scope.selected.length !== 0 &&
      $scope.selected.length !== $scope.items.length);
  };

  $scope.isChecked = function () {
    return $scope.selected.length === $scope.items.length;
  };

  $scope.toggleAll = function () {
    if ($scope.selected.length === $scope.items.length) {
      $scope.selected = [];
    } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
      $scope.selected = $scope.items.slice(0);
    }
  };



  function getTab1(id) {

  };


  ////////////////
  $scope.colors = [{
    backgroundColor: "#0ac29d",
    borderColor: "#0ac29d"

  }, {
    backgroundColor: "#ec4657",
    borderColor: "#ec4657"

  }];

  /////////////-----------line dash-----
  $scope.dashboardOneSeries = ['TB testing'];
  $scope.dashboardOneColor = [{
    // backgroundColor: "rgba(0, 0, 0, 0)",
   borderColor: "#0ac29d",
    pointBackgroundColor: "#0ac29d",
    yAxisID: "y-axis-1"
  }, {
    //backgroundColor: "rgba(0, 0, 0, 0)",
    borderColor: "#ec4657",
    pointBackgroundColor: "#ec4657",
    yAxisID: "y-axis-2"
  }];

  $scope.dashboardOneOptions = {
    animation: false,
    responsive: true,
    legend: {
      display: true,
      onClick: function (event, legendItem) { }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [
        {
          type: "linear", "id": "y-axis-1", display: true, position: "left",
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return value.toFixed(2);
            }
          },

        },
        {
          type: "linear", "id": "y-axis-2", display: true, position: "right",
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return value.toFixed(2);
            }
          }
        }]
    },
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          var dat = data.datasets[tooltipItem.datasetIndex].data;
          var datasetLabel = dat[tooltipItem.index] || 'Other';
          var label = data.labels[tooltipItem.index];
          //console.log("Ind ", data.datasets, "Dat ");

          if (tooltipItem.datasetIndex == 1) {
            return datasetLabel + ' in District ' + label;

          } else {
            return datasetLabel + '% in District ' + label;

          }
        }
      }
    }
    // tooltips: {
    //   mode: "label"
    // }
  };

  ////////////////------------Dashboard MAIN--------------

  $scope.dashboardTwoColor = [{
    backgroundColor: "#0ac29d",
   // borderColor: "#0ac29d",
    yAxisID: 'y-axis-1'
  }, {
    backgroundColor: "#ec4657",
   // borderColor: "#ec4657",
    yAxisID: 'y-axis-2'
  }];
  $scope.dashboardTwoOptions = {
    animation: false,
    responsive: true,
    legend: {
      display: true,
      onClick: function (event, legendItem) { }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [
        {
          type: "linear", "id": "y-axis-1", display: true, position: "left",
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return (value*100).toFixed(0) + '%';
            }
          },

        },
        {
          type: "linear", "id": "y-axis-2", display: false, position: "right",
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return (value*100).toFixed(0) + '%';
            }
          }
        }
      ]
    },
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          var dat = data.datasets[tooltipItem.datasetIndex].data;
          var datasetLabel = dat[tooltipItem.index] || '0';
          var label = data.labels[tooltipItem.index];
         // console.log("Ind ", data.datasets, "Dat ");

          if (tooltipItem.datasetIndex == 1) {
            return (datasetLabel*100).toFixed(2) + '% in District ' + label;

          } else {
            return (datasetLabel*100).toFixed(2) + '% in District ' + label;

          }
        }
      }
      // callbacks: {
      //   label: function (tooltipItems, data) {
      //     return tooltipItems.yLabel + "%";
      //   }
      // }

    }
  };
 // $scope.dashboardTwoSeries = ['GenXpert Errors %', $scope.currentCase];

  /////////////////////////--------Dashboard Doughnut-----------

  $scope.dashboardDataDough = [[95, 400, 832]];

  $scope.dashboardLabelsDough = ["0-100", "100-500", "500-1000",];
  $scope.dashboardDougOptions = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    legend: {
      display: true,
      position: 'top'

    },
    animation: {
      onComplete: function () {
        var ctx = this.chart.ctx;

        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
        ctx.fillStyle = "gray";
        ctx.textAlign = 'center';
        ctx.textBaseline = "middle";
        var fontSize = 25;
        ctx.font = fontSize;

        var text = "Current 82%";

        ///console.log( this.data.datasets);
        this.data.datasets.forEach(function (dataset) {
          for (var i = 0; i < dataset.data.length; i++) {
            for (var key in dataset._meta) {
              var model = dataset._meta[key].data[i]._model;
              ctx.fillText(text, model.x, model.y - 5);
            }
          }
        });
      }
    },
  };

  $scope.dashboardDougColor = [{
    backgroundColor: [
      'rgba(198, 41, 52, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 42, 1)',

    ]
    // ,
    // borderColor: "#0ac29d",
    // borderColor: [
    //     'rgba(255,99,132,1)',
    //     'rgba(54, 162, 235, 1)',
    //     'rgba(255, 206, 86, 1)',
    //     'rgba(75, 192, 192, 1)',
    //     'rgba(153, 102, 255, 1)',
    //     'rgba(255, 159, 64, 1)'
    // ],
  //   borderWidth: 1
   }];


  //------------GAUGE--------------
  // var opts = {
  //   angle: 0.15, // The span of the gauge arc
  //   lineWidth: 0.44, // The line thickness
  //   radiusScale: 1, // Relative radius
  //   pointer: {
  //     length: 0.6, // // Relative to gauge radius
  //     strokeWidth: 0.035, // The thickness
  //     color: '#000000' // Fill color
  //   },
  //   staticZones: [
  //     { strokeStyle: "#F03E3E", min: 0, max: 1300 }, // Red from 0 to 1300
  //     { strokeStyle: "#FFDD00", min: 1300, max: 1500 }, // Yellow
  //     { strokeStyle: "#30B32D", min: 1500, max: 2200 }, // Green
  //     { strokeStyle: "#FFDD00", min: 2200, max: 2600 }, // Yellow
  //     { strokeStyle: "#F03E3E", min: 2600, max: 3000 }  // Red
  //   ],
  //   limitMax: false,     // If false, max value increases automatically if value > maxValue
  //   limitMin: false,     // If true, the min value of the gauge will be fixed
  //   //colorStart: '#6FADCF',   // Colors
  //   // colorStop: '#8FC0DA',    // just experiment with them
  //   // strokeColor: '#E0E0E0',  // to see which ones work best for you
  //   // generateGradient: true,
  //   // highDpiSupport: true     // High resolution support
  // };
  // var target = document.getElementById('foo'); // your canvas element
  // var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  // gauge.maxValue = 3000; // set max gauge value
  // gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  // gauge.animationSpeed = 32; // set animation speed (32 is default value)
  // gauge.set(1250); // set actual value

  // $.fn.gauge = function (opts) {
  //   this.each(function () {
  //     var $this = $(this),
  //       data = $this.data();

  //     if (data.gauge) {
  //       data.gauge.stop();
  //       delete data.gauge;
  //     }
  //     if (opts !== false) {
  //       data.gauge = new Gauge(this).setOptions(opts);
  //     }
  //   });
  //   return this;
  // };
  ////////////////-------------------------

  ////////////////------------Dashboard Pie--------------
  $scope.labels = ["2015", "2016", "2017"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [10, 30, 60]
  ];
  $scope.dashboardPieOptions = {
    animation: false,
    responsive: true,
    legend: {
      display: true
    },

    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var dat = data.datasets[tooltipItem.datasetIndex].data;
          var datasetLabel = dat[tooltipItem.index] || 'Other';
          var label = data.labels[tooltipItem.index];
          // console.log("Ind ",tooltipItem.datasetIndex,"Dat ", dat);
          return datasetLabel + '% : ' + label;
        }
      }
    }
  };
  $scope.dashboardPieColors = [
    {
      backgroundColor: ["#80bf41", "#f2d548", "#c62934", "#0359a5", "#e86203",
        "#d9184b", "#b441bf", "#bf7b41", "#e2e21b", "#0d1366", "#ededed"],
     // borderColor: "#0ac29d"

    }, {
      backgroundColor: ["#80bf41", "#f2d548", "#0359a5", "#e86203",
        "#d9184b", "#b441bf", "#bf7b41", "#e2e21b", "#0d1366", "#ededed"],
    //  borderColor: "#0ac29d"

    }];

  $scope.onClick = function (points, evt) {
    console.log(points, evt);

  };



  ////////////////------------Dashboard Horizontal--------------
  $scope.dashboardHorizOptions = {
    legend: {
      display: false
    },
    //   animation: {
    //     onComplete: function () {
    //         var ctx = this.chart.ctx;
    //         ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
    //         //ctx.fillStyle = "black";
    //         ctx.textAlign = 'right';
    //         ctx.textBaseline = 'center';

    //         this.data.datasets.forEach(function (dataset)
    //         {
    //             for (var i = 0; i < dataset.data.length; i++) {
    //                 for(var key in dataset._meta)
    //                 {
    //                     var model = dataset._meta[key].data[i]._model;
    //                     ctx.fillText(dataset.data[i], model.x, model.y - 5);
    //                 }
    //             }
    //         });
    //     }
    // },
    scales: {
      xAxes: [{
        gridLines: {
          display: true
        }
      }],
      yAxes: [{
        gridLines: {
          display: true
        },
        ticks: {
          display: false
          // Include a dollar sign in the ticks
          //   callback: function(value, index, values) {
          //       return value +'%';
          //  }
        }
      }]
    },

    tooltips: {
      enabled: true
      //mode: 'point'
    }
  };
  $scope.labelsHor = ["District Hospital", "Health Centre", "Rural/Community Hospital", "Dispensary", "Clinic", "Health Post", "Central Hospital", "Other Hospital", "Maternity"];
  $scope.dataHor = [[3089, 2132, 1854, 2326, 3274, 3679, 3075, 3075, 3075]];
  $scope.colorsHor = [{
    backgroundColor: ["#80bf41", "#f2d548", "#c62934", "#0359a5", "#e86203",
      "#d9184b", "#b441bf", "#bf7b41", "#e2e21b", "#0d1366", "#ededed"],
   // borderColor: "#0ac29d"

  }, {
    backgroundColor: "#ec4657",
   // borderColor: "#ec4657"

  }];
  ///////////////////////////////---------------


}]);
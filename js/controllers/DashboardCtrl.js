angular.module('ira').controller('DashboardCtrl', ['$scope', "statisticData", "StoreService", "boundsData", "$timeout",
  function ($scope, statisticData, StoreService, boundsData, $timeout) {

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

    mainLayer.setOpacity(0.2);

    var legend = L.control({ position: 'topright' });

    function setGeoJson(areaId) {
      var areaInfo = boundsData.getData()[areaId];
      $.getJSON('data/geojson/' + areaInfo.geojson, function (data) {
        geojson = L.geoJson(data, {
          clickable: true,
          style: style,
          //onEachFeature: onEachFeature
        }).addTo(map);
        updateMap();
      })


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
        case "Nothern": cAreaId = 102; break;
        case "South": cAreaId = 103; break;
      }
      setFocusOnArea(cAreaId)
      geojson.setStyle(style);

      // legend
      var minValue = Infinity;
      var maxValue = -Infinity;
      cGrades = [];
      angular.forEach(statisticData.getData(), function (area, key) {
        if (key != "Malawi") {
          minValue = Math.min(minValue, area[$scope.currentCase]);
          maxValue = Math.max(maxValue, area[$scope.currentCase]);
        }
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
            '<i style="background:' + StoreService.getColor(grades, grades[i]) + '; border-radius: 3px; border: 1px solid; border-color: white;"></i> ' +
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
        fillColor: StoreService.getColor(cGrades, statisticData.getData()[feature.properties.name][$scope.currentCase]),
        fill: true,
        opacity: 1,
        fillOpacity: 0.9,
      };
    }

  /////-----------LOAD DATA DEFAULT--------------------

  $scope.districtDef = "All";
  $scope.areaInfo = "";
  $scope.currentArea = "Malawi";
  $scope.currentCase = "Percentage of all facilities offering screening and referral for TB diagnosis";
  $scope.currentCaseTwo = "Percent of all facilities offering any TB diagnosis services";
  $scope.selectedType = "bar";
  $scope.typeCheked = true;
  $scope.disableForm = false;
  $scope.facilityTypes = "";
 
  var doughnut1LenghtData = 0;
  var doughnut2LenghtData = 0;

  var data1 = StoreService.getDataByCase(statisticData.getData(), $scope.currentCaseTwo);
  var data2 = StoreService.getDataByCase(statisticData.getData(), $scope.currentCase);
  var dataLine1 = StoreService.getDataByCase(statisticData.getData(), "TB Case Notification Rate Per 100000");
  var dataLine2 = StoreService.getDataByCase(statisticData.getData(), "Number Of Estimated TB Cases");
  var dataDoughnut1 = StoreService.getDataByCase(statisticData.getData(), "TB Case Notification Rate Per 100000");
  var dataDoughnut2 = StoreService.getDataByCase(statisticData.getData(), "Number of examinations per week per functional microscopy");

  $scope.dashboardTwoData = [data1, data2];
  $scope.dashboardOneData = [dataLine1, dataLine2];
  
  var areas = StoreService.getDataByCase(statisticData.getData(), "District");
  $scope.areasCollection = areas;
  
  $scope.caseCollection = StoreService.getCaseCollectionDashboard();
  $scope.facilityTypesCollection = StoreService.getFacilityTypeParam("name");
  
  
////////////---------UPDATE DATA DASHBOARD IF CONTROL PANEL PARAMETERS CHANGE----------------

  $scope.onParamsUpdate = function () {
    if($scope.currentArea == "Malawi"){
      var data1 = StoreService.getDataByCase(statisticData.getData(), $scope.currentCaseTwo);
      var data2 = StoreService.getDataByCase(statisticData.getData(), $scope.currentCase);
      var dataDoughnut1 = StoreService.getDataByCase(statisticData.getData(), "TB Case Notification Rate Per 100000");
      var dataDoughnut2 = StoreService.getDataByCase(statisticData.getData(), "Number of examinations per week per functional microscopy");
      $scope.dashboardLabel =$scope.areasCollection;
      $scope.dashboardTwoData = [data1, data2];
      uptateChart($scope.selectedType);
      getDataDoughnut(dataDoughnut1, "One");
      getDataDoughnut(dataDoughnut2, "Two");
      doughnut1LenghtData = dataDoughnut1.length;
      doughnut2LenghtData = dataDoughnut2.length;
    }else{
      // var distinct = "District";
      var data1 = StoreService.getDataByArea(statisticData.getData(), $scope.currentCaseTwo,  $scope.currentArea);
      var data2 = StoreService.getDataByArea(statisticData.getData(), $scope.currentCase,  $scope.currentArea);
      var label = StoreService.getDataByArea(statisticData.getData(), "District",  $scope.currentArea);
      var dataDoughnut1 = StoreService.getDataByArea(statisticData.getData(), "TB Case Notification Rate Per 100000",  $scope.currentArea);
      var dataDoughnut2 = StoreService.getDataByArea(statisticData.getData(), "Number of examinations per week per functional microscopy",  $scope.currentArea);
      $scope.dashboardLabel = label;
      $scope.dashboardTwoData = [data1, data2];
      uptateChart($scope.selectedType);
      getDataDoughnut(dataDoughnut1, "One");
      getDataDoughnut(dataDoughnut2, "Two");
      doughnut1LenghtData = dataDoughnut1.length;
      doughnut2LenghtData = dataDoughnut2.length;
    }
    updateMap();
  };
  //////------------Get Data Doughnut-----------
  
  function getDataDoughnut(data, doughnut) {
    var dGrades = [];
    var maxValue = 0;
    var Zone1 = 0;
    var Zone2 = 0;
    var Zone3 = 0;
    angular.forEach(data, function (value, key) {
      maxValue = Math.max(maxValue, value);
    });
    var step = maxValue / 3;
    for (var i = 0; i < 3; i++) {
      var k = i + 1;
      dGrades[i] = (k * step).toFixed(0);
    }
    for (var i = 0; i < data.length; i++){
    if(data[i] < dGrades[0] ){
      Zone1++;
    }
    if(data[i]>=dGrades[0] && data[i]<=dGrades[1]){
      Zone2++
    }
    if(data[i]> dGrades[1]){
      Zone3++
    }
    }
    if(doughnut == "One"){
    $scope.dashboardDataDoughOne = [[Zone1, Zone2, Zone3]];
    $scope.dashboardLabelsDoughOne = ["<" + dGrades[0], dGrades[0]+"-"+dGrades[1] , ">"+dGrades[1]];
   // console.log(data, dGrades, maxValue,  $scope.dashboardDataDough);4
     }
     if(doughnut == "Two"){
      $scope.dashboardDataDoughTwo = [[Zone1, Zone2, Zone3]];
      $scope.dashboardLabelsDoughTwo = ["<" + dGrades[0], dGrades[0]+"-"+dGrades[1] , ">"+dGrades[1]];
     // console.log(data,  $scope.dashboardDataDoughTwo);
       }
  
  }
  /////////////-------ASYNCHRONOUS LOADING DATA MAIN DASHBOARD------------------------------- 

  $timeout(function () {
    $scope.dashboardMainOptions = $scope.dashboardTwoOptions;
    $scope.dashboardMainColor = $scope.dashboardTwoColor;
    $scope.dashboardMainData = $scope.dashboardTwoData;
    $scope.dashboardLabel = $scope.areasCollection;
    $scope.dashboardMainLabel = $scope.areasCollection;
    $scope.dashboardMainSeries = [$scope.currentCaseTwo, $scope.currentCase];
    getDataDoughnut(dataDoughnut1, "One");
    getDataDoughnut(dataDoughnut2, "Two");
    doughnut1LenghtData = dataDoughnut1.length;
    doughnut2LenghtData = dataDoughnut2.length;
  }, 1000);
  //////////////-----------SWITCH Absolute or Percent----------------------------------------
  $scope.changeChartType = function () {
    if ($scope.typeCheked == true) {
      $scope.disableForm = false;
      uptateChart("bar");
    } else {
      uptateChart("line");
      $scope.disableForm = true;
    }
  };
  /////////////------------CHANGE TYPE bar or line-------------------------------------------  
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
      $scope.dashboardMainData = $scope.dashboardOneData;
      $scope.dashboardMainLabel = $scope.dashboardLabel;
      $scope.dashboardMainSeries = ["TB Case Notification Rate Per 100000", "Number Of Estimated TB Cases"];
    }


  };

  /////////////-----------Dashboard MAIN line type-------------------------------------------
 
  $scope.dashboardOneColor = [{
    // backgroundColor: "rgba(0, 0, 0, 0)",
   borderColor: "#575d63",
    pointBackgroundColor: "#575d63",
    yAxisID: "y-axis-1"
  }, {
    //backgroundColor: "rgba(0, 0, 0, 0)",
    borderColor: "#2bb095",
    pointBackgroundColor: "#2bb095",
    yAxisID: "y-axis-2"
  }];

  $scope.dashboardOneOptions = {
    animation: false,
    responsive: true,
    maintainAspectRatio: false,
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
            return datasetLabel.toFixed(2) + ' in District ' + label;

          } else {
            return datasetLabel.toFixed(2) + ' in District ' + label;

          }
        }
      }
    }
    // tooltips: {
    //   mode: "label"
    // }
  };

  ////////////////------------Dashboard MAIN bar type----------------------------------------

  $scope.dashboardTwoColor = [{
    backgroundColor: "#575d63",
   // borderColor: "#0ac29d",
    yAxisID: 'y-axis-1'
  }, {
    backgroundColor: "#2bb095",
   // borderColor: "#ec4657",
    yAxisID: 'y-axis-2'
  }];
  $scope.dashboardTwoOptions = {
    animation: false,
    responsive: true,
    maintainAspectRatio: false,
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
          type: "linear", "id": "y-axis-2", display: true, position: "right",
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


  /////////////////////////--------Dashboard Doughnut type-----------------------------------

  $scope.dashboardDougOneOptions = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    legend: {
      display: true,
      position: 'top',
      labels:{
        boxWidth:30 //Width legend colorbox
    }

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

        var text = "Target 82%";

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
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          var dat = data.datasets[tooltipItem.datasetIndex].data;
          var datasetLabel = dat[tooltipItem.index] || '0';
          var label = data.labels[tooltipItem.index];
            return (datasetLabel/doughnut1LenghtData*100).toFixed(0) + '% in range ' + label;
           // return (datasetLabel);
        }
      }


    }


  };
  $scope.dashboardDougTwoOptions = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    legend: {
      display: true,
      position: 'top',
      labels:{
        boxWidth:30 //Width legend colorbox
    }

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

        var text = "Target 62%";

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
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          var dat = data.datasets[tooltipItem.datasetIndex].data;
          var datasetLabel = dat[tooltipItem.index] || '0';
          var label = data.labels[tooltipItem.index];
            return (datasetLabel/doughnut2LenghtData*100).toFixed(0) + '% in range ' + label;
           // return (datasetLabel);
        }
      }


    }


  };

  $scope.dashboardDougColor = [{
    backgroundColor: ["#599259", "#cd6062","#575d63",     "#ededed"],
 // borderColor: "#0ac29d"

}, {
  backgroundColor: ["#80bf41", "#f2d548", "#0359a5", "#e86203",
    "#d9184b", "#b441bf", "#bf7b41", "#e2e21b", "#0d1366", "#ededed"],
//  borderColor: "#0ac29d"

}];

  ////////////////------------Dashboard Horizontal type--------------
  $scope.dashboardHorizOptions = {
    responsive: true,
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
  $scope.seriesHor = ["Quantity"];
  $scope.labelsHor = ["District Hospital", "Health Centre", "Rural/Community Hospital", "Dispensary", "Clinic", "Health Post", "Central Hospital", "Other Hospital", "Maternity"];
  $scope.dataHor = [[3089, 2132, 1854, 2326, 3274, 3679, 3075, 3075, 3075]];
  $scope.colorsHor = [{
    backgroundColor: ["#2bb095", "#feb250", "#599259", "#6293c1", "#a37db9",
      "#cd6062", "#7b6a5f", "#f1868e", "#575d63", "#0d1366", "#ededed"],
   // borderColor: "#0ac29d"

  }]
  // , {
  //   backgroundColor: "#ec4657",
  //  // borderColor: "#ec4657"

  // };
  ///////////////////////////////---------------



}]);
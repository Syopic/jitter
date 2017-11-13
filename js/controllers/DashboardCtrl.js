angular.module('ira').controller('DashboardCtrl', ['$scope', "statisticData", "StoreService", "boundsData", function ($scope, statisticData, StoreService, boundsData) {

  ///////-----------

  $scope.districtDef = "All";
  $scope.areaInfo = "";
  $scope.currentAreaName = "Malawi";
  $scope.currentCase = "";
  $scope.selectedType ="";

  /////-----------
  $scope.areasCollection = StoreService.getAreaCollection(boundsData.getData());
  //$scope.areaInfo = statisticData.getData()[areaInfo.name];
  $scope.caseCollection = StoreService.getCaseCollection();


  //////------
  $scope.changeChartType = function(type){
    $scope.selectedType=$scope.chartType[1];
    console.log($scope.selectedType);
  }
  
  $scope.chartType = ["bar", "line"];
  
  $scope.selectedType=$scope.chartType[0];
  console.log($scope.selectedType);
   
  ///////////------------sel checkbox
  $scope.items = [1,2,3,4,5];
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

  $scope.isIndeterminate = function() {
    return ($scope.selected.length !== 0 &&
        $scope.selected.length !== $scope.items.length);
  };

  $scope.isChecked = function() {
    return $scope.selected.length === $scope.items.length;
  };

  $scope.toggleAll = function() {
    if ($scope.selected.length === $scope.items.length) {
      $scope.selected = [];
    } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
      $scope.selected = $scope.items.slice(0);
    }
  };

  /////////////-------Data main dashboard----------------- 
  var dashboarID = "TB_testing";
  $.getJSON('data/tabletest.json', function (dashboard) {

    $scope.dashboard = dashboard;
    var dashboardSel = $scope.dashboard[dashboarID];
    var element = {};
    $scope.dashboardOneLabel = [];
    $scope.dashboardOneDat = [];
    $scope.dashboardTwoLabel = [];
    $scope.dashboardTwoDat = [];
    for (var i in dashboardSel) {
      if (typeof (element[dashboardSel[i].District]) == "undefined") {
        $scope.dashboardOneLabel.push(dashboardSel[i].District);
      };
      if (typeof (element[dashboardSel[i].Data]) == "undefined") {
        $scope.dashboardOneDat.push(dashboardSel[i].Data);
      };
    }
    $scope.dashboardOneData = [$scope.dashboardOneDat];
    dashboarID = "GenXpert_errors_percent";
    dashboardSel = $scope.dashboard[dashboarID];
    for (var i in dashboardSel) {
      if (typeof (element[dashboardSel[i].District]) == "undefined") {
        $scope.dashboardTwoLabel.push(dashboardSel[i].District);
      };
      if (typeof (element[dashboardSel[i].Data]) == "undefined") {
        $scope.dashboardTwoDat.push(dashboardSel[i].Data);
      };
      $scope.dashboardTwoData = [$scope.dashboardTwoDat, $scope.dashboardOneDat];
    }
    //console.log("DASH1 ",$scope.dashboardOneData );
    // console.log("DASH2 ",$scope.dashboardTwoData );
  });

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

  ////////////////------------Dashboard MAIN--------------

  $scope.colorsTwo = [{
    backgroundColor: "#0ac29d",
    borderColor: "#0ac29d",
    yAxisID: 'y-axis-1'
  }, {
    backgroundColor: "#ec4657",
    borderColor: "#ec4657",
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
              return value + '%';
            }
          },

        },
        {
          type: "linear", "id": "y-axis-2", display: true, position: "right"
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
          // console.log("Ind ",tooltipItem.datasetIndex,"Dat ", dat);

          if (tooltipItem.datasetIndex == 1) {
            return datasetLabel + ' in District ' + label;

          } else {
            return datasetLabel + '% in District ' + label;

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
  $scope.dashboardTwoSeries = ['GenXpert Errors %', "TB testing"];

  /////////////////////////--------Dashboard Doughnut-----------

  $scope.dashboardDataDough = [[95, 400, 832]];

  $scope.dashboardLabelsDough = ["0-100", "100-500", "500-1000", ];
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
      
    ],
    borderColor: "#0ac29d",
    // borderColor: [
    //     'rgba(255,99,132,1)',
    //     'rgba(54, 162, 235, 1)',
    //     'rgba(255, 206, 86, 1)',
    //     'rgba(75, 192, 192, 1)',
    //     'rgba(153, 102, 255, 1)',
    //     'rgba(255, 159, 64, 1)'
    // ],
    borderWidth: 1
  }];


  //------------GAUGE--------------
  var opts = {
    angle: 0.15, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.6, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
    },
    staticZones: [
      { strokeStyle: "#F03E3E", min: 0, max: 1300 }, // Red from 0 to 1300
      { strokeStyle: "#FFDD00", min: 1300, max: 1500 }, // Yellow
      { strokeStyle: "#30B32D", min: 1500, max: 2200 }, // Green
      { strokeStyle: "#FFDD00", min: 2200, max: 2600 }, // Yellow
      { strokeStyle: "#F03E3E", min: 2600, max: 3000 }  // Red
    ],
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    //colorStart: '#6FADCF',   // Colors
    // colorStop: '#8FC0DA',    // just experiment with them
    // strokeColor: '#E0E0E0',  // to see which ones work best for you
    // generateGradient: true,
    // highDpiSupport: true     // High resolution support
  };
  var target = document.getElementById('foo'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 3000; // set max gauge value
  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 32; // set animation speed (32 is default value)
  gauge.set(1250); // set actual value

  $.fn.gauge = function (opts) {
    this.each(function () {
      var $this = $(this),
        data = $this.data();

      if (data.gauge) {
        data.gauge.stop();
        delete data.gauge;
      }
      if (opts !== false) {
        data.gauge = new Gauge(this).setOptions(opts);
      }
    });
    return this;
  };
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
      borderColor: "#0ac29d"

    }, {
      backgroundColor: ["#80bf41", "#f2d548", "#0359a5", "#e86203",
        "#d9184b", "#b441bf", "#bf7b41", "#e2e21b", "#0d1366", "#ededed"],
      borderColor: "#0ac29d"

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
    backgroundColor: "#0ac29d",
    borderColor: "#0ac29d"

  }, {
    backgroundColor: "#ec4657",
    borderColor: "#ec4657"

  }];
  ///////////////////////////////---------------
  $scope.resolvedIssues = {
    series: ["Resolved Issues"],
    data: [
      [879, 377]
    ],
    labels: ["Resolved", "Unresolved"],
    colors: [{
      backgroundColor: ["#0ac29d", "#555"]
    }],
    options: {
      animation: false,
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      tooltips: {
        enabled: false
      }
    }
  };

  $scope.unresolvedIssues = {
    series: ["Unresolved Issues"],
    data: [
      [879, 377]
    ],
    labels: ["Resolved", "Unresolved"],
    colors: [{
      backgroundColor: ["#555", "#0ac29d"]
    }],
    options: {
      animation: false,
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      tooltips: {
        enabled: false
      }
    }
  };

  $scope.locationStatistics = {
    backgroundColor: null,
    color: "#ffffff",
    enableZoom: true,
    hoverOpacity: 0.7,
    selectedColor: "#555",
    showTooltip: true,
    scaleColors: [
      "#0ac29d",
      "#067d5d"
    ],
    values: {
      us: 8167,
      cn: 6724,
      gb: 6527,
      br: 6330,
      it: 6232,
      jp: 6035,
      ru: 5871,
      fr: 5658,
      in: 5494,
      au: 5133,
      ca: 4379,
      de: 4034,
      kp: 4887,
      ar: 4608,
      mx: 4018,
      tr: 2706,
      za: 2066,
      sa: 1624,
      id: 1902,
      gd: 656,
      lb: 656,
      cm: 640,
      cz: 640,
      ke: 640,
      mr: 640,
      om: 640,
      sk: 640,
      as: 623,
      be: 623,
      eg: 623,
      ma: 623,
      me: 623,
      my: 623,
      nz: 623,
      tv: 623,
      ua: 623,
      dz: 607,
      fj: 607,
      er: 590,
      fm: 590,
      ie: 590,
      ml: 590,
      pw: 590,
      se: 590,
      sl: 590,
      ug: 590,
      bs: 574,
      mk: 574,
      mt: 574,
      sv: 574,
      sy: 574,
      tn: 574,
      ba: 558,
      cg: 558,
      gs: 558,
      bf: 541,
      ci: 541,
      ge: 541,
      lv: 541,
      ph: 541,
      sz: 541,
      am: 525,
      bb: 525,
      iq: 525,
      af: 508,
      az: 508,
      ee: 508,
      ad: 492,
      bt: 492,
      by: 492,
      ch: 492,
      et: 492,
      gh: 492,
      gy: 492,
      io: 492,
      kn: 492,
      np: 492,
      so: 492,
      bi: 476,
      bz: 476,
      gm: 476,
      ki: 476,
      mw: 476,
      tg: 476,
      cd: 459,
      cl: 459,
      cv: 459,
      do: 459,
      la: 459,
      sb: 459,
      st: 459,
      ck: 443,
      pg: 443,
      rs: 443,
      tl: 443,
      na: 426,
      ve: 426,
      ae: 410,
      at: 410,
      kh: 410,
      lc: 410,
      lr: 410,
      sc: 410,
      tz: 410,
      uz: 410,
      bd: 394,
      bw: 394,
      gt: 394,
      jm: 394,
      pa: 394,
      pl: 394,
      tm: 394,
      tw: 394,
      fi: 377,
      ir: 377,
      ly: 377,
      sr: 377,
      ec: 361,
      ga: 361,
      mc: 361,
      mh: 361,
      mn: 361,
      bh: 344,
      gw: 344,
      sd: 344,
      sn: 344,
      to: 344,
      bn: 328,
      cr: 328,
      dm: 328,
      kw: 328,
      mg: 328,
      pe: 328,
      py: 328,
      th: 328,
      bo: 312,
      hn: 312,
      hu: 312,
      ng: 312,
      no: 312,
      pt: 312,
      al: 295,
      ao: 295,
      lt: 295,
      mm: 295,
      mu: 295,
      mv: 295,
      ne: 295,
      ni: 295,
      ss: 295,
      tt: 295,
      ws: 295,
      lu: 279,
      md: 279,
      si: 279,
      bg: 262,
      dk: 262,
      gn: 262,
      ht: 262,
      km: 262,
      vc: 262,
      vu: 262,
      zw: 262,
      cf: 246,
      cu: 246,
      cy: 246,
      gr: 246,
      nu: 246,
      rw: 246,
      sm: 246,
      tj: 246,
      vn: 246,
      ag: 230,
      bj: 230,
      pk: 230,
      ro: 230,
      ye: 230,
      co: 213,
      hr: 213,
      il: 213,
      kz: 213,
      qa: 213,
      gq: 197,
      jo: 197,
      mz: 197,
      sg: 197,
      td: 197,
      zm: 197,
      dj: 180,
      is: 180,
      kg: 180,
      lk: 180,
      nl: 180,
      nr: 180,
      uy: 180,
      es: 164,
      ls: 164
    }
  };
}]);
angular.module('ira').controller('DashboardCtrl', ['$scope', function($scope) {
    $scope.visitors = {
        series: ["Visitors"],
        data: [
          [25250, 23370, 25568, 28961, 26762, 30072, 25135]
        ],
        labels: ["Jun 21", "Jun 20", "Jun 19", "Jun 18", "Jun 17", "Jun 16", "Jun 15"],
        colors: [{
          backgroundColor: "rgba(10, 194, 157, 0.03)",
          borderColor: "#0ac29d",
          pointBackgroundColor: "transparent",
          pointBorderColor: "transparent"
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
              ticks: {
                max: 32327
              },
              display: false
            }]
          },
          tooltips: {
            enabled: false
          }
        }
      };
  
      $scope.newVisitors = {
        series: ["New visitors"],
        data: [
          [8796, 11317, 8678, 9452, 8453, 11853, 9945]
        ],
        labels: ["Jun 21", "Jun 20", "Jun 19", "Jun 18", "Jun 17", "Jun 16", "Jun 15"],
        colors: [{
          backgroundColor: "rgba(10, 194, 157, 0.03)",
          borderColor: "#0ac29d",
          pointBackgroundColor: "transparent",
          pointBorderColor: "transparent"
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
              ticks: {
                max: 12742
              },
              display: false
            }]
          },
          tooltips: {
            enabled: false
          }
        }
      };
  
      $scope.pageviews = {
        series: ["Pageviews"],
        data: [
          [116196, 145160, 124419, 147004, 134740, 120846, 137225]
        ],
        labels: ["Jun 21", "Jun 20", "Jun 19", "Jun 18", "Jun 17", "Jun 16", "Jun 15"],
        colors: [{
          backgroundColor: "rgba(10, 194, 157, 0.03)",
          borderColor: "#0ac29d",
          pointBackgroundColor: "transparent",
          pointBorderColor: "transparent"
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
              ticks: {
                max: 158029
              },
              display: false
            }]
          },
          tooltips: {
            enabled: false
          }
        }
      };
  
      $scope.averageDuration = {
        series: ["Average duration"],
        data: [
          [13590442, 12362934, 13639564, 13055677, 12915203, 11009940, 11542408]
        ],
        labels: ["Jun 21", "Jun 20", "Jun 19", "Jun 18", "Jun 17", "Jun 16", "Jun 15"],
        colors: [{
          backgroundColor: "rgba(10, 194, 157, 0.03)",
          borderColor: "#0ac29d",
          pointBackgroundColor: "transparent",
          pointBorderColor: "transparent"
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
              ticks: {
                max: 14662531
              },
              display: false
            }]
          },
          tooltips: {
            enabled: false
          }
        }
      };
  
      $scope.audienceOverview = {
        series: ["This week", "Last week"],
        data: [
          [29432, 20314, 17665, 22162, 31194, 35053, 29298],
          [9956, 22607, 30963, 22668, 16338, 22222, 39238]
        ],
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        colors: [{
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "#0ac29d",
          pointBackgroundColor: "#0ac29d"
        }, {
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "#ec4657",
          pointBackgroundColor: "#ec4657"
        }],
        options: {
          animation: false,
          responsive: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
          tooltips: {
            mode: "label"
          }
        }
      };
  
      $scope.signups = {
        series: ["This week", "Last week"],
        data: [
          [3089, 2132, 1854, 2326, 3274, 3679, 3075],
          [983, 2232, 3057, 2238, 1613, 2194, 3874]
        ],
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        colors: [{
          backgroundColor: "#0ac29d",
          borderColor: "#0ac29d"
        }, {
          backgroundColor: "#ec4657",
          borderColor: "#ec4657"
        }],
        options: {
          animation: false,
          responsive: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
          tooltips: {
            mode: "label"
          }
        }
      };
  
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
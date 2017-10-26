angular.module("elephant")
  // Map Controller
  .controller("MapCtrl", function($scope) {
    var map = L.map('map', {
      //[[[32.1240234375,-17.245744208],[36.2377960682,-17.245744208],[36.2377960682,-9.2281044758],[32.1240234375,-9.2281044758],[32.1240234375,-17.245744208]]]
      center: [-13.3, 34 ],
      zoom: 7
    });

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: 'Datenquelle: <a href="www.basemap.at">basemap.at</a>'
    }).addTo(map);

    // var p1 = L.point(10, 10),
    // p2 = L.point(40, 60),
    // bounds = L.bounds(p1, p2);
  })
  // Dashboard Controller
  .controller("DashboardCtrl", function($scope) {
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
  })

  // Dashboard 2 Controller
  .controller("Dashboard2Ctrl", function($scope) {
    $scope.visitors = {
      series: ["Visitors"],
      data: [
        [29432, 20314, 17665, 22162, 31194, 35053, 29298, 36682, 45325, 39140, 22190, 28014, 24121, 39355, 36064, 45033, 42995, 30519, 20246, 42399, 37536, 34607, 33807, 30988, 24562, 49143, 44579, 43600, 18064, 36068, 41605]
      ],
      labels: ["Aug 1", "Aug 2", "Aug 3", "Aug 4", "Aug 5", "Aug 6", "Aug 7", "Aug 8", "Aug 9", "Aug 10", "Aug 11", "Aug 12", "Aug 13", "Aug 14", "Aug 15", "Aug 16", "Aug 17", "Aug 18", "Aug 19", "Aug 20", "Aug 21", "Aug 22", "Aug 23", "Aug 24", "Aug 25", "Aug 26", "Aug 27", "Aug 28", "Aug 29", "Aug 30", "Aug 31"],
      colors: [{
        backgroundColor: "#0ac29d",
        borderColor: "#0ac29d"
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
          }]
        }
      }
    };

    $scope.sales = {
      series: ["Sales"],
      data: [
        [3601.09, 2780.29, 1993.39, 4277.07, 4798.58, 6390.75, 3337.37, 6786.94, 5632.1, 5460.43, 3905.17, 3070.82, 4263.55, 7132.64, 6103.88, 6020.76, 4662.25, 4084.34, 3464.87, 4947.89, 4486.55, 5898.46, 5528.33, 3616.03, 3255.17, 7881.06, 7293.8, 6863.6, 3161.31, 6711.08, 7942.9]
      ],
      labels: ["Aug 1", "Aug 2", "Aug 3", "Aug 4", "Aug 5", "Aug 6", "Aug 7", "Aug 8", "Aug 9", "Aug 10", "Aug 11", "Aug 12", "Aug 13", "Aug 14", "Aug 15", "Aug 16", "Aug 17", "Aug 18", "Aug 19", "Aug 20", "Aug 21", "Aug 22", "Aug 23", "Aug 24", "Aug 25", "Aug 26", "Aug 27", "Aug 28", "Aug 29", "Aug 30", "Aug 31"],
      colors: [{
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
            display: false
          }]
        }
      }
    };
  })

  // Dashboard 3 Controller
  .controller("Dashboard3Ctrl", function($scope) {
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

    $scope.newTickets = {
      series: ["New tickets"],
      data: [
        [206, 127, 155, 215, 162, 195, 196]
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
              max: 231
            },
            display: false
          }]
        },
        tooltips: {
          enabled: false
        }
      }
    };

    $scope.resolvedTickets = {
      series: ["Resolved tickets"],
      data: [
        [90, 140, 134, 103, 144, 141, 127]
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
              max: 155
            },
            display: false
          }]
        },
        tooltips: {
          enabled: false
        }
      }
    };

    $scope.firstResponse = {
      series: ["First Response"],
      data: [
        [22808686, 21025319, 21963756, 13234568, 19898816, 15017935, 12671632]
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
              max: 24519337
            },
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
  })

  // Widgets Controller
  .controller("WidgetsCtrl", function($scope) {
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
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderColor: "#ffffff",
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
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderColor: "#ffffff",
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
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderColor: "#ffffff",
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

    $scope.pageviews2 = {
      series: ["Pageviews"],
      data: [
        [116196, 145160, 124419, 147004, 134740, 120846, 137225]
      ],
      labels: ["Jun 21", "Jun 20", "Jun 19", "Jun 18", "Jun 17", "Jun 16", "Jun 15"],
      colors: [{
        backgroundColor: "#067961",
        borderColor: "#067961",
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

    $scope.pageviews3 = {
      series: ["Pageviews"],
      data: [
        [111842, 103515, 113251, 128280, 118539, 133201, 111333],
        [116196, 145160, 124419, 147004, 134740, 120846, 137225]
      ],
      labels: ["Jun 21", "Jun 20", "Jun 19", "Jun 18", "Jun 17", "Jun 16", "Jun 15"],
      colors: [{
        backgroundColor: "transparent",
        borderColor: "#aeea00",
        borderDash: [2, 4],
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent"
      }, {
        backgroundColor: "#1c9ea0",
        borderColor: "#1c9ea0",
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

    $scope.signups = {
      series: ["Signups"],
      data: [
        [676, 297, 479, 226, 979, 743, 572]
      ],
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      colors: [{
        backgroundColor: "#067961",
        borderColor: "transparent"
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
            },
            ticks: {
              fontColor: "#fff"
            }
          }],
          yAxes: [{
            display: false
          }]
        },
        tooltips: {
          mode: "label"
        }
      }
    };

    $scope.newReturning = {
      series: ["Resolved Issues"],
      data: [
        [18422, 32594]
      ],
      labels: ["New", "Returning"],
      colors: [{
        backgroundColor: ["#aeea00", "rgba(0, 0, 0, 0.15)"],
        borderColor: ["#029acf", "#029acf"]
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
  })

  // Buttons Controller
  .controller("ButtonsCtrl", function($scope) {
    $scope.checkbox = {
      yes: true,
      no: false
    };

    $scope.radio = "Day";

    $scope.dropdown = [{
      icon: "icon icon-user-plus icon-lg icon-fw",
      title: "Invite people to collaborate...",
      description: "People can sync and edit."
    }, {
      icon: "icon icon-link icon-lg icon-fw",
      title: "Send link...",
      description: "People can view."
    }];

    $scope.isCollapsed = true;
  })

  // Flags Controller
  .controller("FlagsCtrl", function($scope) {
    $scope.countries = [{
      "phone": "+1",
      "code": "us",
      "name": "United States +1"
    }, {
      "phone": "+93",
      "code": "af",
      "name": "Afghanistan (‫افغانستان‬‎) +93"
    }, {
      "phone": "+355",
      "code": "al",
      "name": "Albania (Shqipëri) +355"
    }, {
      "phone": "+213",
      "code": "dz",
      "name": "Algeria +213"
    }, {
      "phone": "+1684",
      "code": "as",
      "name": "American Samoa +1684"
    }, {
      "phone": "+376",
      "code": "ad",
      "name": "Andorra +376"
    }, {
      "phone": "+244",
      "code": "ao",
      "name": "Angola +244"
    }, {
      "phone": "+1264",
      "code": "ai",
      "name": "Anguilla +1264"
    }, {
      "phone": "+1268",
      "code": "ag",
      "name": "Antigua & Barbuda +1268"
    }, {
      "phone": "+54",
      "code": "ar",
      "name": "Argentina +54"
    }, {
      "phone": "+374",
      "code": "am",
      "name": "Armenia (Հայաստան) +374"
    }, {
      "phone": "+297",
      "code": "aw",
      "name": "Aruba +297"
    }, {
      "phone": "+61",
      "code": "au",
      "name": "Australia +61"
    }, {
      "phone": "+43",
      "code": "at",
      "name": "Austria (Österreich) +43"
    }, {
      "phone": "+994",
      "code": "az",
      "name": "Azerbaijan (Azərbaycan) +994"
    }, {
      "phone": "+1242",
      "code": "bs",
      "name": "Bahamas +1242"
    }, {
      "phone": "+973",
      "code": "bh",
      "name": "Bahrain (‫البحرين‬‎) +973"
    }, {
      "phone": "+880",
      "code": "bd",
      "name": "Bangladesh (বাংলাদেশ) +880"
    }, {
      "phone": "+1246",
      "code": "bb",
      "name": "Barbados +1246"
    }, {
      "phone": "+375",
      "code": "by",
      "name": "Belarus (Беларусь) +375"
    }, {
      "phone": "+32",
      "code": "be",
      "name": "Belgium +32"
    }, {
      "phone": "+501",
      "code": "bz",
      "name": "Belize +501"
    }, {
      "phone": "+229",
      "code": "bj",
      "name": "Benin (Bénin) +229"
    }, {
      "phone": "+1441",
      "code": "bm",
      "name": "Bermuda +1441"
    }, {
      "phone": "+975",
      "code": "bt",
      "name": "Bhutan (འབྲུག) +975"
    }, {
      "phone": "+591",
      "code": "bo",
      "name": "Bolivia +591"
    }, {
      "phone": "+387",
      "code": "ba",
      "name": "Bosnia & Herzegovina (Босна и Херцеговина) +387"
    }, {
      "phone": "+267",
      "code": "bw",
      "name": "Botswana +267"
    }, {
      "phone": "+55",
      "code": "br",
      "name": "Brazil (Brasil) +55"
    }, {
      "phone": "+246",
      "code": "io",
      "name": "British Indian Ocean Territory +246"
    }, {
      "phone": "+1284",
      "code": "vg",
      "name": "British Virgin Islands +1284"
    }, {
      "phone": "+673",
      "code": "bn",
      "name": "Brunei +673"
    }, {
      "phone": "+359",
      "code": "bg",
      "name": "Bulgaria (България) +359"
    }, {
      "phone": "+226",
      "code": "bf",
      "name": "Burkina Faso +226"
    }, {
      "phone": "+257",
      "code": "bi",
      "name": "Burundi (Uburundi) +257"
    }, {
      "phone": "+855",
      "code": "kh",
      "name": "Cambodia (កម្ពុជា) +855"
    }, {
      "phone": "+237",
      "code": "cm",
      "name": "Cameroon (Cameroun) +237"
    }, {
      "phone": "+1",
      "code": "ca",
      "name": "Canada +1"
    }, {
      "phone": "+238",
      "code": "cv",
      "name": "Cabo Verde (Kabu Verdi) +238"
    }, {
      "phone": "+236",
      "code": "cf",
      "name": "Central African Republic (République centrafricaine) +236"
    }, {
      "phone": "+235",
      "code": "td",
      "name": "Chad (Tchad) +235"
    }, {
      "phone": "+56",
      "code": "cl",
      "name": "Chile +56"
    }, {
      "phone": "+86",
      "code": "cn",
      "name": "China (中国) +86"
    }, {
      "phone": "+57",
      "code": "co",
      "name": "Colombia +57"
    }, {
      "phone": "+269",
      "code": "km",
      "name": "Comoros (‫جزر القمر‬‎) +269"
    }, {
      "phone": "+243",
      "code": "cg",
      "name": "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo) +243"
    }, {
      "phone": "+242",
      "code": "cg",
      "name": "Congo (Republic) (Congo-Brazzaville) +242"
    }, {
      "phone": "+682",
      "code": "ck",
      "name": "Cook Islands +682"
    }, {
      "phone": "+506",
      "code": "cr",
      "name": "Costa Rica +506"
    }, {
      "phone": "+225",
      "code": "ci",
      "name": "Côte d'Ivoire +225"
    }, {
      "phone": "+385",
      "code": "hr",
      "name": "Croatia (Hrvatska) +385"
    }, {
      "phone": "+53",
      "code": "cu",
      "name": "Cuba +53"
    }, {
      "phone": "+599",
      "code": "cw",
      "name": "Curaçao +599"
    }, {
      "phone": "+357",
      "code": "cy",
      "name": "Cyprus (Κύπρος) +357"
    }, {
      "phone": "+420",
      "code": "cz",
      "name": "Czech Republic (Česká republika) +420"
    }, {
      "phone": "+45",
      "code": "dk",
      "name": "Denmark (Danmark) +45"
    }, {
      "phone": "+253",
      "code": "dj",
      "name": "Djibouti +253"
    }, {
      "phone": "+1767",
      "code": "do",
      "name": "Dominica +1767"
    }, {
      "phone": "+1809",
      "code": "do",
      "name": "Dominican Republic (República Dominicana) +1809"
    }, {
      "phone": "+593",
      "code": "ec",
      "name": "Ecuador +593"
    }, {
      "phone": "+20",
      "code": "eg",
      "name": "Egypt (‫مصر‬‎) +20"
    }, {
      "phone": "+503",
      "code": "sv",
      "name": "El Salvador +503"
    }, {
      "phone": "+240",
      "code": "gq",
      "name": "Equatorial Guinea (Guinea Ecuatorial) +240"
    }, {
      "phone": "+291",
      "code": "er",
      "name": "Eritrea +291"
    }, {
      "phone": "+372",
      "code": "ee",
      "name": "Estonia (Eesti) +372"
    }, {
      "phone": "+251",
      "code": "et",
      "name": "Ethiopia +251"
    }, {
      "phone": "+500",
      "code": "fk",
      "name": "Falkland Islands (Islas Malvinas) +500"
    }, {
      "phone": "+298",
      "code": "fo",
      "name": "Faroe Islands (Føroyar) +298"
    }, {
      "phone": "+679",
      "code": "fj",
      "name": "Fiji +679"
    }, {
      "phone": "+358",
      "code": "fi",
      "name": "Finland (Suomi) +358"
    }, {
      "phone": "+33",
      "code": "fr",
      "name": "France +33"
    }, {
      "phone": "+594",
      "code": "gf",
      "name": "French Guiana (Guyane française) +594"
    }, {
      "phone": "+689",
      "code": "pf",
      "name": "French Polynesia (Polynésie française) +689"
    }, {
      "phone": "+241",
      "code": "ga",
      "name": "Gabon +241"
    }, {
      "phone": "+220",
      "code": "gm",
      "name": "Gambia +220"
    }, {
      "phone": "+995",
      "code": "gs",
      "name": "Georgia (საქართველო) +995"
    }, {
      "phone": "+49",
      "code": "de",
      "name": "Germany (Deutschland) +49"
    }, {
      "phone": "+233",
      "code": "gh",
      "name": "Ghana (Gaana) +233"
    }, {
      "phone": "+350",
      "code": "gi",
      "name": "Gibraltar +350"
    }, {
      "phone": "+30",
      "code": "gr",
      "name": "Greece (Ελλάδα) +30"
    }, {
      "phone": "+299",
      "code": "gl",
      "name": "Greenland (Kalaallit Nunaat) +299"
    }, {
      "phone": "+1473",
      "code": "gd",
      "name": "Grenada +1473"
    }, {
      "phone": "+590",
      "code": "gp",
      "name": "Guadeloupe +590"
    }, {
      "phone": "+1671",
      "code": "gu",
      "name": "Guam +1671"
    }, {
      "phone": "+502",
      "code": "gt",
      "name": "Guatemala +502"
    }, {
      "phone": "+224",
      "code": "pg",
      "name": "Guinea (Guinée) +224"
    }, {
      "phone": "+245",
      "code": "gw",
      "name": "Guinea-Bissau (Guiné-Bissau) +245"
    }, {
      "phone": "+592",
      "code": "gy",
      "name": "Guyana +592"
    }, {
      "phone": "+509",
      "code": "ht",
      "name": "Haiti +509"
    }, {
      "phone": "+504",
      "code": "hn",
      "name": "Honduras +504"
    }, {
      "phone": "+852",
      "code": "hk",
      "name": "Hong Kong (香港) +852"
    }, {
      "phone": "+36",
      "code": "hu",
      "name": "Hungary (Magyarország) +36"
    }, {
      "phone": "+354",
      "code": "is",
      "name": "Iceland (Ísland) +354"
    }, {
      "phone": "+91",
      "code": "in",
      "name": "India (भारत) +91"
    }, {
      "phone": "+62",
      "code": "id",
      "name": "Indonesia +62"
    }, {
      "phone": "+98",
      "code": "ir",
      "name": "Iran (‫ایران‬‎) +98"
    }, {
      "phone": "+964",
      "code": "iq",
      "name": "Iraq (‫العراق‬‎) +964"
    }, {
      "phone": "+353",
      "code": "ie",
      "name": "Ireland +353"
    }, {
      "phone": "+972",
      "code": "il",
      "name": "Israel (‫ישראל‬‎) +972"
    }, {
      "phone": "+39",
      "code": "it",
      "name": "Italy (Italia) +39"
    }, {
      "phone": "+1876",
      "code": "jm",
      "name": "Jamaica +1876"
    }, {
      "phone": "+81",
      "code": "jp",
      "name": "Japan (日本) +81"
    }, {
      "phone": "+962",
      "code": "jo",
      "name": "Jordan (‫الأردن‬‎) +962"
    }, {
      "phone": "+7",
      "code": "kz",
      "name": "Kazakhstan (Казахстан) +7"
    }, {
      "phone": "+254",
      "code": "ke",
      "name": "Kenya +254"
    }, {
      "phone": "+686",
      "code": "ki",
      "name": "Kiribati +686"
    }, {
      "phone": "+965",
      "code": "kw",
      "name": "Kuwait (‫الكويت‬‎) +965"
    }, {
      "phone": "+996",
      "code": "kg",
      "name": "Kyrgyzstan (Кыргызстан) +996"
    }, {
      "phone": "+856",
      "code": "la",
      "name": "Laos (ລາວ) +856"
    }, {
      "phone": "+371",
      "code": "lv",
      "name": "Latvia (Latvija) +371"
    }, {
      "phone": "+961",
      "code": "lb",
      "name": "Lebanon (‫لبنان‬‎) +961"
    }, {
      "phone": "+266",
      "code": "ls",
      "name": "Lesotho +266"
    }, {
      "phone": "+231",
      "code": "lr",
      "name": "Liberia +231"
    }, {
      "phone": "+218",
      "code": "ly",
      "name": "Libya (‫ليبيا‬‎) +218"
    }, {
      "phone": "+423",
      "code": "li",
      "name": "Liechtenstein +423"
    }, {
      "phone": "+370",
      "code": "lt",
      "name": "Lithuania (Lietuva) +370"
    }, {
      "phone": "+352",
      "code": "lu",
      "name": "Luxembourg +352"
    }, {
      "phone": "+853",
      "code": "mo",
      "name": "Macau (澳門) +853"
    }, {
      "phone": "+389",
      "code": "mk",
      "name": "Macedonia (FYROM) (Македонија) +389"
    }, {
      "phone": "+261",
      "code": "mg",
      "name": "Madagascar (Madagasikara) +261"
    }, {
      "phone": "+265",
      "code": "mw",
      "name": "Malawi +265"
    }, {
      "phone": "+60",
      "code": "my",
      "name": "Malaysia +60"
    }, {
      "phone": "+960",
      "code": "mv",
      "name": "Maldives +960"
    }, {
      "phone": "+223",
      "code": "so",
      "name": "Mali +223"
    }, {
      "phone": "+356",
      "code": "mt",
      "name": "Malta +356"
    }, {
      "phone": "+692",
      "code": "mh",
      "name": "Marshall Islands +692"
    }, {
      "phone": "+596",
      "code": "mq",
      "name": "Martinique +596"
    }, {
      "phone": "+222",
      "code": "mr",
      "name": "Mauritania (‫موريتانيا‬‎) +222"
    }, {
      "phone": "+230",
      "code": "mu",
      "name": "Mauritius (Moris) +230"
    }, {
      "phone": "+52",
      "code": "mx",
      "name": "Mexico (México) +52"
    }, {
      "phone": "+691",
      "code": "fm",
      "name": "Micronesia +691"
    }, {
      "phone": "+373",
      "code": "md",
      "name": "Moldova (Republica Moldova) +373"
    }, {
      "phone": "+377",
      "code": "mc",
      "name": "Monaco +377"
    }, {
      "phone": "+976",
      "code": "mn",
      "name": "Mongolia (Монгол) +976"
    }, {
      "phone": "+382",
      "code": "me",
      "name": "Montenegro (Crna Gora) +382"
    }, {
      "phone": "+1664",
      "code": "ms",
      "name": "Montserrat +1664"
    }, {
      "phone": "+212",
      "code": "ma",
      "name": "Morocco +212"
    }, {
      "phone": "+258",
      "code": "mz",
      "name": "Mozambique (Moçambique) +258"
    }, {
      "phone": "+95",
      "code": "mm",
      "name": "Myanmar (Burma) (မြန်မာ) +95"
    }, {
      "phone": "+264",
      "code": "na",
      "name": "Namibia (Namibië) +264"
    }, {
      "phone": "+674",
      "code": "nr",
      "name": "Nauru +674"
    }, {
      "phone": "+977",
      "code": "np",
      "name": "Nepal (नेपाल) +977"
    }, {
      "phone": "+31",
      "code": "nl",
      "name": "Netherlands (Nederland) +31"
    }, {
      "phone": "+687",
      "code": "nc",
      "name": "New Caledonia (Nouvelle-Calédonie) +687"
    }, {
      "phone": "+64",
      "code": "nz",
      "name": "New Zealand +64"
    }, {
      "phone": "+505",
      "code": "ni",
      "name": "Nicaragua +505"
    }, {
      "phone": "+227",
      "code": "ng",
      "name": "Niger (Nijar) +227"
    }, {
      "phone": "+234",
      "code": "ng",
      "name": "Nigeria +234"
    }, {
      "phone": "+683",
      "code": "nu",
      "name": "Niue +683"
    }, {
      "phone": "+6723",
      "code": "nf",
      "name": "Norfolk Island +6723"
    }, {
      "phone": "+1",
      "code": "mp",
      "name": "Northern Mariana Islands +1"
    }, {
      "phone": "+850",
      "code": "kp",
      "name": "North Korea (조선민주주의인민공화국) +850"
    }, {
      "phone": "+47",
      "code": "no",
      "name": "Norway (Norge) +47"
    }, {
      "phone": "+968",
      "code": "ro",
      "name": "Oman (‫عُمان‬‎) +968"
    }, {
      "phone": "+92",
      "code": "pk",
      "name": "Pakistan (‫پاکستان‬‎) +92"
    }, {
      "phone": "+680",
      "code": "pw",
      "name": "Palau +680"
    }, {
      "phone": "+970",
      "code": "ps",
      "name": "Palestine (‫فلسطين‬‎) +970"
    }, {
      "phone": "+507",
      "code": "pa",
      "name": "Panama (Panamá) +507"
    }, {
      "phone": "+675",
      "code": "pg",
      "name": "Papua New Guinea +675"
    }, {
      "phone": "+595",
      "code": "py",
      "name": "Paraguay +595"
    }, {
      "phone": "+51",
      "code": "pe",
      "name": "Peru (Perú) +51"
    }, {
      "phone": "+63",
      "code": "ph",
      "name": "Philippines +63"
    }, {
      "phone": "+48",
      "code": "pl",
      "name": "Poland (Polska) +48"
    }, {
      "phone": "+351",
      "code": "pt",
      "name": "Portugal +351"
    }, {
      "phone": "+1787",
      "code": "pr",
      "name": "Puerto Rico +1787"
    }, {
      "phone": "+974",
      "code": "qa",
      "name": "Qatar (‫قطر‬‎) +974"
    }, {
      "phone": "+262",
      "code": "re",
      "name": "Réunion (La Réunion) +262"
    }, {
      "phone": "+40",
      "code": "ro",
      "name": "Romania (România) +40"
    }, {
      "phone": "+7",
      "code": "ru",
      "name": "Russia (Россия) +7"
    }, {
      "phone": "+250",
      "code": "rw",
      "name": "Rwanda +250"
    }, {
      "phone": "+685",
      "code": "ws",
      "name": "Samoa +685"
    }, {
      "phone": "+378",
      "code": "sm",
      "name": "San Marino +378"
    }, {
      "phone": "+239",
      "code": "st",
      "name": "São Tomé & Príncipe (São Tomé e Príncipe) +239"
    }, {
      "phone": "+966",
      "code": "sa",
      "name": "Saudi Arabia (‫المملكة العربية السعودية‬‎) +966"
    }, {
      "phone": "+221",
      "code": "sn",
      "name": "Senegal +221"
    }, {
      "phone": "+381",
      "code": "rs",
      "name": "Serbia (Србија) +381"
    }, {
      "phone": "+248",
      "code": "sc",
      "name": "Seychelles +248"
    }, {
      "phone": "+232",
      "code": "sl",
      "name": "Sierra Leone +232"
    }, {
      "phone": "+65",
      "code": "sg",
      "name": "Singapore +65"
    }, {
      "phone": "+1721",
      "code": "sx",
      "name": "Sint Maarten +1721"
    }, {
      "phone": "+421",
      "code": "sk",
      "name": "Slovakia (Slovensko) +421"
    }, {
      "phone": "+386",
      "code": "si",
      "name": "Slovenia (Slovenija) +386"
    }, {
      "phone": "+677",
      "code": "sb",
      "name": "Solomon Islands +677"
    }, {
      "phone": "+252",
      "code": "so",
      "name": "Somalia (Soomaaliya) +252"
    }, {
      "phone": "+27",
      "code": "za",
      "name": "South Africa +27"
    }, {
      "phone": "+82",
      "code": "kr",
      "name": "South Korea (대한민국) +82"
    }, {
      "phone": "+211",
      "code": "ss",
      "name": "South Sudan (‫جنوب السودان‬‎) +211"
    }, {
      "phone": "+34",
      "code": "es",
      "name": "Spain (España) +34"
    }, {
      "phone": "+94",
      "code": "lk",
      "name": "Sri Lanka (ශ්‍රී ලංකාව) +94"
    }, {
      "phone": "+590",
      "code": "bl",
      "name": "Saint Barthélemy (Saint-Barthélemy) +590"
    }, {
      "phone": "+290",
      "code": "sh",
      "name": "Saint Helena, Ascension & Tristan da Cunha +290"
    }, {
      "phone": "+1869",
      "code": "kn",
      "name": "Saint Kitts & Nevis +1869"
    }, {
      "phone": "+1758",
      "code": "lc",
      "name": "Saint Lucia +1758"
    }, {
      "phone": "+590",
      "code": "mf",
      "name": "Saint Martin (Saint-Martin) +590"
    }, {
      "phone": "+508",
      "code": "pm",
      "name": "Saint Pierre & Miquelon (Saint-Pierre-et-Miquelon) +508"
    }, {
      "phone": "+1784",
      "code": "vc",
      "name": "Saint Vincent & Grenadines +1784"
    }, {
      "phone": "+249",
      "code": "sd",
      "name": "Sudan (‫السودان‬‎) +249"
    }, {
      "phone": "+597",
      "code": "sr",
      "name": "Suriname +597"
    }, {
      "phone": "+268",
      "code": "sz",
      "name": "Swaziland +268"
    }, {
      "phone": "+46",
      "code": "se",
      "name": "Sweden (Sverige) +46"
    }, {
      "phone": "+41",
      "code": "ch",
      "name": "Switzerland (Schweiz) +41"
    }, {
      "phone": "+963",
      "code": "sy",
      "name": "Syria (‫سوريا‬‎) +963"
    }, {
      "phone": "+886",
      "code": "tw",
      "name": "Taiwan (台灣) +886"
    }, {
      "phone": "+992",
      "code": "tj",
      "name": "Tajikistan +992"
    }, {
      "phone": "+255",
      "code": "tz",
      "name": "Tanzania +255"
    }, {
      "phone": "+66",
      "code": "th",
      "name": "Thailand (ไทย) +66"
    }, {
      "phone": "+670",
      "code": "tl",
      "name": "Timor-Leste +670"
    }, {
      "phone": "+228",
      "code": "tg",
      "name": "Togo +228"
    }, {
      "phone": "+690",
      "code": "tk",
      "name": "Tokelau +690"
    }, {
      "phone": "+676",
      "code": "to",
      "name": "Tonga +676"
    }, {
      "phone": "+1868",
      "code": "tt",
      "name": "Trinidad & Tobago +1868"
    }, {
      "phone": "+216",
      "code": "tn",
      "name": "Tunisia +216"
    }, {
      "phone": "+90",
      "code": "tr",
      "name": "Turkey (Türkiye) +90"
    }, {
      "phone": "+993",
      "code": "tm",
      "name": "Turkmenistan +993"
    }, {
      "phone": "+1649",
      "code": "tc",
      "name": "Turks & Caicos Islands +1649"
    }, {
      "phone": "+688",
      "code": "tv",
      "name": "Tuvalu +688"
    }, {
      "phone": "+1340",
      "code": "vi",
      "name": "U.S. Virgin Islands +1340"
    }, {
      "phone": "+256",
      "code": "ug",
      "name": "Uganda +256"
    }, {
      "phone": "+380",
      "code": "ua",
      "name": "Ukraine (Україна) +380"
    }, {
      "phone": "+971",
      "code": "ae",
      "name": "United Arab Emirates (‫الإمارات العربية المتحدة‬‎) +971"
    }, {
      "phone": "+44",
      "code": "gb",
      "name": "United Kingdom +44"
    }, {
      "phone": "+1",
      "code": "us",
      "name": "United States +1"
    }, {
      "phone": "+598",
      "code": "uy",
      "name": "Uruguay +598"
    }, {
      "phone": "+998",
      "code": "uz",
      " ": "Uzbekistan (Oʻzbekiston) +998"
    }, {
      "phone": "+678",
      "code": "vu",
      "name": "Vanuatu +678"
    }, {
      "phone": "+379",
      "code": "va",
      "name": "Vatican City (Città del Vaticano) +379"
    }, {
      "phone": "+58",
      "code": "ve",
      "name": "Venezuela +58"
    }, {
      "phone": "+84",
      "code": "vn",
      "name": "Vietnam (Việt Nam) +84"
    }, {
      "phone": "+681",
      "code": "wf",
      "name": "Wallis & Futuna +681"
    }, {
      "phone": "+967",
      "code": "ye",
      "name": "Yemen (‫اليمن‬‎) +967"
    }, {
      "phone": "+260",
      "code": "zm",
      "name": "Zambia +260"
    }, {
      "phone": "+263",
      "code": "zw",
      "name": "Zimbabwe +263"
    }];

    $scope.currentCountry = {};
    $scope.currentCountry.selected = $scope.countries[0];
    $scope.currentCountry.phone = $scope.countries[0].phone;

    $scope.updateCurrentCountryPhone = function($item, $model) {
      $scope.currentCountry.phone = $model.phone;
    };
  })

  // Modals Controller
  .controller("ModalsCtrl", function($uibModal, $log) {
    var mo = this;
    mo.animationsEnabled = true;

    mo.open = function(size, parentSelector) {
      var modalInstance = $uibModal.open({
        animation: mo.animationsEnabled,
        ariaLabelledBy: "modal-title",
        ariaDescribedBy: "modal-body",
        templateUrl: "myModalContent.html",
        controller: "ModalInstanceCtrl",
        controllerAs: "mo",
        size: size
      });

      modalInstance.result.then(function(selectedItem) {
        mo.selected = selectedItem;
      }, function() {
        $log.info("Modal dismissed at: " + new Date());
      });
    };

    mo.openMultipleModals = function() {
      $uibModal.open({
        animation: mo.animationsEnabled,
        ariaLabelledBy: "modal-title-bottom",
        ariaDescribedBy: "modal-body-bottom",
        templateUrl: "stackedModal.html",
        size: "sm",
        controller: function($scope) {
          $scope.name = "bottom";
        }
      });

      $uibModal.open({
        animation: mo.animationsEnabled,
        ariaLabelledBy: "modal-title-top",
        ariaDescribedBy: "modal-body-top",
        templateUrl: "stackedModal.html",
        size: "sm",
        controller: function($scope) {
          $scope.name = "top";
        }
      });
    };

    mo.toggleAnimation = function() {
      mo.animationsEnabled = !mo.animationsEnabled;
    };
  }).controller("ModalInstanceCtrl", function($uibModalInstance) {
    var mo = this;

    mo.ok = function() {
      $uibModalInstance.close();
    };

    mo.cancel = function() {
      $uibModalInstance.dismiss("cancel");
    };
  })

  // Progress Bars Controller
  .controller("ProgressBarsCtrl", function($scope) {
    $scope.max = 100;

    $scope.random = function() {
      var value = Math.floor(Math.random() * 100 + 1);
      var type;

      if (value < 25) {
        type = "success";
      } else if (value < 50) {
        type = "info";
      } else if (value < 75) {
        type = "warning";
      } else {
        type = "danger";
      }

      $scope.showWarning = type === "danger" || type === "warning";

      $scope.dynamic = value;
      $scope.type = type;
    };

    $scope.random();

    $scope.randomStacked = function() {
      $scope.stacked = [];
      var types = ["success", "info", "warning", "danger"];

      for (var i = 0, n = Math.floor(Math.random() * 4 + 1); i < n; i++) {
        var index = Math.floor(Math.random() * 4);
        $scope.stacked.push({
          value: Math.floor(Math.random() * 30 + 1),
          type: types[index]
        });
      }
    };

    $scope.randomStacked();
  })

  // Toastrs Controller
  .controller("ToastrsCtrl", function($scope, toast) {
    $scope.title = "AngularJS Toaster";
    $scope.message = "Non-blocking notification javascript library.";

    $scope.options = {
      showCloseButton: false,
      type: "success"
    };

    $scope.showToast = function() {
      toast.pop({
        title: $scope.title,
        body: $scope.message,
        type: $scope.options.type,
        showCloseButton: $scope.options.showCloseButton,
      });
    };

    $scope.clearToasts = function() {
      toast.clear();
    };
  })

  // Cropper Controller
  .controller("CropperCtrl", function($scope, $timeout) {
    $scope.cropper = {};
    $scope.cropperProxy = "cropper";

    $scope.options = {
      aspectRatio: 16 / 9,
      crop: function(evt) {
        // Output the result data for cropping image.
        console.log(evt.x, evt.y, evt.width, evt.height);
      }
    };

    $scope.showEvent = "show";

    function showCropper() {
      $scope.$broadcast($scope.showEvent);
    }

    $timeout(showCropper);
  })

  // Form Validation Controller
  .controller("FormValidationCtrl", function($scope) {
    $scope.formValidation = function() {
      if ($scope.form_validation.$valid) {
        // Submit as normal
      } else {
        $scope.form_validation.submitted = true;
      }
    }
  })

  // Input Mask Controller
  .controller("InputMaskCtrl", function($scope) {
    $(":input").inputmask();
  })


  // Pickers Controller
  .controller("PickersCtrl", function($scope) {
    $scope.datepickers = [{
      format: "dd-MMMM-yyyy",
    }, {
      format: "yyyy/MM/dd",
    }, {
      format: "dd.MM.yyyy",
    }, {
      format: "shortDate",
    }];

    // Default Datepicker Options
    $scope.datepickers.forEach(function(obj) {
      obj.date = new Date();
      obj.opened = false;
      obj.options = {
        showWeeks: false
      };
    });

    // Open Datepicker
    $scope.open = function(datepicker) {
      datepicker.opened = true;
    };

    // Default Timepicker
    $scope.timepicker = new Date();
    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.clear = function() {
      $scope.timepicker = null;
      $scope.datepickers.forEach(function(datepicker) {
        datepicker.date = null;
      });
    };

    $scope.tomorrow = function() {
      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      $scope.timepicker = new Date(tomorrow);
      $scope.datepickers.forEach(function(datepicker) {
        datepicker.date = new Date(tomorrow);
      });
    };
  })

  // Select2 Controller
  .controller("Select2Ctrl", function($scope) {
    $scope.currentTimezone = {};
    $scope.timezones = [
      "Africa/Abidjan",
      "Africa/Accra",
      "Africa/Addis_Ababa",
      "Africa/Algiers",
      "Africa/Asmara",
      "Africa/Bamako",
      "Africa/Bangui",
      "Africa/Banjul",
      "Africa/Bissau",
      "Africa/Blantyre",
      "Africa/Brazzaville",
      "Africa/Bujumbura",
      "Africa/Cairo",
      "Africa/Casablanca",
      "Africa/Ceuta",
      "Africa/Conakry",
      "Africa/Dakar",
      "Africa/Dar_es_Salaam",
      "Africa/Djibouti",
      "Africa/Douala",
      "Africa/El_Aaiun",
      "Africa/Freetown",
      "Africa/Gaborone",
      "Africa/Harare",
      "Africa/Johannesburg",
      "Africa/Juba",
      "Africa/Kampala",
      "Africa/Khartoum",
      "Africa/Kigali",
      "Africa/Kinshasa",
      "Africa/Lagos",
      "Africa/Libreville",
      "Africa/Lome",
      "Africa/Luanda",
      "Africa/Lubumbashi",
      "Africa/Lusaka",
      "Africa/Malabo",
      "Africa/Maputo",
      "Africa/Maseru",
      "Africa/Mbabane",
      "Africa/Mogadishu",
      "Africa/Monrovia",
      "Africa/Nairobi",
      "Africa/Ndjamena",
      "Africa/Niamey",
      "Africa/Nouakchott",
      "Africa/Ouagadougou",
      "Africa/Porto-Novo",
      "Africa/Sao_Tome",
      "Africa/Tripoli",
      "Africa/Tunis",
      "Africa/Windhoek",
      "America/Adak",
      "America/Anchorage",
      "America/Anguilla",
      "America/Antigua",
      "America/Araguaina",
      "America/Argentina/Buenos_Aires",
      "America/Argentina/Catamarca",
      "America/Argentina/Cordoba",
      "America/Argentina/Jujuy",
      "America/Argentina/La_Rioja",
      "America/Argentina/Mendoza",
      "America/Argentina/Rio_Gallegos",
      "America/Argentina/Salta",
      "America/Argentina/San_Juan",
      "America/Argentina/San_Luis",
      "America/Argentina/Tucuman",
      "America/Argentina/Ushuaia",
      "America/Aruba",
      "America/Asuncion",
      "America/Atikokan",
      "America/Bahia",
      "America/Bahia_Banderas",
      "America/Barbados",
      "America/Belem",
      "America/Belize",
      "America/Blanc-Sablon",
      "America/Boa_Vista",
      "America/Bogota",
      "America/Boise",
      "America/Cambridge_Bay",
      "America/Campo_Grande",
      "America/Cancun",
      "America/Caracas",
      "America/Cayenne",
      "America/Cayman",
      "America/Chicago",
      "America/Chihuahua",
      "America/Costa_Rica",
      "America/Creston",
      "America/Cuiaba",
      "America/Curacao",
      "America/Danmarkshavn",
      "America/Dawson",
      "America/Dawson_Creek",
      "America/Denver",
      "America/Detroit",
      "America/Dominica",
      "America/Edmonton",
      "America/Eirunepe",
      "America/El_Salvador",
      "America/Fortaleza",
      "America/Glace_Bay",
      "America/Godthab",
      "America/Goose_Bay",
      "America/Grand_Turk",
      "America/Grenada",
      "America/Guadeloupe",
      "America/Guatemala",
      "America/Guayaquil",
      "America/Guyana",
      "America/Halifax",
      "America/Havana",
      "America/Hermosillo",
      "America/Indiana/Indianapolis",
      "America/Indiana/Knox",
      "America/Indiana/Marengo",
      "America/Indiana/Petersburg",
      "America/Indiana/Tell_City",
      "America/Indiana/Vevay",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Inuvik",
      "America/Iqaluit",
      "America/Jamaica",
      "America/Juneau",
      "America/Kentucky/Louisville",
      "America/Kentucky/Monticello",
      "America/Kralendijk",
      "America/La_Paz",
      "America/Lima",
      "America/Los_Angeles",
      "America/Lower_Princes",
      "America/Maceio",
      "America/Managua",
      "America/Manaus",
      "America/Marigot",
      "America/Martinique",
      "America/Matamoros",
      "America/Mazatlan",
      "America/Menominee",
      "America/Merida",
      "America/Metlakatla",
      "America/Mexico_City",
      "America/Miquelon",
      "America/Moncton",
      "America/Monterrey",
      "America/Montevideo",
      "America/Montserrat",
      "America/Nassau",
      "America/New_York",
      "America/Nipigon",
      "America/Nome",
      "America/Noronha",
      "America/North_Dakota/Beulah",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
      "America/Ojinaga",
      "America/Panama",
      "America/Pangnirtung",
      "America/Paramaribo",
      "America/Phoenix",
      "America/Port_of_Spain",
      "America/Port-au-Prince",
      "America/Porto_Velho",
      "America/Puerto_Rico",
      "America/Rainy_River",
      "America/Rankin_Inlet",
      "America/Recife",
      "America/Regina",
      "America/Resolute",
      "America/Rio_Branco",
      "America/Santa_Isabel",
      "America/Santarem",
      "America/Santiago",
      "America/Santo_Domingo",
      "America/Sao_Paulo",
      "America/Scoresbysund",
      "America/Sitka",
      "America/St_Barthelemy",
      "America/St_Johns",
      "America/St_Kitts",
      "America/St_Lucia",
      "America/St_Thomas",
      "America/St_Vincent",
      "America/Swift_Current",
      "America/Tegucigalpa",
      "America/Thule",
      "America/Thunder_Bay",
      "America/Tijuana",
      "America/Toronto",
      "America/Tortola",
      "America/Vancouver",
      "America/Whitehorse",
      "America/Winnipeg",
      "America/Yakutat",
      "America/Yellowknife",
      "Antarctica/Casey",
      "Antarctica/Davis",
      "Antarctica/DumontDUrville",
      "Antarctica/Macquarie",
      "Antarctica/Mawson",
      "Antarctica/McMurdo",
      "Antarctica/Palmer",
      "Antarctica/Rothera",
      "Antarctica/Syowa",
      "Antarctica/Troll",
      "Antarctica/Vostok",
      "Arctic/Longyearbyen",
      "Asia/Aden",
      "Asia/Almaty",
      "Asia/Amman",
      "Asia/Anadyr",
      "Asia/Aqtau",
      "Asia/Aqtobe",
      "Asia/Ashgabat",
      "Asia/Baghdad",
      "Asia/Bahrain",
      "Asia/Baku",
      "Asia/Bangkok",
      "Asia/Beirut",
      "Asia/Bishkek",
      "Asia/Brunei",
      "Asia/Choibalsan",
      "Asia/Chongqing",
      "Asia/Colombo",
      "Asia/Damascus",
      "Asia/Dhaka",
      "Asia/Dili",
      "Asia/Dubai",
      "Asia/Dushanbe",
      "Asia/Gaza",
      "Asia/Harbin",
      "Asia/Hebron",
      "Asia/Ho_Chi_Minh",
      "Asia/Hong_Kong",
      "Asia/Hovd",
      "Asia/Irkutsk",
      "Asia/Jakarta",
      "Asia/Jayapura",
      "Asia/Jerusalem",
      "Asia/Kabul",
      "Asia/Kamchatka",
      "Asia/Karachi",
      "Asia/Kashgar",
      "Asia/Kathmandu",
      "Asia/Khandyga",
      "Asia/Kolkata",
      "Asia/Krasnoyarsk",
      "Asia/Kuala_Lumpur",
      "Asia/Kuching",
      "Asia/Kuwait",
      "Asia/Macau",
      "Asia/Magadan",
      "Asia/Makassar",
      "Asia/Manila",
      "Asia/Muscat",
      "Asia/Nicosia",
      "Asia/Novokuznetsk",
      "Asia/Novosibirsk",
      "Asia/Omsk",
      "Asia/Oral",
      "Asia/Phnom_Penh",
      "Asia/Pontianak",
      "Asia/Pyongyang",
      "Asia/Qatar",
      "Asia/Qyzylorda",
      "Asia/Rangoon",
      "Asia/Riyadh",
      "Asia/Sakhalin",
      "Asia/Samarkand",
      "Asia/Seoul",
      "Asia/Shanghai",
      "Asia/Singapore",
      "Asia/Taipei",
      "Asia/Tashkent",
      "Asia/Tbilisi",
      "Asia/Tehran",
      "Asia/Thimphu",
      "Asia/Tokyo",
      "Asia/Ulaanbaatar",
      "Asia/Urumqi",
      "Asia/Ust-Nera",
      "Asia/Vientiane",
      "Asia/Vladivostok",
      "Asia/Yakutsk",
      "Asia/Yekaterinburg",
      "Asia/Yerevan",
      "Atlantic/Azores",
      "Atlantic/Bermuda",
      "Atlantic/Canary",
      "Atlantic/Cape_Verde",
      "Atlantic/Faroe",
      "Atlantic/Madeira",
      "Atlantic/Reykjavik",
      "Atlantic/South_Georgia",
      "Atlantic/St_Helena",
      "Atlantic/Stanley",
      "Australia/Adelaide",
      "Australia/Brisbane",
      "Australia/Broken_Hill",
      "Australia/Currie",
      "Australia/Darwin",
      "Australia/Eucla",
      "Australia/Hobart",
      "Australia/Lindeman",
      "Australia/Lord_Howe",
      "Australia/Melbourne",
      "Australia/Perth",
      "Australia/Sydney",
      "Europe/Amsterdam",
      "Europe/Andorra",
      "Europe/Athens",
      "Europe/Belgrade",
      "Europe/Berlin",
      "Europe/Bratislava",
      "Europe/Brussels",
      "Europe/Bucharest",
      "Europe/Budapest",
      "Europe/Busingen",
      "Europe/Chisinau",
      "Europe/Copenhagen",
      "Europe/Dublin",
      "Europe/Gibraltar",
      "Europe/Guernsey",
      "Europe/Helsinki",
      "Europe/Isle_of_Man",
      "Europe/Istanbul",
      "Europe/Jersey",
      "Europe/Kaliningrad",
      "Europe/Kiev",
      "Europe/Lisbon",
      "Europe/Ljubljana",
      "Europe/London",
      "Europe/Luxembourg",
      "Europe/Madrid",
      "Europe/Malta",
      "Europe/Mariehamn",
      "Europe/Minsk",
      "Europe/Monaco",
      "Europe/Moscow",
      "Europe/Oslo",
      "Europe/Paris",
      "Europe/Podgorica",
      "Europe/Prague",
      "Europe/Riga",
      "Europe/Rome",
      "Europe/Samara",
      "Europe/San_Marino",
      "Europe/Sarajevo",
      "Europe/Simferopol",
      "Europe/Skopje",
      "Europe/Sofia",
      "Europe/Stockholm",
      "Europe/Tallinn",
      "Europe/Tirane",
      "Europe/Uzhgorod",
      "Europe/Vaduz",
      "Europe/Vatican",
      "Europe/Vienna",
      "Europe/Vilnius",
      "Europe/Volgograd",
      "Europe/Warsaw",
      "Europe/Zagreb",
      "Europe/Zaporozhye",
      "Europe/Zurich",
      "Indian/Antananarivo",
      "Indian/Chagos",
      "Indian/Christmas",
      "Indian/Cocos",
      "Indian/Comoro",
      "Indian/Kerguelen",
      "Indian/Mahe",
      "Indian/Maldives",
      "Indian/Mauritius",
      "Indian/Mayotte",
      "Indian/Reunion",
      "Pacific/Apia",
      "Pacific/Auckland",
      "Pacific/Chatham",
      "Pacific/Chuuk",
      "Pacific/Easter",
      "Pacific/Efate",
      "Pacific/Enderbury",
      "Pacific/Fakaofo",
      "Pacific/Fiji",
      "Pacific/Funafuti",
      "Pacific/Galapagos",
      "Pacific/Gambier",
      "Pacific/Guadalcanal",
      "Pacific/Guam",
      "Pacific/Honolulu",
      "Pacific/Johnston",
      "Pacific/Kiritimati",
      "Pacific/Kosrae",
      "Pacific/Kwajalein",
      "Pacific/Majuro",
      "Pacific/Marquesas",
      "Pacific/Midway",
      "Pacific/Nauru",
      "Pacific/Niue",
      "Pacific/Norfolk",
      "Pacific/Noumea",
      "Pacific/Pago_Pago",
      "Pacific/Palau",
      "Pacific/Pitcairn",
      "Pacific/Pohnpei",
      "Pacific/Port_Moresby",
      "Pacific/Rarotonga",
      "Pacific/Saipan",
      "Pacific/Tahiti",
      "Pacific/Tarawa",
      "Pacific/Tongatapu",
      "Pacific/Wake",
      "Pacific/Wallis",
      "UTC"
    ];

    $scope.currentRoles = ["Administrator", "Shop Manager"];
    $scope.roles = [
      "Administrator",
      "Author",
      "Contributor",
      "Customer",
      "Shop Manager",
      "Subscriber"
    ];

    $scope.currentLanguages = ["Python"];
    $scope.languages = [
      "ActionScript",
      "C",
      "C#",
      "C++",
      "Clojure",
      "CoffeeScript",
      "CSS",
      "Go",
      "Haskell",
      "HTML",
      "Java",
      "JavaScript",
      "Lua",
      "Matlab",
      "Objective-C",
      "Perl",
      "PHP",
      "Python",
      "R",
      "Ruby",
      "Scala",
      "Shell",
      "Swift",
      "TeX",
      "VimL"
    ];


    $scope.countries = [{
      "phone": "+1",
      "code": "us",
      "name": "United States +1"
    }, {
      "phone": "+93",
      "code": "af",
      "name": "Afghanistan (‫افغانستان‬‎) +93"
    }, {
      "phone": "+355",
      "code": "al",
      "name": "Albania (Shqipëri) +355"
    }, {
      "phone": "+213",
      "code": "dz",
      "name": "Algeria +213"
    }, {
      "phone": "+1684",
      "code": "as",
      "name": "American Samoa +1684"
    }, {
      "phone": "+376",
      "code": "ad",
      "name": "Andorra +376"
    }, {
      "phone": "+244",
      "code": "ao",
      "name": "Angola +244"
    }, {
      "phone": "+1264",
      "code": "ai",
      "name": "Anguilla +1264"
    }, {
      "phone": "+1268",
      "code": "ag",
      "name": "Antigua & Barbuda +1268"
    }, {
      "phone": "+54",
      "code": "ar",
      "name": "Argentina +54"
    }, {
      "phone": "+374",
      "code": "am",
      "name": "Armenia (Հայաստան) +374"
    }, {
      "phone": "+297",
      "code": "aw",
      "name": "Aruba +297"
    }, {
      "phone": "+61",
      "code": "au",
      "name": "Australia +61"
    }, {
      "phone": "+43",
      "code": "at",
      "name": "Austria (Österreich) +43"
    }, {
      "phone": "+994",
      "code": "az",
      "name": "Azerbaijan (Azərbaycan) +994"
    }, {
      "phone": "+1242",
      "code": "bs",
      "name": "Bahamas +1242"
    }, {
      "phone": "+973",
      "code": "bh",
      "name": "Bahrain (‫البحرين‬‎) +973"
    }, {
      "phone": "+880",
      "code": "bd",
      "name": "Bangladesh (বাংলাদেশ) +880"
    }, {
      "phone": "+1246",
      "code": "bb",
      "name": "Barbados +1246"
    }, {
      "phone": "+375",
      "code": "by",
      "name": "Belarus (Беларусь) +375"
    }, {
      "phone": "+32",
      "code": "be",
      "name": "Belgium +32"
    }, {
      "phone": "+501",
      "code": "bz",
      "name": "Belize +501"
    }, {
      "phone": "+229",
      "code": "bj",
      "name": "Benin (Bénin) +229"
    }, {
      "phone": "+1441",
      "code": "bm",
      "name": "Bermuda +1441"
    }, {
      "phone": "+975",
      "code": "bt",
      "name": "Bhutan (འབྲུག) +975"
    }, {
      "phone": "+591",
      "code": "bo",
      "name": "Bolivia +591"
    }, {
      "phone": "+387",
      "code": "ba",
      "name": "Bosnia & Herzegovina (Босна и Херцеговина) +387"
    }, {
      "phone": "+267",
      "code": "bw",
      "name": "Botswana +267"
    }, {
      "phone": "+55",
      "code": "br",
      "name": "Brazil (Brasil) +55"
    }, {
      "phone": "+246",
      "code": "io",
      "name": "British Indian Ocean Territory +246"
    }, {
      "phone": "+1284",
      "code": "vg",
      "name": "British Virgin Islands +1284"
    }, {
      "phone": "+673",
      "code": "bn",
      "name": "Brunei +673"
    }, {
      "phone": "+359",
      "code": "bg",
      "name": "Bulgaria (България) +359"
    }, {
      "phone": "+226",
      "code": "bf",
      "name": "Burkina Faso +226"
    }, {
      "phone": "+257",
      "code": "bi",
      "name": "Burundi (Uburundi) +257"
    }, {
      "phone": "+855",
      "code": "kh",
      "name": "Cambodia (កម្ពុជា) +855"
    }, {
      "phone": "+237",
      "code": "cm",
      "name": "Cameroon (Cameroun) +237"
    }, {
      "phone": "+1",
      "code": "ca",
      "name": "Canada +1"
    }, {
      "phone": "+238",
      "code": "cv",
      "name": "Cabo Verde (Kabu Verdi) +238"
    }, {
      "phone": "+236",
      "code": "cf",
      "name": "Central African Republic (République centrafricaine) +236"
    }, {
      "phone": "+235",
      "code": "td",
      "name": "Chad (Tchad) +235"
    }, {
      "phone": "+56",
      "code": "cl",
      "name": "Chile +56"
    }, {
      "phone": "+86",
      "code": "cn",
      "name": "China (中国) +86"
    }, {
      "phone": "+57",
      "code": "co",
      "name": "Colombia +57"
    }, {
      "phone": "+269",
      "code": "km",
      "name": "Comoros (‫جزر القمر‬‎) +269"
    }, {
      "phone": "+243",
      "code": "cg",
      "name": "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo) +243"
    }, {
      "phone": "+242",
      "code": "cg",
      "name": "Congo (Republic) (Congo-Brazzaville) +242"
    }, {
      "phone": "+682",
      "code": "ck",
      "name": "Cook Islands +682"
    }, {
      "phone": "+506",
      "code": "cr",
      "name": "Costa Rica +506"
    }, {
      "phone": "+225",
      "code": "ci",
      "name": "Côte d'Ivoire +225"
    }, {
      "phone": "+385",
      "code": "hr",
      "name": "Croatia (Hrvatska) +385"
    }, {
      "phone": "+53",
      "code": "cu",
      "name": "Cuba +53"
    }, {
      "phone": "+599",
      "code": "cw",
      "name": "Curaçao +599"
    }, {
      "phone": "+357",
      "code": "cy",
      "name": "Cyprus (Κύπρος) +357"
    }, {
      "phone": "+420",
      "code": "cz",
      "name": "Czech Republic (Česká republika) +420"
    }, {
      "phone": "+45",
      "code": "dk",
      "name": "Denmark (Danmark) +45"
    }, {
      "phone": "+253",
      "code": "dj",
      "name": "Djibouti +253"
    }, {
      "phone": "+1767",
      "code": "do",
      "name": "Dominica +1767"
    }, {
      "phone": "+1809",
      "code": "do",
      "name": "Dominican Republic (República Dominicana) +1809"
    }, {
      "phone": "+593",
      "code": "ec",
      "name": "Ecuador +593"
    }, {
      "phone": "+20",
      "code": "eg",
      "name": "Egypt (‫مصر‬‎) +20"
    }, {
      "phone": "+503",
      "code": "sv",
      "name": "El Salvador +503"
    }, {
      "phone": "+240",
      "code": "gq",
      "name": "Equatorial Guinea (Guinea Ecuatorial) +240"
    }, {
      "phone": "+291",
      "code": "er",
      "name": "Eritrea +291"
    }, {
      "phone": "+372",
      "code": "ee",
      "name": "Estonia (Eesti) +372"
    }, {
      "phone": "+251",
      "code": "et",
      "name": "Ethiopia +251"
    }, {
      "phone": "+500",
      "code": "fk",
      "name": "Falkland Islands (Islas Malvinas) +500"
    }, {
      "phone": "+298",
      "code": "fo",
      "name": "Faroe Islands (Føroyar) +298"
    }, {
      "phone": "+679",
      "code": "fj",
      "name": "Fiji +679"
    }, {
      "phone": "+358",
      "code": "fi",
      "name": "Finland (Suomi) +358"
    }, {
      "phone": "+33",
      "code": "fr",
      "name": "France +33"
    }, {
      "phone": "+594",
      "code": "gf",
      "name": "French Guiana (Guyane française) +594"
    }, {
      "phone": "+689",
      "code": "pf",
      "name": "French Polynesia (Polynésie française) +689"
    }, {
      "phone": "+241",
      "code": "ga",
      "name": "Gabon +241"
    }, {
      "phone": "+220",
      "code": "gm",
      "name": "Gambia +220"
    }, {
      "phone": "+995",
      "code": "gs",
      "name": "Georgia (საქართველო) +995"
    }, {
      "phone": "+49",
      "code": "de",
      "name": "Germany (Deutschland) +49"
    }, {
      "phone": "+233",
      "code": "gh",
      "name": "Ghana (Gaana) +233"
    }, {
      "phone": "+350",
      "code": "gi",
      "name": "Gibraltar +350"
    }, {
      "phone": "+30",
      "code": "gr",
      "name": "Greece (Ελλάδα) +30"
    }, {
      "phone": "+299",
      "code": "gl",
      "name": "Greenland (Kalaallit Nunaat) +299"
    }, {
      "phone": "+1473",
      "code": "gd",
      "name": "Grenada +1473"
    }, {
      "phone": "+590",
      "code": "gp",
      "name": "Guadeloupe +590"
    }, {
      "phone": "+1671",
      "code": "gu",
      "name": "Guam +1671"
    }, {
      "phone": "+502",
      "code": "gt",
      "name": "Guatemala +502"
    }, {
      "phone": "+224",
      "code": "pg",
      "name": "Guinea (Guinée) +224"
    }, {
      "phone": "+245",
      "code": "gw",
      "name": "Guinea-Bissau (Guiné-Bissau) +245"
    }, {
      "phone": "+592",
      "code": "gy",
      "name": "Guyana +592"
    }, {
      "phone": "+509",
      "code": "ht",
      "name": "Haiti +509"
    }, {
      "phone": "+504",
      "code": "hn",
      "name": "Honduras +504"
    }, {
      "phone": "+852",
      "code": "hk",
      "name": "Hong Kong (香港) +852"
    }, {
      "phone": "+36",
      "code": "hu",
      "name": "Hungary (Magyarország) +36"
    }, {
      "phone": "+354",
      "code": "is",
      "name": "Iceland (Ísland) +354"
    }, {
      "phone": "+91",
      "code": "in",
      "name": "India (भारत) +91"
    }, {
      "phone": "+62",
      "code": "id",
      "name": "Indonesia +62"
    }, {
      "phone": "+98",
      "code": "ir",
      "name": "Iran (‫ایران‬‎) +98"
    }, {
      "phone": "+964",
      "code": "iq",
      "name": "Iraq (‫العراق‬‎) +964"
    }, {
      "phone": "+353",
      "code": "ie",
      "name": "Ireland +353"
    }, {
      "phone": "+972",
      "code": "il",
      "name": "Israel (‫ישראל‬‎) +972"
    }, {
      "phone": "+39",
      "code": "it",
      "name": "Italy (Italia) +39"
    }, {
      "phone": "+1876",
      "code": "jm",
      "name": "Jamaica +1876"
    }, {
      "phone": "+81",
      "code": "jp",
      "name": "Japan (日本) +81"
    }, {
      "phone": "+962",
      "code": "jo",
      "name": "Jordan (‫الأردن‬‎) +962"
    }, {
      "phone": "+7",
      "code": "kz",
      "name": "Kazakhstan (Казахстан) +7"
    }, {
      "phone": "+254",
      "code": "ke",
      "name": "Kenya +254"
    }, {
      "phone": "+686",
      "code": "ki",
      "name": "Kiribati +686"
    }, {
      "phone": "+965",
      "code": "kw",
      "name": "Kuwait (‫الكويت‬‎) +965"
    }, {
      "phone": "+996",
      "code": "kg",
      "name": "Kyrgyzstan (Кыргызстан) +996"
    }, {
      "phone": "+856",
      "code": "la",
      "name": "Laos (ລາວ) +856"
    }, {
      "phone": "+371",
      "code": "lv",
      "name": "Latvia (Latvija) +371"
    }, {
      "phone": "+961",
      "code": "lb",
      "name": "Lebanon (‫لبنان‬‎) +961"
    }, {
      "phone": "+266",
      "code": "ls",
      "name": "Lesotho +266"
    }, {
      "phone": "+231",
      "code": "lr",
      "name": "Liberia +231"
    }, {
      "phone": "+218",
      "code": "ly",
      "name": "Libya (‫ليبيا‬‎) +218"
    }, {
      "phone": "+423",
      "code": "li",
      "name": "Liechtenstein +423"
    }, {
      "phone": "+370",
      "code": "lt",
      "name": "Lithuania (Lietuva) +370"
    }, {
      "phone": "+352",
      "code": "lu",
      "name": "Luxembourg +352"
    }, {
      "phone": "+853",
      "code": "mo",
      "name": "Macau (澳門) +853"
    }, {
      "phone": "+389",
      "code": "mk",
      "name": "Macedonia (FYROM) (Македонија) +389"
    }, {
      "phone": "+261",
      "code": "mg",
      "name": "Madagascar (Madagasikara) +261"
    }, {
      "phone": "+265",
      "code": "mw",
      "name": "Malawi +265"
    }, {
      "phone": "+60",
      "code": "my",
      "name": "Malaysia +60"
    }, {
      "phone": "+960",
      "code": "mv",
      "name": "Maldives +960"
    }, {
      "phone": "+223",
      "code": "so",
      "name": "Mali +223"
    }, {
      "phone": "+356",
      "code": "mt",
      "name": "Malta +356"
    }, {
      "phone": "+692",
      "code": "mh",
      "name": "Marshall Islands +692"
    }, {
      "phone": "+596",
      "code": "mq",
      "name": "Martinique +596"
    }, {
      "phone": "+222",
      "code": "mr",
      "name": "Mauritania (‫موريتانيا‬‎) +222"
    }, {
      "phone": "+230",
      "code": "mu",
      "name": "Mauritius (Moris) +230"
    }, {
      "phone": "+52",
      "code": "mx",
      "name": "Mexico (México) +52"
    }, {
      "phone": "+691",
      "code": "fm",
      "name": "Micronesia +691"
    }, {
      "phone": "+373",
      "code": "md",
      "name": "Moldova (Republica Moldova) +373"
    }, {
      "phone": "+377",
      "code": "mc",
      "name": "Monaco +377"
    }, {
      "phone": "+976",
      "code": "mn",
      "name": "Mongolia (Монгол) +976"
    }, {
      "phone": "+382",
      "code": "me",
      "name": "Montenegro (Crna Gora) +382"
    }, {
      "phone": "+1664",
      "code": "ms",
      "name": "Montserrat +1664"
    }, {
      "phone": "+212",
      "code": "ma",
      "name": "Morocco +212"
    }, {
      "phone": "+258",
      "code": "mz",
      "name": "Mozambique (Moçambique) +258"
    }, {
      "phone": "+95",
      "code": "mm",
      "name": "Myanmar (Burma) (မြန်မာ) +95"
    }, {
      "phone": "+264",
      "code": "na",
      "name": "Namibia (Namibië) +264"
    }, {
      "phone": "+674",
      "code": "nr",
      "name": "Nauru +674"
    }, {
      "phone": "+977",
      "code": "np",
      "name": "Nepal (नेपाल) +977"
    }, {
      "phone": "+31",
      "code": "nl",
      "name": "Netherlands (Nederland) +31"
    }, {
      "phone": "+687",
      "code": "nc",
      "name": "New Caledonia (Nouvelle-Calédonie) +687"
    }, {
      "phone": "+64",
      "code": "nz",
      "name": "New Zealand +64"
    }, {
      "phone": "+505",
      "code": "ni",
      "name": "Nicaragua +505"
    }, {
      "phone": "+227",
      "code": "ng",
      "name": "Niger (Nijar) +227"
    }, {
      "phone": "+234",
      "code": "ng",
      "name": "Nigeria +234"
    }, {
      "phone": "+683",
      "code": "nu",
      "name": "Niue +683"
    }, {
      "phone": "+6723",
      "code": "nf",
      "name": "Norfolk Island +6723"
    }, {
      "phone": "+1",
      "code": "mp",
      "name": "Northern Mariana Islands +1"
    }, {
      "phone": "+850",
      "code": "kp",
      "name": "North Korea (조선민주주의인민공화국) +850"
    }, {
      "phone": "+47",
      "code": "no",
      "name": "Norway (Norge) +47"
    }, {
      "phone": "+968",
      "code": "ro",
      "name": "Oman (‫عُمان‬‎) +968"
    }, {
      "phone": "+92",
      "code": "pk",
      "name": "Pakistan (‫پاکستان‬‎) +92"
    }, {
      "phone": "+680",
      "code": "pw",
      "name": "Palau +680"
    }, {
      "phone": "+970",
      "code": "ps",
      "name": "Palestine (‫فلسطين‬‎) +970"
    }, {
      "phone": "+507",
      "code": "pa",
      "name": "Panama (Panamá) +507"
    }, {
      "phone": "+675",
      "code": "pg",
      "name": "Papua New Guinea +675"
    }, {
      "phone": "+595",
      "code": "py",
      "name": "Paraguay +595"
    }, {
      "phone": "+51",
      "code": "pe",
      "name": "Peru (Perú) +51"
    }, {
      "phone": "+63",
      "code": "ph",
      "name": "Philippines +63"
    }, {
      "phone": "+48",
      "code": "pl",
      "name": "Poland (Polska) +48"
    }, {
      "phone": "+351",
      "code": "pt",
      "name": "Portugal +351"
    }, {
      "phone": "+1787",
      "code": "pr",
      "name": "Puerto Rico +1787"
    }, {
      "phone": "+974",
      "code": "qa",
      "name": "Qatar (‫قطر‬‎) +974"
    }, {
      "phone": "+262",
      "code": "re",
      "name": "Réunion (La Réunion) +262"
    }, {
      "phone": "+40",
      "code": "ro",
      "name": "Romania (România) +40"
    }, {
      "phone": "+7",
      "code": "ru",
      "name": "Russia (Россия) +7"
    }, {
      "phone": "+250",
      "code": "rw",
      "name": "Rwanda +250"
    }, {
      "phone": "+685",
      "code": "ws",
      "name": "Samoa +685"
    }, {
      "phone": "+378",
      "code": "sm",
      "name": "San Marino +378"
    }, {
      "phone": "+239",
      "code": "st",
      "name": "São Tomé & Príncipe (São Tomé e Príncipe) +239"
    }, {
      "phone": "+966",
      "code": "sa",
      "name": "Saudi Arabia (‫المملكة العربية السعودية‬‎) +966"
    }, {
      "phone": "+221",
      "code": "sn",
      "name": "Senegal +221"
    }, {
      "phone": "+381",
      "code": "rs",
      "name": "Serbia (Србија) +381"
    }, {
      "phone": "+248",
      "code": "sc",
      "name": "Seychelles +248"
    }, {
      "phone": "+232",
      "code": "sl",
      "name": "Sierra Leone +232"
    }, {
      "phone": "+65",
      "code": "sg",
      "name": "Singapore +65"
    }, {
      "phone": "+1721",
      "code": "sx",
      "name": "Sint Maarten +1721"
    }, {
      "phone": "+421",
      "code": "sk",
      "name": "Slovakia (Slovensko) +421"
    }, {
      "phone": "+386",
      "code": "si",
      "name": "Slovenia (Slovenija) +386"
    }, {
      "phone": "+677",
      "code": "sb",
      "name": "Solomon Islands +677"
    }, {
      "phone": "+252",
      "code": "so",
      "name": "Somalia (Soomaaliya) +252"
    }, {
      "phone": "+27",
      "code": "za",
      "name": "South Africa +27"
    }, {
      "phone": "+82",
      "code": "kr",
      "name": "South Korea (대한민국) +82"
    }, {
      "phone": "+211",
      "code": "ss",
      "name": "South Sudan (‫جنوب السودان‬‎) +211"
    }, {
      "phone": "+34",
      "code": "es",
      "name": "Spain (España) +34"
    }, {
      "phone": "+94",
      "code": "lk",
      "name": "Sri Lanka (ශ්‍රී ලංකාව) +94"
    }, {
      "phone": "+590",
      "code": "bl",
      "name": "Saint Barthélemy (Saint-Barthélemy) +590"
    }, {
      "phone": "+290",
      "code": "sh",
      "name": "Saint Helena, Ascension & Tristan da Cunha +290"
    }, {
      "phone": "+1869",
      "code": "kn",
      "name": "Saint Kitts & Nevis +1869"
    }, {
      "phone": "+1758",
      "code": "lc",
      "name": "Saint Lucia +1758"
    }, {
      "phone": "+590",
      "code": "mf",
      "name": "Saint Martin (Saint-Martin) +590"
    }, {
      "phone": "+508",
      "code": "pm",
      "name": "Saint Pierre & Miquelon (Saint-Pierre-et-Miquelon) +508"
    }, {
      "phone": "+1784",
      "code": "vc",
      "name": "Saint Vincent & Grenadines +1784"
    }, {
      "phone": "+249",
      "code": "sd",
      "name": "Sudan (‫السودان‬‎) +249"
    }, {
      "phone": "+597",
      "code": "sr",
      "name": "Suriname +597"
    }, {
      "phone": "+268",
      "code": "sz",
      "name": "Swaziland +268"
    }, {
      "phone": "+46",
      "code": "se",
      "name": "Sweden (Sverige) +46"
    }, {
      "phone": "+41",
      "code": "ch",
      "name": "Switzerland (Schweiz) +41"
    }, {
      "phone": "+963",
      "code": "sy",
      "name": "Syria (‫سوريا‬‎) +963"
    }, {
      "phone": "+886",
      "code": "tw",
      "name": "Taiwan (台灣) +886"
    }, {
      "phone": "+992",
      "code": "tj",
      "name": "Tajikistan +992"
    }, {
      "phone": "+255",
      "code": "tz",
      "name": "Tanzania +255"
    }, {
      "phone": "+66",
      "code": "th",
      "name": "Thailand (ไทย) +66"
    }, {
      "phone": "+670",
      "code": "tl",
      "name": "Timor-Leste +670"
    }, {
      "phone": "+228",
      "code": "tg",
      "name": "Togo +228"
    }, {
      "phone": "+690",
      "code": "tk",
      "name": "Tokelau +690"
    }, {
      "phone": "+676",
      "code": "to",
      "name": "Tonga +676"
    }, {
      "phone": "+1868",
      "code": "tt",
      "name": "Trinidad & Tobago +1868"
    }, {
      "phone": "+216",
      "code": "tn",
      "name": "Tunisia +216"
    }, {
      "phone": "+90",
      "code": "tr",
      "name": "Turkey (Türkiye) +90"
    }, {
      "phone": "+993",
      "code": "tm",
      "name": "Turkmenistan +993"
    }, {
      "phone": "+1649",
      "code": "tc",
      "name": "Turks & Caicos Islands +1649"
    }, {
      "phone": "+688",
      "code": "tv",
      "name": "Tuvalu +688"
    }, {
      "phone": "+1340",
      "code": "vi",
      "name": "U.S. Virgin Islands +1340"
    }, {
      "phone": "+256",
      "code": "ug",
      "name": "Uganda +256"
    }, {
      "phone": "+380",
      "code": "ua",
      "name": "Ukraine (Україна) +380"
    }, {
      "phone": "+971",
      "code": "ae",
      "name": "United Arab Emirates (‫الإمارات العربية المتحدة‬‎) +971"
    }, {
      "phone": "+44",
      "code": "gb",
      "name": "United Kingdom +44"
    }, {
      "phone": "+1",
      "code": "us",
      "name": "United States +1"
    }, {
      "phone": "+598",
      "code": "uy",
      "name": "Uruguay +598"
    }, {
      "phone": "+998",
      "code": "uz",
      " ": "Uzbekistan (Oʻzbekiston) +998"
    }, {
      "phone": "+678",
      "code": "vu",
      "name": "Vanuatu +678"
    }, {
      "phone": "+379",
      "code": "va",
      "name": "Vatican City (Città del Vaticano) +379"
    }, {
      "phone": "+58",
      "code": "ve",
      "name": "Venezuela +58"
    }, {
      "phone": "+84",
      "code": "vn",
      "name": "Vietnam (Việt Nam) +84"
    }, {
      "phone": "+681",
      "code": "wf",
      "name": "Wallis & Futuna +681"
    }, {
      "phone": "+967",
      "code": "ye",
      "name": "Yemen (‫اليمن‬‎) +967"
    }, {
      "phone": "+260",
      "code": "zm",
      "name": "Zambia +260"
    }, {
      "phone": "+263",
      "code": "zw",
      "name": "Zimbabwe +263"
    }];

    $scope.currentCountry = {};
    $scope.currentCountry.selected = $scope.countries[0];
    $scope.currentCountry.phone = $scope.countries[0].phone;

    $scope.updateCurrentCountryPhone = function($item, $model) {
      $scope.currentCountry.phone = $model.phone;
    };
  })

  // ngSliderCtrl Controller
  .controller("ngSliderCtrl", function($scope) {
    $scope.single = 80;
    $scope.from = 20;
    $scope.to = 80;
  })

  // Toggles Controller
  .controller("TogglesCtrl", function($scope) {
    $scope.checkbox = {
      first: false,
      second: "yes",
      third: true,
    };

    $scope.radio = "second";

    $scope.switch = {
      first: "on",
      second: "on"
    };
  })

  // Uploader Controller
  .controller("UploaderCtrl", function($scope) {
    $scope.options = {
      url: "http://uploader.naksoid.com/",
      autoUpload: true,
      filesContainer: ".file-list"
    };
  })

  // Uploader Destroy Controller
  .controller("UploaderDestroyCtrl", function($scope, $http) {
    var file = $scope.file,
      state;
    if (file.url) {
      file.$state = function() {
        return state;
      };
      file.$destroy = function() {
        state = "pending";
        return $http({
          url: file.deleteUrl,
          method: file.deleteType
        }).then(
          function() {
            state = "resolved";
            $scope.clear(file);
          },
          function() {
            state = "rejected";
          }
        );
      };
    }
  })

  // Datatables Basic Controller
  .controller("DatatablesBasicCtrl",
    function(DTOptionsBuilder, DTColumnBuilder) {
      var dt = this;

      dt.options = DTOptionsBuilder
        .fromSource("data/data.json")
        .withDOM(`<"row"<"col-sm-6"i><"col-sm-6"f>>
        <"table-responsive"tr><"row"<"col-sm-6"l><"col-sm-6"p>>`)
        .withBootstrap()
        .withLanguage({
          paginate: {
            previous: "&laquo;",
            next: "&raquo;",
          },
          search: "_INPUT_",
          searchPlaceholder: "Search…"
        })
        .withOption("order", [
          [5, "desc"]
        ]);

      dt.columns = [
        DTColumnBuilder.newColumn("Name").withTitle("Name"),
        DTColumnBuilder.newColumn("Type").withTitle("Type"),
        DTColumnBuilder.newColumn("Region").withTitle("Region"),
        DTColumnBuilder.newColumn("District").withTitle("District"),
        DTColumnBuilder.newColumn("Latitude").withTitle("Latitude"),
        DTColumnBuilder.newColumn("Longitude").withTitle("Longitude")
      ];
    })

  // Datatables Responsive Controller
  .controller("DatatablesResponsiveCtrl",
    function(DTOptionsBuilder, DTColumnBuilder) {
      var dt = this;

      dt.options = DTOptionsBuilder
        .fromSource("data/data.json")
        .withDOM(`<"row"<"col-sm-6"i><"col-sm-6"f>>
        <"table-responsive"tr><"row"<"col-sm-6"l><"col-sm-6"p>>`)
        .withBootstrap()
        .withLanguage({
          paginate: {
            previous: "&laquo;",
            next: "&raquo;",
          },
          search: "_INPUT_",
          searchPlaceholder: "Search…"
        })
        .withOption("order", [
          [5, "desc"]
        ])
        .withOption("responsive", true);

        dt.columns = [
          DTColumnBuilder.newColumn("Name").withTitle("Name"),
          DTColumnBuilder.newColumn("Type").withTitle("Type"),
          DTColumnBuilder.newColumn("Region").withTitle("Region"),
          DTColumnBuilder.newColumn("District").withTitle("District"),
          DTColumnBuilder.newColumn("Latitude").withTitle("Latitude"),
          DTColumnBuilder.newColumn("Longitude").withTitle("Longitude")
        ];
    })

  // Datatables Colreorder Controller
  .controller("DatatablesColreorderCtrl",
    function(DTOptionsBuilder, DTColumnBuilder) {
      var dt = this;

      dt.options = DTOptionsBuilder
        .fromSource("data/data.json")
        .withDOM(`<"row"<"col-sm-6"i><"col-sm-6"f>>
        <"table-responsive"tr><"row"<"col-sm-6"l><"col-sm-6"p>>`)
        .withBootstrap()
        .withLanguage({
          paginate: {
            previous: "&laquo;",
            next: "&raquo;",
          },
          search: "_INPUT_",
          searchPlaceholder: "Search…"
        })
        .withOption("order", [
          [5, "desc"]
        ])
        .withColReorder()
        .withOption("responsive", true);

      dt.columns = [
        DTColumnBuilder.newColumn("name").withTitle("Name"),
        DTColumnBuilder.newColumn("position").withTitle("Position"),
        DTColumnBuilder.newColumn("office").withTitle("Office"),
        DTColumnBuilder.newColumn("age").withTitle("Age"),
        DTColumnBuilder.newColumn("startDate").withTitle("Start date"),
        DTColumnBuilder.newColumn("salary").withTitle("Salary")
      ];
    })

  // Datatables Scroller Controller
  .controller("DatatablesScrollerCtrl",
    function(DTOptionsBuilder, DTColumnBuilder) {
      var dt = this;

      dt.options = DTOptionsBuilder
        .fromSource("data/data.json")
        .withDOM(`<"row"<"col-sm-6"i><"col-sm-6"f>>
        <"table-responsive"tr><"row"<"col-sm-6"l><"col-sm-6"p>>`)
        .withBootstrap()
        .withLanguage({
          paginate: {
            previous: "&laquo;",
            next: "&raquo;",
          },
          search: "_INPUT_",
          searchPlaceholder: "Search…"
        })
        .withOption("order", [
          [5, "desc"]
        ])
        .withScroller()
        .withOption("deferRender", true)
        .withOption("scrollY", 367);

      dt.columns = [
        DTColumnBuilder.newColumn("Name").withTitle("Name"),
        DTColumnBuilder.newColumn("Type").withTitle("Position"),
        DTColumnBuilder.newColumn("Region").withTitle("Office"),
        DTColumnBuilder.newColumn("District").withTitle("Age"),
        DTColumnBuilder.newColumn("Latitude").withTitle("Start date"),
        DTColumnBuilder.newColumn("Longitude").withTitle("Salary")
      ];
    })

  // Chartjs Controller
  .controller("ChartjsCtrl", function($scope) {
    $scope.charts = [];

    // Electronic Sales
    $scope.charts.push({
      type: "bubble",
      series: [
        "Cellphones",
        "Accessories",
        "Cameras",
        "Computers",
        "Tablets",
        "Vehicle Electronics",
        "Video Games",
        "TV",
        "Audio",
        "Surveillance"
      ],
      data: [
        [{
          "x": 0.001129454926169296,
          "y": 1865246,
          "r": 16.898413304010464
        }],
        [{
          "x": 0.055660748976745084,
          "y": 1132265,
          "r": 14.252723723321786
        }],
        [{
          "x": 0.05178657937278697,
          "y": 1872143,
          "r": 6.846888092430592
        }],
        [{
          "x": 0.09587683752117893,
          "y": 1215154,
          "r": 7.3766485649072155
        }],
        [{
          "x": -0.030628645119801012,
          "y": 1820623,
          "r": 21.707614325088514
        }],
        [{
          "x": -0.043417354916937746,
          "y": 1864678,
          "r": 8.82319354866996
        }],
        [{
          "x": -0.023638915208416655,
          "y": 1756425,
          "r": 20.30335944043797
        }],
        [{
          "x": 0.05273494169628573,
          "y": 1356544,
          "r": 20.492687366818817
        }],
        [{
          "x": -0.03618247255638911,
          "y": 1462015,
          "r": 9.605737080336784
        }],
        [{
          "x": -0.05222798363282073,
          "y": 1196681,
          "r": 6.107197023839577
        }]
      ],
      options: {
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: "right"
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: "The difference with the previous year."
            },
            ticks: {
              userCallback: function userCallback(tick) {
                return numeral(tick).format("0 %");
              }
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "This Year Electronic Sales"
            },
            ticks: {
              userCallback: function userCallback(tick) {
                return numeral(tick).format("$ 0.00 a");
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function label(tooltipItem, data) {
              var datasetLabel = data.datasets[tooltipItem.datasetIndex].label,
                dataPoint = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              return datasetLabel + ": " + numeral(dataPoint.y).format("$0,0.00");
            }
          }
        }
      }
    });

    // Monthly Report
    $scope.charts.push({
      type: "line",
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July"
      ],
      series: [
        "Questions",
        "Incidents",
        "Problems",
        "Tasks"
      ],
      data: [
        [1159, 1164, 1944, 1925, 1958, 1868, 1456],
        [1499, 1807, 1608, 1110, 1175, 1772, 1949],
        [1217, 1315, 1639, 1625, 1321, 1797, 1224],
        [1208, 1665, 1379, 1250, 1242, 1127, 1729],
      ],
      datasetOverride: [{
        backgroundColor: "rgba(205,214,222,0.5)",
        borderColor: "rgba(205,214,222,0.5)",
        fill: false,
        pointBackgroundColor: "rgba(205,214,222,0.5)",
        pointBorderColor: "rgba(205,214,222,0.5)",
        pointBorderWidth: 1,
        pointHoverRadius: [20, 10, 19, 18, 24, 16, 15],
        pointRadius: [20, 10, 19, 18, 24, 16, 15],
        borderDash: [5, 5]
      }, {
        backgroundColor: "rgba(149,75,234,0.5)",
        borderColor: "rgba(149,75,234,0.5)",
        fill: false,
        pointBackgroundColor: "rgba(149,75,234,0.5)",
        pointBorderColor: "rgba(149,75,234,0.5)",
        pointBorderWidth: 1,
        pointHoverRadius: [6, 21, 7, 10, 18, 16, 5],
        pointRadius: [6, 21, 7, 10, 18, 16, 5]
      }, {
        backgroundColor: "rgba(44,55,196,0.5)",
        borderColor: "rgba(44,55,196,0.5)",
        fill: false,
        pointBackgroundColor: "rgba(44,55,196,0.5)",
        pointBorderColor: "rgba(44,55,196,0.5)",
        pointBorderWidth: 1,
        pointHoverRadius: [5, 16, 16, 11, 19, 21, 23],
        pointRadius: [5, 16, 16, 11, 19, 21, 23],
        borderDash: [5, 5]
      }, {
        backgroundColor: "rgba(74,104,65,0.5)",
        borderColor: "rgba(74,104,65,0.5)",
        fill: false,
        pointBackgroundColor: "rgba(74,104,65,0.5)",
        pointBorderColor: "rgba(74,104,65,0.5)",
        pointBorderWidth: 1,
        pointHoverRadius: [11, 18, 17, 22, 19, 12, 23],
        pointRadius: [11, 18, 17, 22, 19, 12, 23]
      }],
      options: {
        maintainAspectRatio: false,
        legend: {
          position: "bottom",
        },
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Month"
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Number of tickets"
            }
          }]
        },
        title: {
          display: true,
          text: "Monthly Report"
        }
      }
    });

    // Bar Line Combination
    $scope.charts.push({
      type: "bar",
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July"
      ],
      series: [
        "Dataset 1",
        "Dataset 2",
        "Dataset 3",
      ],
      data: [
        [-79, 5, 78, 70, -92, -87, -2],
        [60, 5, 6, 70, 44, -17, -51],
        [-66, -13, 69, -39, 89, 72, 42],
      ],
      datasetOverride: [{
        type: "bar",
        borderColor: "rgba(192,51,30,0.5)",
        backgroundColor: "rgba(192,51,30,0.5)",
        pointBorderColor: "rgba(192,51,30,0.5)",
        pointBackgroundColor: "rgba(192,51,30,0.5)",
        pointBorderWidth: 2
      }, {
        type: "bar",
        borderColor: "rgba(72,49,142,0.5)",
        backgroundColor: "rgba(72,49,142,0.5)",
        pointBorderColor: "rgba(72,49,142,0.5)",
        pointBackgroundColor: "rgba(72,49,142,0.5)",
        pointBorderWidth: 2
      }, {
        borderDash: [5, 5],
        fill: false,
        type: "line",
        borderColor: "rgba(254,74,64,0.5)",
        backgroundColor: "rgba(254,74,64,0.5)",
        pointBorderColor: "rgba(254,74,64,0.5)",
        pointBackgroundColor: "rgba(254,74,64,0.5)",
        pointBorderWidth: 2
      }],
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Bar Line Combination Chart"
        },
        animation: {
          onComplete: function() {
            var chartInstance = this.chart;
            var ctx = chartInstance.ctx;
            ctx.textAlign = "center";

            Chart.helpers.each(this.data.datasets.forEach(function(dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              Chart.helpers.each(meta.data.forEach(function(bar, index) {
                ctx.fillText(dataset.data[index], bar._model.x, bar._model.y - 10);
              }), this)
            }), this);
          }
        },
        legend: {
          display: false
        }
      }
    });

    // Bar Line Combination
    $scope.charts.push({
      type: "bar",
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July"
      ],
      series: [
        "Dataset 1",
        "Dataset 2",
        "Dataset 3",
      ],
      data: [
        [-36, -45, -15, -78, 4, 0, 66],
        [48, -65, 97, 60, 49, -18, -77],
        [46, -34, 5, 89, 44, 86, 22],
      ],
      datasetOverride: [{
        backgroundColor: "rgba(151,187,205,0.5)",
        borderColor: "white",
        borderWidth: 2,
        type: "bar"
      }, {
        backgroundColor: "rgba(151,187,205,0.5)",
        borderColor: "white",
        borderWidth: 2,
        type: "line"
      }, {
        backgroundColor: "rgba(220,220,220,0.5)",
        type: "bar"
      }],
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Bar Line Combination Chart"
        },
        animation: {
          onComplete: function() {
            var chartInstance = this.chart;
            var ctx = chartInstance.ctx;
            ctx.textAlign = "center";

            Chart.helpers.each(this.data.datasets.forEach(function(dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              Chart.helpers.each(meta.data.forEach(function(bar, index) {
                ctx.fillText(dataset.data[index], bar._model.x, bar._model.y - 10);
              }), this)
            }), this);
          }
        },
        legend: {
          display: false
        }
      }
    });
  })

  // Vector maps
  .controller("VectorMapsCtrl", function($scope) {
    $scope.worldHealthStatistics = {
      backgroundColor: "null",
      color: "#ffffff",
      enableZoom: "true",
      hoverOpacity: "0.7",
      normalizeFunction: "polynomial",
      selectedColor: "#666666",
      showTooltip: "true",
      colors: {
        ad: "#00796b",
        ae: "#4db6ac",
        af: "#b2dfdb",
        ag: "#4db6ac",
        al: "#009688",
        am: "#009688",
        ao: "#009688",
        ar: "#009688",
        as: "#ffffff",
        at: "#00796b",
        au: "#004d40",
        az: "#b2dfdb",
        ba: "#009688",
        bb: "#009688",
        bd: "#b2dfdb",
        be: "#00796b",
        bf: "#009688",
        bg: "#00796b",
        bh: "#b2dfdb",
        bi: "#00796b",
        bj: "#b2dfdb",
        bn: "#b2dfdb",
        bo: "#009688",
        br: "#00796b",
        bs: "#4db6ac",
        bt: "#b2dfdb",
        bw: "#009688",
        by: "#004d40",
        bz: "#009688",
        ca: "#00796b",
        cd: "#4db6ac",
        cf: "#4db6ac",
        cg: "#4db6ac",
        ch: "#00796b",
        ci: "#009688",
        ck: "#4db6ac",
        cl: "#00796b",
        cm: "#009688",
        cn: "#009688",
        co: "#009688",
        cr: "#4db6ac",
        cu: "#009688",
        cv: "#009688",
        cy: "#00796b",
        cz: "#004d40",
        de: "#00796b",
        dj: "#b2dfdb",
        dk: "#00796b",
        dm: "#009688",
        do: "#009688",
        dz: "#b2dfdb",
        ec: "#009688",
        ee: "#ffffff",
        eg: "#b2dfdb",
        er: "#b2dfdb",
        es: "#00796b",
        et: "#4db6ac",
        fi: "#00796b",
        fj: "#4db6ac",
        fm: "#4db6ac",
        fr: "#00796b",
        ga: "#00796b",
        gb: "#004d40",
        gd: "#00796b",
        ge: "#009688",
        gh: "#4db6ac",
        gm: "#4db6ac",
        gn: "#b2dfdb",
        gq: "#009688",
        gr: "#00796b",
        gs: "#009688",
        gt: "#4db6ac",
        gw: "#4db6ac",
        gy: "#00796b",
        hn: "#4db6ac",
        hr: "#00796b",
        ht: "#009688",
        hu: "#004d40",
        id: "#b2dfdb",
        ie: "#00796b",
        il: "#4db6ac",
        in: "#4db6ac",
        io: "#4db6ac",
        iq: "#b2dfdb",
        ir: "#b2dfdb",
        is: "#009688",
        it: "#009688",
        jm: "#4db6ac",
        jo: "#b2dfdb",
        jp: "#009688",
        ke: "#4db6ac",
        kg: "#4db6ac",
        kh: "#009688",
        ki: "#4db6ac",
        km: "#b2dfdb",
        kn: "#009688",
        kp: "#00796b",
        kw: "#b2dfdb",
        kz: "#009688",
        la: "#009688",
        lb: "#b2dfdb",
        lc: "#00796b",
        lk: "#4db6ac",
        lr: "#4db6ac",
        ls: "#009688",
        lt: "#004d40",
        lu: "#00796b",
        lv: "#00796b",
        ly: "#ffffff",
        ma: "#b2dfdb",
        mc: "#ffffff",
        md: "#004d40",
        me: "#00796b",
        mg: "#b2dfdb",
        mh: "#ffffff",
        mk: "#009688",
        ml: "#b2dfdb",
        mm: "#b2dfdb",
        mn: "#009688",
        mr: "#b2dfdb",
        mt: "#009688",
        mu: "#4db6ac",
        mv: "#b2dfdb",
        mw: "#4db6ac",
        mx: "#009688",
        my: "#b2dfdb",
        mz: "#b2dfdb",
        na: "#00796b",
        ne: "#b2dfdb",
        ng: "#00796b",
        ni: "#4db6ac",
        nl: "#00796b",
        no: "#009688",
        np: "#b2dfdb",
        nr: "#4db6ac",
        nu: "#009688",
        nz: "#00796b",
        om: "#b2dfdb",
        pa: "#009688",
        pe: "#4db6ac",
        pg: "#4db6ac",
        ph: "#009688",
        pk: "#b2dfdb",
        pl: "#00796b",
        pt: "#004d40",
        pw: "#ffffff",
        py: "#00796b",
        qa: "#b2dfdb",
        ro: "#004d40",
        rs: "#004d40",
        ru: "#004d40",
        rw: "#00796b",
        sa: "#b2dfdb",
        sb: "#b2dfdb",
        sc: "#009688",
        sd: "#ffffff",
        se: "#00796b",
        sg: "#4db6ac",
        si: "#00796b",
        sk: "#004d40",
        sl: "#009688",
        sm: "#ffffff",
        sn: "#b2dfdb",
        so: "#b2dfdb",
        sr: "#009688",
        ss: "#ffffff",
        st: "#009688",
        sv: "#4db6ac",
        sy: "#b2dfdb",
        sz: "#009688",
        td: "#4db6ac",
        tg: "#b2dfdb",
        th: "#009688",
        tj: "#b2dfdb",
        tl: "#b2dfdb",
        tm: "#4db6ac",
        tn: "#b2dfdb",
        to: "#b2dfdb",
        tr: "#b2dfdb",
        tt: "#009688",
        tv: "#b2dfdb",
        tw: "#009688",
        tz: "#009688",
        ua: "#00796b",
        ug: "#00796b",
        us: "#00796b",
        uy: "#009688",
        uz: "#4db6ac",
        vc: "#009688",
        ve: "#009688",
        vn: "#00796b",
        vu: "#b2dfdb",
        ws: "#ffffff",
        ye: "#b2dfdb",
        za: "#00796b",
        zm: "#4db6ac",
        zw: "#4db6ac"
      }
    };

    // Presidential Elections
    $scope.presidentialElections = {
      map: "usa_en",
      backgroundColor: null,
      color: "#ffffff",
      enableZoom: true,
      hoverOpacity: "0.7",
      normalizeFunction: "polynomial",
      selectedColor: "#666666",
      showTooltip: true,
      colors: {
        ak: "#e74c3c",
        al: "#e74c3c",
        ar: "#e74c3c",
        az: "#e74c3c",
        ca: "#2980b9",
        co: "#2980b9",
        ct: "#2980b9",
        dc: "#2980b9",
        de: "#2980b9",
        fl: "#2980b9",
        ga: "#e74c3c",
        hi: "#2980b9",
        ia: "#2980b9",
        id: "#e74c3c",
        il: "#2980b9",
        in: "#e74c3c",
        ks: "#e74c3c",
        ky: "#e74c3c",
        la: "#e74c3c",
        ma: "#2980b9",
        md: "#2980b9",
        me: "#2980b9",
        mi: "#2980b9",
        mn: "#2980b9",
        mo: "#e74c3c",
        ms: "#e74c3c",
        mt: "#e74c3c",
        nc: "#e74c3c",
        nd: "#e74c3c",
        ne: "#e74c3c",
        nh: "#2980b9",
        nj: "#2980b9",
        nm: "#2980b9",
        nv: "#2980b9",
        ny: "#2980b9",
        oh: "#2980b9",
        ok: "#e74c3c",
        or: "#2980b9",
        pa: "#2980b9",
        ri: "#2980b9",
        sc: "#e74c3c",
        sd: "#e74c3c",
        tn: "#e74c3c",
        tx: "#e74c3c",
        ut: "#e74c3c",
        va: "#2980b9",
        vt: "#2980b9",
        wa: "#2980b9",
        wi: "#2980b9",
        wv: "#e74c3c",
        wy: "#e74c3c"
      }
    };
  })

  // Google Maps Controller
  .controller("GoogleMapsCtrl", function($scope, toast) {
    // Instantiate google map objects for directions
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();
    var geocoder = new google.maps.Geocoder();

    // Basic example
    $scope.map = {
      zoom: 12,
      height: '300px',
      center: {
        latitude: 37.77,
        longitude: -122.447
      }
    };

    // 5 things not to miss in San Francisco
    $scope.mapWithMarkers = {
      zoom: 11,
      height: '300px',
      center: {
        latitude: 37.77,
        longitude: -122.447
      }
    };

    $scope.mapWithMarkers.markers = [];
    $scope.mapWithMarkers.markers.push({
      title: 'Walk Over the Golden Gate Bridge',
      content: 'The Golden Gate Bridge is a suspension bridge spanning the Golden Gate strait, the one-mile-wide, three-mile-long channel between San Francisco Bay and the Pacific Ocean.',
      coords: {
        latitude: 37.819929,
        longitude: -122.478255
      }
    });

    $scope.mapWithMarkers.markers.push({
      title: 'RIde a Cable Car',
      content: 'The San Francisco cable car system is the world\'s last manually operated cable car system. An icon of San Francisco, the cable car system forms part of the intermodal urban transport network operated by the San Francisco Municipal Railway.',
      coords: {
        latitude: 37.805755,
        longitude: -122.414127
      }
    });

    $scope.mapWithMarkers.markers.push({
      title: 'Visit the Rock',
      content: 'Alcatraz Island is located in the San Francisco Bay, 1.25 miles offshore from San Francisco, California, United States.',
      coords: {
        latitude: 37.826977,
        longitude: -122.422956
      }
    });

    $scope.mapWithMarkers.markers.push({
      title: 'Shop in Union Square',
      content: 'Union Square is a 2.6-acre public plaza bordered by Geary, Powell, Post and Stockton Streets in downtown San Francisco, California.',
      coords: {
        latitude: 37.787994,
        longitude: -122.407437
      }
    });

    $scope.mapWithMarkers.markers.push({
      title: 'Explore North Beach',
      content: 'North Beach is a neighborhood in the northeast of San Francisco adjacent to Chinatown, Fisherman\'s Wharf and Russian Hill. The neighborhood is San Francisco\'s "Little Italy", and has historically been home to a large Italian American population.',
      coords: {
        latitude: 37.806053,
        longitude: -122.410331
      }
    });

    $scope.mapWithMarkers.markers
      .forEach(function callback(marker, index) {
        marker.id = index;
        marker.events = {
          click: function click(evt) {
            toast.pop({
              title: marker.title,
              body: marker.content,
              type: 'info'
            });
          }
        };
      });

    // Map with Polylines
    $scope.mapWithPolylines = {
      zoom: 2,
      height: '300px',
      center: {
        latitude: 0,
        longitude: -180,
      }
    };

    $scope.mapWithPolylines.polylines = [];
    $scope.mapWithPolylines.polylines.push({
      id: 1,
      path: [{
          latitude: 37.772,
          longitude: -122.214
        },
        {
          latitude: 21.291,
          longitude: -157.821
        },
        {
          latitude: -18.142,
          longitude: 178.431
        },
        {
          latitude: -27.467,
          longitude: 153.027
        }
      ],
      stroke: {
        color: '#ff0000',
        opacity: 1.0
      },
      editable: false,
      draggable: false,
      geodesic: true,
      visible: true
    });

    // Map with Polygons
    $scope.mapWithPolygons = {
      zoom: 4,
      height: '300px',
      center: {
        latitude: 24.886,
        longitude: -70.268,
      }
    };

    $scope.mapWithPolygons.options = {
      styles: [{
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [{
          "weight": "2.00"
        }]
      }, {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#9c9c9c"
        }]
      }, {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
          "color": "#f2f2f2"
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }]
      }, {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }]
      }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
          "saturation": -100
        }, {
          "lightness": 45
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#eeeeee"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#7b7b7b"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ffffff"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
          "visibility": "simplified"
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
          "color": "#46bcec"
        }, {
          "visibility": "on"
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#c8d7d4"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#070707"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ffffff"
        }]
      }]
    };

    $scope.mapWithPolygons.polygons = [];
    $scope.mapWithPolygons.polygons.push({
      id: 1,
      path: [{
          latitude: 25.774,
          longitude: -80.190
        },
        {
          latitude: 18.466,
          longitude: -66.118
        },
        {
          latitude: 32.321,
          longitude: -64.757
        },
        {
          latitude: 25.774,
          longitude: -80.190
        }
      ],
      stroke: {
        color: '#ff0000',
        opacity: 0.8
      },
      fill: {
        color: '#ff0000',
        opacity: 0.4
      },
      editable: false,
      draggable: false,
      geodesic: true,
      visible: true
    });

    // Map with Route
    $scope.mapWithRoute = {
      zoom: 11,
      height: '300px',
      control: {},
      center: {
        latitude: 37.77,
        longitude: -122.447
      }
    };

    $scope.mapWithRoute.directions = {
      origin: "Golden Gate Park, San Francisco, CA",
      destination: "Golden Gate Bridge, San Francisco, CA",
      showList: false
    }

    // get directions using google maps api
    $scope.mapWithRoute.getDirections = function() {
      var request = {
        origin: $scope.mapWithRoute.directions.origin,
        destination: $scope.mapWithRoute.directions.destination,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      };
      directionsService.route(request, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          directionsDisplay.setMap($scope.mapWithRoute.control.getGMap());
          directionsDisplay.setPanel(document.getElementById('directionsList'));
          $scope.mapWithRoute.directions.showList = true;
        }
      });
    };

    // Map with Custom Style
    $scope.mapWithCustomStyle = {
      zoom: 12,
      height: '300px',
      center: {
        latitude: 37.77,
        longitude: -122.447
      },
      options: {
        styles: [{
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [{
              "weight": "2.00"
            }]
          },
          {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#9c9c9c"
            }]
          },
          {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [{
              "visibility": "on"
            }]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
              "color": "#f2f2f2"
            }]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
              },
              {
                "lightness": 45
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#eeeeee"
            }]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#7b7b7b"
            }]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
              "visibility": "simplified"
            }]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#46bcec"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#c8d7d4"
            }]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#070707"
            }]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [{
              "color": "#ffffff"
            }]
          }
        ]
      }
    };
  })


"use strict";

function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

  $urlRouterProvider.otherwise("/datatable/");

  $ocLazyLoadProvider.config({
    debug: false,
    modules: [{
      name: "angular-peity",
      serie: true,
      files: [
        "js/vendor/peity/jquery.peity.min.js",
        "js/vendor/angular-peity/angular-peity.min.js"
      ]
    },
    {
      name: "chart",
      serie: true,
      files: [
        "js/vendor/numeral/numeral.min.js",
        "js/vendor/numeral/locales.min.js",
        "js/vendor/chartjs/Chart.bundle.min.js",
        "js/vendor/angular-chart/angular-chart.min.js"
      ]
    },
    {
      name: "ui.select",
      serie: true,
      files: [
        "css/vendor/angular-ui/angular-ui-select.min.css",
        "js/vendor/angular-ui/angular-ui-select.min.js"
      ]
    },
    {
      name: "toast",
      serie: true,
      files: [
        "css/vendor/toast/toast.min.css",
        "js/vendor/toast/toast.min.js"
      ]
    },
    {
      name: "ngCropper",
      serie: true,
      files: [
        "css/vendor/ngCropper/ngCropper.min.css",
        "js/vendor/ngCropper/ngCropper.min.js"
      ]
    },
    {
      name: "ngSlider",
      serie: true,
      files: [
        "css/vendor/ngSlider/ngSlider.min.css",
        "js/vendor/ngSlider/ngSlider.min.js"
      ]
    },
    {
      name: "blueimp.fileupload",
      serie: true,
      files: [
        "js/vendor/jquery-ui/jquery-ui.min.js",
        "js/vendor/load-image/load-image.all.min.js",
        "js/vendor/fileupload/jquery.iframe-transport.js",
        "js/vendor/fileupload/jquery.fileupload.js",
        "js/vendor/fileupload/jquery.fileupload-process.js",
        "js/vendor/fileupload/jquery.fileupload-image.js",
        "js/vendor/fileupload/jquery.fileupload-validate.js",
        "js/vendor/fileupload/jquery.fileupload-angular.js"
      ]
    },
    {
      name: "datatables",
      serie: true,
      files: [
        "css/vendor/datatables/datatables.min.css",
        "css/vendor/datatables/datatables-responsive.min.css",
        "css/vendor/datatables/datatables-colreorder.min.css",
        "css/vendor/datatables/datatables-scroller.min.css",
        "js/vendor/datatables/jquery.dataTables.min.js",
        "js/vendor/datatables/dataTables.bootstrap.min.js",
        "js/vendor/datatables/dataTables.responsive.min.js",
        "js/vendor/datatables/responsive.bootstrap.min.js",
        "js/vendor/datatables/dataTables.colReorder.min.js",
        "js/vendor/datatables/dataTables.scroller.min.js",
        "js/vendor/angular-datatables/angular-datatables.min.js",
        "js/vendor/angular-datatables/angular-datatables.bootstrap.min.js",
        "js/vendor/angular-datatables/angular-datatables.colreorder.min.js",
        "js/vendor/angular-datatables/angular-datatables.scroller.min.js"
      ]
    },
    {
      name: "textAngular",
      serie: true,
      files: [
        "css/vendor/textAngular/textAngular.min.css",
        "js/vendor/textAngular/textAngular-sanitize.min.js",
        "js/vendor/textAngular/textAngular-rangy.min.js",
        "js/vendor/textAngular/textAngular.js",
        "js/vendor/textAngular/textAngularSetup.js",
      ]
    },
    {
      name: "angular-flexslider",
      serie: true,
      files: [
        "css/vendor/flexslider/flexslider.min.css",
        "js/vendor/flexslider/flexslider.min.js",
        "js/vendor/angular-flexslider/angular-flexslider.min.js"
      ]
    },
    {
      name: "angularjs-dropdown-multiselect",
      serie: true,
      files: [
        "js/vendor/angularjs-dropdown-multiselect/angularjs-dropdown-multiselect.min.js"
      ]
    }
    ]
  });

  $stateProvider
    .state("root", {
      abstract: true,
      templateUrl: "views/app.tpl.html"
    })
    .state("root.datatable", {
      url: "/datatable/:continent/:country/:disease/:type/:year/:mode",
      controller: "DatatableCtrl as dTable",
      templateUrl: "views/datatable.tpl.html",
      resolve: {
        loadDatatables: function ($ocLazyLoad) {
          return $ocLazyLoad.load("datatables");
        }
      }
    })
    .state("root.dashboard", {
      url: "/dashboard/:continent/:country/:disease/:type/:year",
      controller: "DashboardCtrl",
      templateUrl: "views/dashboard.tpl.html",
      resolve: {
        loadChartJS: function ($ocLazyLoad) {
          return $ocLazyLoad.load("chart");
        },
        loadPlugins: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/vendor/jqvmap/jqvmap.min.css",
            "js/vendor/jqvmap/jquery.vmap.min.js",
            "js/vendor/jqvmap/maps/jquery.vmap.world.js",
            "css/vendor/angularjs-dropdown-multiselect/index.css",
            "js/vendor/angularjs-dropdown-multiselect/angularjs-dropdown-multiselect.min.js",
            "css/vendor/leaflet/leaflet.css",
            "js/vendor/leaflet/leaflet.js",
          ]);
        }

      }
    })
    .state("root.contacts", {
      url: "/contacts",
      controller: "ContactsCtrl",
      templateUrl: "views/contacts.tpl.html"
    })
    .state("login", {
      url: "/login",
      data: {
        cssClasses: [
          "login-page-1"
        ]
      },
      templateUrl: "views/login.tpl.html",
      resolve: {
        loadFiles: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/login-1.min.css"
          ]);
        }
      }
    })
    .state("404", {
      url: "/404",
      data: {
        cssClasses: [
          "error-page"
        ],
      },
      templateUrl: "views/404.tpl.html",
      resolve: {
        loadLibraries: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/errors.min.css"
          ]);
        }
      }
    })
    .state("500", {
      url: "/500",
      data: {
        cssClasses: [
          "error-page"
        ],
      },
      templateUrl: "views/500.tpl.html",
      resolve: {
        loadLibraries: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/errors.min.css"
          ]);
        }
      }
    })
}

angular
  .module("sara")
  .config(config)
  .run(["$rootScope", "$state", "$stateParams",
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]);
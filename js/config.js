"use strict";

function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
  $urlRouterProvider.otherwise("/dashboard");

  $ocLazyLoadProvider.config({
    debug: false,
    modules: [{
      name: "angular-peity",
      serie: true,
      files: [
        "js/vendor/peity/jquery.peity.min.js",
        "js/vendor/angular-peity/angular-peity.min.js"
      ]
    }, {
      name: "chart.js",
      serie: true,
      files: [
        "js/vendor/numeral/numeral.min.js",
        "js/vendor/numeral/locales.min.js",
        "js/vendor/chartjs/Chart.bundle.min.js",
        "js/vendor/angular-chart/angular-chart.min.js"
      ]
    }, {
      name: "ui.select",
      serie: true,
      files: [
        "css/vendor/angular-ui/angular-ui-select.min.css",
        "js/vendor/angular-ui/angular-ui-select.min.js"
      ]
    }, {
      name: "toast",
      serie: true,
      files: [
        "css/vendor/toast/toast.min.css",
        "js/vendor/toast/toast.min.js"
      ]
    }, {
      name: "ngCropper",
      serie: true,
      files: [
        "css/vendor/ngCropper/ngCropper.min.css",
        "js/vendor/ngCropper/ngCropper.min.js"
      ]
    }, {
      name: "ngSlider",
      serie: true,
      files: [
        "css/vendor/ngSlider/ngSlider.min.css",
        "js/vendor/ngSlider/ngSlider.min.js"
      ]
    }, {
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
    }, {
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
    }, {
      name: "uiGmapgoogle-maps",
      serie: true,
      files: [
        "js/vendor/angular-google-maps/angular-google-maps.min.js",
        "js/vendor/angular-simple-logger/angular-simple-logger.js"
      ]
    }, {
      name: "textAngular",
      serie: true,
      files: [
        "css/vendor/textAngular/textAngular.min.css",
        "js/vendor/textAngular/textAngular-sanitize.min.js",
        "js/vendor/textAngular/textAngular-rangy.min.js",
        "js/vendor/textAngular/textAngular.js",
        "js/vendor/textAngular/textAngularSetup.js",
      ]
    }, {
      name: "wu.masonry",
      serie: true,
      files: [
        "js/vendor/masonry/masonry.pkgd.min.js",
        "js/vendor/imagesloaded/imagesloaded.pkgd.min.js",
        "js/vendor/angular-masonry/angular-masonry.min.js"
      ]
    }, {
      name: "angular-flexslider",
      serie: true,
      files: [
        "css/vendor/flexslider/flexslider.min.css",
        "js/vendor/flexslider/flexslider.min.js",
        "js/vendor/angular-flexslider/angular-flexslider.min.js"
      ]
    }]
  });

  $stateProvider
    .state("root", {
      abstract: true,
      templateUrl: "views/app.tpl.html",
    })
    .state("root.dashboard", {
      url: "/dashboard",
      controller: "DashboardCtrl",
      templateUrl: "views/dashboard.tpl.html",
      resolve: {
        loadChartJS: function($ocLazyLoad) {
          return $ocLazyLoad.load("chart.js");
        },
        loadPlugins: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/vendor/jqvmap/jqvmap.min.css",
            "js/vendor/jqvmap/jquery.vmap.min.js",
            "js/vendor/jqvmap/maps/jquery.vmap.world.js"
          ]);
        }
      }
    })
    .state("root.datatable", {
      url: "/datatable",
      controller: "DatatablesResponsiveCtrl as dt",
      templateUrl: "views/datatables.tpl.html",
      resolve: {
        loadDatatables: function($ocLazyLoad) {
          return $ocLazyLoad.load("datatables");
        }
      }
    })
    .state("root.country", {
      url: "/country",
      controller: "MapCtrl",
      templateUrl: "views/map.tpl.html",
      loadPlugins: function($ocLazyLoad) {
        return $ocLazyLoad.load([
          "css/vendor/leaflet/leaflet.css",
          "js/vendor/leaflet/leaflet.js"
        ]);
      }
    })
    .state("root.static-layout", {
      url: "/static-layout",
      controller: "DashboardCtrl",
      templateUrl: "views/dashboard-1.tpl.html",
      data: {
        cssClasses: [
          "layout"
        ],
      },
      resolve: {
        loadChartJS: function($ocLazyLoad) {
          return $ocLazyLoad.load("chart.js");
        },
        loadPlugins: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/vendor/jqvmap/jqvmap.min.css",
            "js/vendor/jqvmap/jquery.vmap.min.js",
            "js/vendor/jqvmap/maps/jquery.vmap.world.js"
          ]);
        }
      }
    })
    .state("root.page-layouts", {
      url: "/page-layouts",
      templateUrl: "views/page-layouts.tpl.html",
    })
    .state("root.header-fixed-layout", {
      url: "/header-fixed-layout",
      controller: "DashboardCtrl",
      templateUrl: "views/dashboard-1.tpl.html",
      data: {
        cssClasses: [
          "layout",
          "layout-header-fixed"
        ],
      },
      resolve: {
        loadChartJS: function($ocLazyLoad) {
          return $ocLazyLoad.load("chart.js");
        },
        loadPlugins: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/vendor/jqvmap/jqvmap.min.css",
            "js/vendor/jqvmap/jquery.vmap.min.js",
            "js/vendor/jqvmap/maps/jquery.vmap.world.js"
          ]);
        }
      }
    })
    .state("root.header-sidebar-fixed-layout", {
      url: "/header-sidebar-fixed-layout",
      controller: "DashboardCtrl",
      templateUrl: "views/dashboard-1.tpl.html",
      data: {
        cssClasses: [
          "layout",
          "layout-header-fixed",
          "layout-sidebar-fixed"
        ],
      },
      resolve: {
        loadChartJS: function($ocLazyLoad) {
          return $ocLazyLoad.load("chart.js");
        },
        loadPlugins: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/vendor/jqvmap/jqvmap.min.css",
            "js/vendor/jqvmap/jquery.vmap.min.js",
            "js/vendor/jqvmap/maps/jquery.vmap.world.js"
          ]);
        }
      }
    })
    .state("root.footer-fixed-layout", {
      url: "/footer-fixed-layout",
      controller: "DashboardCtrl",
      templateUrl: "views/dashboard-1.tpl.html",
      data: {
        cssClasses: [
          "layout",
          "layout-footer-fixed"
        ],
      },
      resolve: {
        loadChartJS: function($ocLazyLoad) {
          return $ocLazyLoad.load("chart.js");
        },
        loadPlugins: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/vendor/jqvmap/jqvmap.min.css",
            "js/vendor/jqvmap/jquery.vmap.min.js",
            "js/vendor/jqvmap/maps/jquery.vmap.world.js"
          ]);
        }
      }
    })
    .state("ui", {
      abstract: true,
      templateUrl: "views/app.tpl.html",
    })
    .state("ui.arrows", {
      url: "/arrows",
      templateUrl: "views/arrows.tpl.html",
    })
    .state("ui.badges", {
      url: "/badges",
      templateUrl: "views/badges.tpl.html",
    })
    .state("ui.buttons", {
      url: "/buttons",
      controller: "ButtonsCtrl",
      templateUrl: "views/buttons.tpl.html",
    })
    .state("ui.cards", {
      url: "/cards",
      templateUrl: "views/cards.tpl.html",
    })
    .state("ui.dividers", {
      url: "/dividers",
      templateUrl: "views/dividers.tpl.html",
    })
    .state("ui.files", {
      url: "/files",
      templateUrl: "views/files.tpl.html",
    })
    .state("ui.flags", {
      url: "/flags",
      controller: "FlagsCtrl",
      templateUrl: "views/flags.tpl.html",
      resolve: {
        loadUiSelect: function($ocLazyLoad) {
          return $ocLazyLoad.load("ui.select");
        },
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/vendor/flags/flags.min.css",
          ]);
        }
      }
    })
    .state("ui.grid-system", {
      url: "/grid-system",
      templateUrl: "views/grid-system.tpl.html",
    })
    .state("ui.icons", {
      url: "/icons",
      templateUrl: "views/icons.tpl.html",
    })
    .state("ui.labels", {
      url: "/labels",
      templateUrl: "views/labels.tpl.html",
    })
    .state("ui.lists", {
      url: "/lists",
      templateUrl: "views/lists.tpl.html",
    })
    .state("ui.modals", {
      url: "/modals",
      controller: "ModalsCtrl as mo",
      templateUrl: "views/modals.tpl.html",
    })
    .state("ui.pricing-cards", {
      url: "/pricing-cards",
      templateUrl: "views/pricing-cards.tpl.html",
    })
    .state("ui.progress-bars", {
      url: "/progress-bars",
      controller: "ProgressBarsCtrl",
      templateUrl: "views/progress-bars.tpl.html",
    })
    .state("ui.spinners", {
      url: "/spinners",
      templateUrl: "views/spinners.tpl.html",
    })
    .state("ui.tabs", {
      url: "/tabs",
      templateUrl: "views/tabs.tpl.html",
    })
    .state("ui.toastrs", {
      url: "/toastrs",
      controller: "ToastrsCtrl",
      templateUrl: "views/toastrs.tpl.html",
      resolve: {
        loadToast: function($ocLazyLoad) {
          return $ocLazyLoad.load("toast");
        }
      }
    })
    .state("ui.typography", {
      url: "/typography",
      templateUrl: "views/typography.tpl.html",
    })
    .state("forms", {
      abstract: true,
      templateUrl: "views/app.tpl.html",
    })
    .state("forms.cropper", {
      url: "/cropper",
      controller: "CropperCtrl",
      templateUrl: "views/cropper.tpl.html",
      resolve: {
        loadNgCropper: function($ocLazyLoad) {
          return $ocLazyLoad.load("ngCropper");
        }
      }
    })
    .state("forms.form-controls", {
      url: "/form-controls",
      templateUrl: "views/form-controls.tpl.html",
    })
    .state("forms.form-layouts", {
      url: "/form-layouts",
      templateUrl: "views/form-layouts.tpl.html",
    })
    .state("forms.form-validation", {
      url: "/form-validation",
      controller: "FormValidationCtrl",
      templateUrl: "views/form-validation.tpl.html",
    })
    .state("forms.form-wizard", {
      url: "/form-wizard",
      templateUrl: "views/form-wizard.tpl.html",
    })
    .state("forms.form-wizard.step-one", {
      url: "/step-one",
      templateUrl: "views/step-one.tpl.html",
    })
    .state("forms.form-wizard.step-two", {
      url: "/step-two",
      templateUrl: "views/step-two.tpl.html",
    })
    .state("forms.form-wizard.step-three", {
      url: "/step-three",
      templateUrl: "views/step-three.tpl.html",
    })
    .state("forms.input-mask", {
      url: "/input-mask",
      controller: "InputMaskCtrl",
      templateUrl: "views/input-mask.tpl.html",
      resolve: {
        loadPlugins: function($ocLazyLoad) {
          return $ocLazyLoad.load(
            "js/vendor/inputmask/jquery.inputmask.bundle.min.js"
          );
        }
      }
    })
    .state("forms.md-form-controls", {
      url: "/md-form-controls",
      templateUrl: "views/md-form-controls.tpl.html",
    })
    .state("forms.md-form-validation", {
      url: "/md-form-validation",
      controller: "FormValidationCtrl",
      templateUrl: "views/md-form-validation.tpl.html",
    })
    .state("forms.pickers", {
      url: "/pickers",
      controller: "PickersCtrl",
      templateUrl: "views/pickers.tpl.html"
    })
    .state("forms.select2", {
      url: "/select2",
      controller: "Select2Ctrl",
      templateUrl: "views/select2.tpl.html",
      resolve: {
        loadUiSelect: function($ocLazyLoad) {
          return $ocLazyLoad.load("ui.select");
        },
      }
    })
    .state("forms.sliders", {
      url: "/sliders",
      controller: "ngSliderCtrl",
      templateUrl: "views/sliders.tpl.html",
      resolve: {
        loadPlugins: function($ocLazyLoad) {
          return $ocLazyLoad.load("ngSlider");
        }
      }
    })
    .state("forms.toggles", {
      url: "/toggles",
      controller: "TogglesCtrl",
      templateUrl: "views/toggles.tpl.html",
    })
    .state("forms.uploader", {
      url: "/uploader",
      controller: "UploaderCtrl",
      templateUrl: "views/uploader.tpl.html",
      resolve: {
        loadBlueimpFileupload: function($ocLazyLoad) {
          return $ocLazyLoad.load("blueimp.fileupload");
        }
      }
    })
    .state("tables", {
      abstract: true,
      templateUrl: "views/app.tpl.html",
    })
    .state("tables.static-tables", {
      url: "/static-tables",
      templateUrl: "views/static-tables.tpl.html",
    })
    .state("tables.responsive-tables", {
      url: "/responsive-tables",
      templateUrl: "views/responsive-tables.tpl.html",
    })
    .state("tables.datatables", {
      url: "/datatables",
      controller: "DatatablesBasicCtrl as dt",
      templateUrl: "views/datatables.tpl.html",
      resolve: {
        loadDatatables: function($ocLazyLoad) {
          return $ocLazyLoad.load("datatables");
        }
      }
    })
    .state("tables.datatables-responsive", {
      url: "/datatables-responsive",
      controller: "DatatablesResponsiveCtrl as dt",
      templateUrl: "views/datatables-responsive.tpl.html",
      resolve: {
        loadDatatables: function($ocLazyLoad) {
          return $ocLazyLoad.load("datatables");
        }
      }
    })
    .state("tables.datatables-colreorder", {
      url: "/datatables-colreorder",
      controller: "DatatablesColreorderCtrl as dt",
      templateUrl: "views/datatables-colreorder.tpl.html",
      resolve: {
        loadDatatables: function($ocLazyLoad) {
          return $ocLazyLoad.load("datatables");
        }
      }
    })
    .state("tables.datatables-scroller", {
      url: "/datatables-scroller",
      controller: "DatatablesScrollerCtrl as dt",
      templateUrl: "views/datatables-scroller.tpl.html",
      resolve: {
        loadDatatables: function($ocLazyLoad) {
          return $ocLazyLoad.load("datatables");
        }
      }
    })
    .state("charts", {
      abstract: true,
      templateUrl: "views/app.tpl.html",
    })
    .state("charts.peity-charts", {
      url: "/peity-charts",
      templateUrl: "views/peity-charts.tpl.html",
      resolve: {
        loadAngularPeity: function($ocLazyLoad) {
          return $ocLazyLoad.load("angular-peity");
        }
      }
    })
    .state("charts.chartjs", {
      url: "/chartjs",
      controller: "ChartjsCtrl",
      templateUrl: "views/chartjs.tpl.html",
      resolve: {
        loadAngularPeity: function($ocLazyLoad) {
          return $ocLazyLoad.load("chart.js");
        }
      }
    })
    .state("maps", {
      abstract: true,
      templateUrl: "views/app.tpl.html",
    })
    .state("maps.vector-maps", {
      url: "/vector-maps",
      controller: "VectorMapsCtrl",
      templateUrl: "views/vector-maps.tpl.html",
      resolve: {
        loadPlugins: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/vendor/jqvmap/jqvmap.min.css",
            "js/vendor/jqvmap/jquery.vmap.min.js",
            "js/vendor/jqvmap/maps/jquery.vmap.world.js",
            "js/vendor/jqvmap/maps/jquery.vmap.usa.js"
          ]);
        }
      }
    })
    .state("maps.google-maps", {
      url: "/google-maps",
      controller: "GoogleMapsCtrl",
      templateUrl: "views/google-maps.tpl.html",
      resolve: {
        loadToast: function($ocLazyLoad) {
          return $ocLazyLoad.load("toast");
        },
        loadUiGmapgoogleMaps: function($ocLazyLoad) {
          return $ocLazyLoad.load("uiGmapgoogle-maps");
        }
      }
    })
    .state("signup-1", {
      url: "/signup",
      data: {
        cssClasses: [
          "signup-page-1"
        ]
      },
      templateUrl: "views/signup-1.tpl.html",
      resolve: {
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/signup-1.min.css"
          ]);
        }
      }
    })
    .state("signup-1.step-one", {
      url: "/step-one",
      templateUrl: "views/step-one.tpl.html",
    })
    .state("signup-1.step-two", {
      url: "/step-two",
      templateUrl: "views/step-two.tpl.html",
    })
    .state("signup-1.step-three", {
      url: "/step-three",
      templateUrl: "views/step-three.tpl.html",
    })
    .state("signup-2", {
      url: "/signup-2",
      data: {
        cssClasses: [
          "signup-page-2"
        ]
      },
      templateUrl: "views/signup-2.tpl.html",
      resolve: {
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/signup-2.min.css"
          ]);
        }
      }
    })
    .state("signup-3", {
      url: "/signup-3",
      data: {
        cssClasses: [
          "signup-page-3"
        ]
      },
      templateUrl: "views/signup-3.tpl.html",
      resolve: {
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/signup-3.min.css"
          ]);
        }
      }
    })
    .state("login-1", {
      url: "/login",
      data: {
        cssClasses: [
          "login-page-1"
        ]
      },
      templateUrl: "views/login-1.tpl.html",
      resolve: {
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/login-1.min.css"
          ]);
        }
      }
    })
    .state("login-2", {
      url: "/login-2",
      data: {
        cssClasses: [
          "login-page-2"
        ]
      },
      templateUrl: "views/login-2.tpl.html",
      resolve: {
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/login-2.min.css"
          ]);
        }
      }
    })
    .state("login-3", {
      url: "/login-3",
      data: {
        cssClasses: [
          "login-page-3"
        ]
      },
      templateUrl: "views/login-3.tpl.html",
      resolve: {
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/login-3.min.css"
          ]);
        }
      }
    })
    .state("password-1", {
      url: "/password",
      data: {
        cssClasses: [
          "login-page-1"
        ]
      },
      templateUrl: "views/password-1.tpl.html",
      resolve: {
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/login-1.min.css"
          ]);
        }
      }
    })
    .state("password-2", {
      url: "/password-2",
      data: {
        cssClasses: [
          "login-page-2"
        ]
      },
      templateUrl: "views/password-2.tpl.html",
      resolve: {
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/login-2.min.css"
          ]);
        }
      }
    })
    .state("password-3", {
      url: "/password-3",
      data: {
        cssClasses: [
          "login-page-3"
        ]
      },
      templateUrl: "views/password-3.tpl.html",
      resolve: {
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/login-3.min.css"
          ]);
        }
      }
    })
    .state("root.contacts", {
      url: "/contacts",
      controller: "ContactCtrl",
      templateUrl: "views/contacts.tpl.html",
      resolve: {
        loadDatatables: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/contacts.min.css",
            "js/contacts.js"
          ]);
        }
      }
    })
    .state("mailbox", {
      abstract: true,
      templateUrl: "views/app.tpl.html",
    })
    .state("mailbox.mail-1", {
      url: "/mail",
      controller: "MailCtrl",
      data: {
        cssClasses: [
          "layout",
          "layout-header-fixed",
          "layout-sidebar-fixed",
          "mail-page"
        ]
      },
      templateUrl: "views/mail-1.tpl.html",
      resolve: {
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/mail-1.min.css",
            "js/mail-1.js"
          ]);
        }
      }
    })
    .state("mailbox.mail-2", {
      url: "/mail-2",
      controller: "MailCtrl",
      data: {
        cssClasses: [
          "layout",
          "layout-header-fixed",
          "inbox-page"
        ]
      },
      templateUrl: "views/mail-2.tpl.html",
      resolve: {
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/mail-2.min.css",
            "js/mail-2.js"
          ]);
        }
      }
    })
    .state("mailbox.compose", {
      url: "/compose",
      controller: "ComposeCtrl",
      data: {
        cssClasses: [
          "layout",
          "layout-header-fixed",
          "compose-page"
        ]
      },
      templateUrl: "views/compose.tpl.html",
      resolve: {
        loadTextAngular: function($ocLazyLoad) {
          return $ocLazyLoad.load("textAngular");
        },
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/compose.min.css",
            "js/compose.js"
          ]);
        }
      }
    })
    .state("root.messenger", {
      url: "/messenger",
      controller: "MessengerCtrl",
      data: {
        cssClasses: [
          "layout",
          "layout-header-fixed",
          "layout-sidebar-fixed",
          "messenger-page"
        ]
      },
      templateUrl: "views/messenger.tpl.html",
      resolve: {
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/messenger.min.css",
            "js/messenger.js",
          ]);
        }
      }
    })
    .state("root.profile", {
      url: "/profile",
      controller: "ProfileCtrl",
      data: {
        cssClasses: [
          "layout",
          "layout-header-fixed",
          "profile-page"
        ]
      },
      templateUrl: "views/profile.tpl.html",
      resolve: {
        loadWuMasonry: function($ocLazyLoad) {
          return $ocLazyLoad.load("wu.masonry");
        },
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/profile.min.css",
            "js/profile.js"
          ]);
        }
      }
    })
    .state("ecommerce", {
      abstract: true,
      templateUrl: "views/app.tpl.html",
    })
    .state("ecommerce.store", {
      url: "/store",
      controller: "StoreCtrl",
      data: {
        cssClasses: [
          "layout",
          "layout-header-fixed",
          "store-page"
        ]
      },
      templateUrl: "views/store.tpl.html",
      resolve: {
        loadNgSlider: function($ocLazyLoad) {
          return $ocLazyLoad.load("ngSlider");
        },
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/store.min.css",
            "js/store.js"
          ]);
        }
      }
    })
    .state("ecommerce.shopping-cart", {
      url: "/shopping-cart",
      templateUrl: "views/shopping-cart.tpl.html",
      resolve: {
        loadNgSlider: function($ocLazyLoad) {
          return $ocLazyLoad.load("ngSlider");
        },
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/shopping-cart.min.css"
          ]);
        }
      }
    })
    .state("ecommerce.shopping-cart.items", {
      url: "/items",
      templateUrl: "views/items.tpl.html",
    })
    .state("ecommerce.shopping-cart.delivery", {
      url: "/delivery",
      templateUrl: "views/delivery.tpl.html",
    })
    .state("ecommerce.shopping-cart.payment", {
      url: "/payment",
      templateUrl: "views/payment.tpl.html",
    })
    .state("ecommerce.shopping-cart.confirmation", {
      url: "/confirmation",
      templateUrl: "views/confirmation.tpl.html",
    })
    .state("ecommerce.product", {
      url: "/product",
      controller: "ProductCtrl",
      data: {
        cssClasses: [
          "layout",
          "layout-header-fixed",
          "product-page"
        ]
      },
      templateUrl: "views/product.tpl.html",
      resolve: {
        loadAngularFlexslider: function($ocLazyLoad) {
          return $ocLazyLoad.load("angular-flexslider");
        },
        loadFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/product.min.css",
            "js/product.js"
          ]);
        }
      }
    })
    .state("other-pages", {
      abstract: true,
      templateUrl: "views/app.tpl.html",
    })
    .state("other-pages.blank-page", {
      url: "/blank-page",
      templateUrl: "views/blank-page.tpl.html"
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
        loadLibraries: function($ocLazyLoad) {
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
        loadLibraries: function($ocLazyLoad) {
          return $ocLazyLoad.load([
            "css/errors.min.css"
          ]);
        }
      }
    })
    .state("other-pages.invoice", {
      url: "/invoice",
      templateUrl: "views/invoice.tpl.html"
    });
}

angular
  .module("elephant")
  .config(config)
  .run(["$rootScope", "$state", "$stateParams",
    function($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]);
angular.module("sara")
  .controller("AppCtrl", ["$q", "$scope", "$rootScope", "$http", "$location", '$scope',  function AppCtrl($q, $scope, $rootScope, $http, $location, $scope) {
    var app = this,
        def = ["layout", "layout-header-fixed"];

    
    $rootScope.serverURL = "#";

    $rootScope.serverMode = false;

    // app.navbar = {};
    // app.navbar.isCollapsed = true;
    // app.navbar.toggle = function toggle() {
    //   this.isCollapsed = !this.isCollapsed;
    // };
    
    app.search = {};
    app.search.isCollapsed = true;
    app.search.toggle = function toggle() {
      this.isCollapsed = !this.isCollapsed;
    };

    app.sidebar = {};
    app.sidebar.isCollapsed = false;
    app.sidebar.toggle = function toggle() {
      this.isCollapsed = !this.isCollapsed;
    };

    app.sidebar.xs = {};
    app.sidebar.xs.isCollapsed = true;
    app.sidebar.xs.toggle = function toggle() {
      this.isCollapsed = !this.isCollapsed;
    };

    $rootScope.$on("$stateChangeStart", function(evt, toState) {
      app.cssClasses = _.join(_.get(toState, "data.cssClasses", def), " ");
      app.sidebar.isFixed = _.includes(app.cssClasses, "layout-sidebar-fixed");
    });

    $scope.getClass = function (path) {
      return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }

  }]);
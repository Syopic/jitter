angular.module("ira")
  .controller("AppCtrl", ["$q", "$scope", "$rootScope", "$http", "$location", '$translate', '$scope',  function AppCtrl($q, $scope, $rootScope, $http, $location, $translate, $scope) {
    var app = this,
        def = ["layout", "layout-header-fixed"];

    
    $rootScope.serverURL = "http://ira.topos.org.ua/graphql";

    $rootScope.serverMode = true;

    app.navbar = {};
    app.navbar.isCollapsed = true;
    app.navbar.toggle = function toggle() {
      this.isCollapsed = !this.isCollapsed;
    };
    
    $scope.lang = "English";
    $scope.selectedLanguageEn = function(langu){
      $rootScope.selectedLanguage = "en"; 
      $scope.lang = "English";
      $scope.changeLanguage(langu);
      //$scope.translate();

     
    };
    $scope.selectedLanguageRu = function(langu){
      $rootScope.selectedLanguage = "ru"; 
      $scope.lang = "Русский";
      $scope.changeLanguage(langu);
    };
    
    //console.log("Ctr ", langu);
     
    $scope.changeLanguage = function(langu){
      $translate.use(langu); 
     }
    

    // //Выполняем перевод, если произошло событие смены языка
    // $scope.translate = function(){
    //   translationService.getTranslation($scope, $scope.selectedLanguage);
    // };
    // // Инициализация
     $rootScope.selectedLanguage = 'en';
    // $scope.translate();
   

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

   // $rootScope.selectedLanguage = 'ru';
    //$rootScope.allData;

    // this.loadData = function ($q, $http) {
    //   var deferred = $q.defer();
    //   $http.get('data/data.json').then(function (data) {
    //       deferred.resolve(data);
    //       console.log(data);
    //   });
    //   return deferred.promise;
    // }

  }]);
var app = angular.module("sara");
app.factory('DataFactory', ['$rootScope', "$http", function ($rootScope, $http) {
    var service = {
        getRegionsData: function(disease) {
            var jsonUrl = "data/HIV.json";
            switch (disease) {
                case "Malaria": jsonUrl = "data/Malaria.json"; break;
                case "TB": jsonUrl = "data/TB.json"; break;
                case "HIV": jsonUrl = "data/HIV.json"; break;
            }
            return $http.get(jsonUrl);
        }
    }

    $rootScope.$on("savestate", service.SaveState);
    $rootScope.$on("restorestate", service.RestoreState);

    return service;
}]);
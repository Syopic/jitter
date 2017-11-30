var app = angular.module("sara");
app.factory('DataFactory', ['$rootScope', "$http", function ($rootScope, $http) {
    $rootScope.serverMode = true;
    //$rootScope.serverURL = "http://localhost:27017/";
    $rootScope.serverURL = "https://pacific-taiga-24911.herokuapp.com/";
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    var service = {
        getRegionsData: function(params) {
            if ($rootScope.serverMode) {
                var requestURL = $rootScope.serverURL + "getData/" + params.disease + "/" + params.type + "/" + params.country + "/" + params.year;
                return $http.get(requestURL);
            } else {
                var jsonUrl = "data/HIV2.json";
                switch (params.disease) {
                    case "Malaria": jsonUrl = "data/Malaria2.json"; break;
                    case "TB": jsonUrl = "data/TB2.json"; break;
                    case "HIV": jsonUrl = "data/HIV2.json"; break;
                }
                return $http.get(jsonUrl);
            }
        },
        sendRegionsData: function(data) {
            var postData = {};
            postData.data = data;
            var requestURL = $rootScope.serverURL + "saveData";
            return $http.post(requestURL, data);
        }
    }

    $rootScope.$on("savestate", service.SaveState);
    $rootScope.$on("restorestate", service.RestoreState);

    return service;
}]);
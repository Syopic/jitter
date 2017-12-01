var app = angular.module("sara");
app.factory('DataFactory', ['$rootScope', "$http", function ($rootScope, $http) {
    $rootScope.serverMode = true;
    //$rootScope.serverURL = "http://localhost:27017/";
    $rootScope.serverURL = "https://pacific-taiga-24911.herokuapp.com/";
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    var service = {
        getContinents: function() {
            if ($rootScope.serverMode) {
                var requestURL = $rootScope.serverURL + "getContinents";
                return $http.get(requestURL);
            } else {
                return $http.get("data/local/getContinents.json");
            }
        },
        getCountries: function(country) {
            if ($rootScope.serverMode) {
                var requestURL = $rootScope.serverURL + "getCountries/" + country;
                return $http.get(requestURL);
            } else {
                return $http.get("data/local/" + country + ".json");
            }
        },
        getRegions: function(params) {
            if ($rootScope.serverMode) {
                var requestURL = $rootScope.serverURL + "getData/" + params.disease + "/" + params.type + "/" + params.country + "/" + params.year;
                return $http.get(requestURL);
            } else {
                return $http.get("data/local/" + params.disease + ".json");
            }
        },
        postRegions: function(data) {
            var body = "data=" + JSON.stringify(data);
            var requestURL = $rootScope.serverURL + "saveData";
            return $http.post(requestURL, body);
        },
        getHFATypes: function() {
            if ($rootScope.serverMode) {
                var requestURL = $rootScope.serverURL + "getHFATypes";
                return $http.get(requestURL);
            } else {
                return $http.get("data/local/getHFATypes.json");
            }
        },
        getTemplate: function(param) {
            var xlsxUrl = "data/templates/" + param + ".xlsx";
            return $http.get(xlsxUrl, {responseType: "arraybuffer"});
        }
    }

    $rootScope.$on("savestate", service.SaveState);
    $rootScope.$on("restorestate", service.RestoreState);

    return service;
}]);
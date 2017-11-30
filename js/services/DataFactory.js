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
                var jsonUrl = "data/HIV.json";
                switch (params.disease) {
                    case "Malaria": jsonUrl = "data/Malaria.json"; break;
                    case "TB": jsonUrl = "data/TB.json"; break;
                    case "HIV": jsonUrl = "data/HIV.json"; break;
                }
                return $http.get(jsonUrl);
            }
        },
        sendRegionsData: function(data) {
            var body = "data=" + JSON.stringify(data);
            var requestURL = $rootScope.serverURL + "saveData";
            return $http.post(requestURL, body);
        },
        getTemplate: function(disease) {
            var xlsxUrl = "data/templates/SARA_" + disease + ".xlsx";
            return $http.get(xlsxUrl, {responseType: "arraybuffer"});
        },
    }

    $rootScope.$on("savestate", service.SaveState);
    $rootScope.$on("restorestate", service.RestoreState);

    return service;
}]);
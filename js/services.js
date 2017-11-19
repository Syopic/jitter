var app = angular.module("ira");
app.factory('DataService', ['$rootScope', "$http", function ($rootScope, $http) {
    var service = {
        getRegionsAll: function (postDetail) {
            var postData = '{"query":"{ regionsAll { id, name, code, districtSet { id } } } ","variables":null,"operationName":""}';
            
             return $http.post($rootScope.serverURL, postData, {withCredentials: false, headers:{'Content-Type': 'application/json'}})
             .then(
                 function(response){
                     console.log(response.data.data);
                 }, 
                 function(response){
                     console.log("Error: " + response);
                 }
              );
        },

        getFacilityData: function (params) {
            var request = '{facilitiesCount facilitiesPagedCount(text: "' + params.text + '", offset: ' + params.start + ', limit: ' + params.limit + ', orderby: "' + params.orderby + '") facilitiesPaged(text: "' + params.text + '", offset: ' + params.start + ', limit: ' + params.limit + ', orderby: "' + params.orderby + '") { id, name, village, services { status, serviceType, controllingAgency { name } },  district { name, region { name } }, contactName, contactPhones, contactEmails, cluster { name } } }';
            var postData = '{"query":"' + request + '","variables":null,"operationName":""}';
            var r= {};
            r.operationName = null;
            r.query = request;
            r.variables = null;
            return $http.post($rootScope.serverURL, r, {withCredentials: false, headers:{'Content-Type': 'application/json'}});
        },

        getFacilityMapData: function (params) {
            var request = '{facilitiesByDistrictName(name: "' + params.text + '") { id, location, services{serviceType} } }';
            var postData = '{"query":"' + request + '","variables":null,"operationName":""}';
            var r= {};
            r.operationName = null;
            r.query = request;
            r.variables = null;
            return $http.post($rootScope.serverURL, r, {withCredentials: false, headers:{'Content-Type': 'application/json'}});
        },

        getFacilityById: function (params) {
            var request = '{facilityById(id: ' + params.id + ')  { name, village, contactName }} ';
            var postData = '{"query":"' + request + '","variables":null,"operationName":""}';
            var r= {};
            r.operationName = null;
            r.query = request;
            r.variables = null;
            return $http.post($rootScope.serverURL, r, {withCredentials: false, headers:{'Content-Type': 'application/json'}});
        }

    }

    $rootScope.$on("savestate", service.SaveState);
    $rootScope.$on("restorestate", service.RestoreState);

    return service;
}]);
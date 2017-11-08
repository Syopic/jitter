var app = angular.module("ira");
app.factory('dataService', ['$rootScope', "commonData", "boundsData", function ($rootScope, commonData, boundsData) {
  
      var service = {
  
          markersDict : {
            "Central Hospital": "marker_hospital.png",
            "District Hospital": "marker_hospital.png",
            "Health Centre": "marker_health_center.png",
            "Clinic": "marker_clinic.png",
            "Maternity": "marker_maternity.png",
            "Other Hospital": "marker_hospital.png",
            "Rural/Community Hospital": "marker_hospital.png",
            "Dispensary": "marker_dispensary.png",
            "Health Post": "marker_health_post.png"
          },
  
          getFacilityData: function () {
              sessionStorage.userService = angular.toJson(service.model);
          },
  
          RestoreState: function () {
              service.model = angular.fromJson(sessionStorage.userService);
          }
      }
  
      $rootScope.$on("savestate", service.SaveState);
      $rootScope.$on("restorestate", service.RestoreState);
  
      return service;
  }]);
angular.module('ira').service("StoreService", ["$q", "$timeout", "$filter",
  function StoreService($q, $timeout, $filter) {
    this.facilityTypes = {
      "Central Hospital": {
        icon: "marker_hospital.png"
      },
      "District Hospital": {
        icon: "marker_hospital.png"
      },
      "Health Centre": {
        icon: "marker_health_center.png"
      },
      "Clinic": {
        icon: "marker_clinic.png"
      },
      "Maternity": {
        icon: "marker_maternity.png"
      },
      "Other Hospital": {
        icon: "marker_hospital.png"
      },
      "Rural/Community Hospital": {
        icon: "marker_hospital.png"
      },
      "Dispensary": {
        icon: "marker_dispensary.png"
      },
      "Health Post": {
        icon: "marker_health_post.png"
      }
    },

    this.getMapBounds = function getMapBounds() {
      var deferred = $q.defer();
      $http.get('data/bounds.json').then(function (data) {
        deferred.resolve({
          getData: function () {
            return data.data;
          }
        });
      });
      return deferred.promise;
    },

    this.getAreaIdByGeoId = function getAreaIdByGeoId(data, geoId) {
      var result = 0;
      angular.forEach(data, function(area, key) {
        if (area.geoId == geoId) {
          result = area.id;
        }
      });
      //var found = $filter('filter')(data, {geoId: id}, true);
      return result;
    }
  }
]);

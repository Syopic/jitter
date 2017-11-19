angular.module('ira').service("StoreService", ["$q", "$timeout", "$filter",
  function StoreService($q, $timeout, $filter) {
    this.facilityTypes = {
      "HC": {
        name: "Health Centre",
        icon: "marker_health_center.png",
        color: "#cd6062"
      },
      "VC": {
        name: "Village Clinic",
        icon: "marker_clinic.png",
        color: "#6293c1"
      },
      "O": {
        name: "Outreach",
        icon: "marker_maternity.png",
        color: "#599259"
      },
      "H": {
        name: "Hospital",
        icon: "marker_hospital.png",
        color: "7b6a5f"
      },
      "D": {
        name: "Dispensary",
        icon: "marker_dispensary.png",
        color: "#a37db9"
      },
      "HP": {
        name: "Health Post",
        icon: "marker_health_post.png",
        color: "#feb250"
      }
    },

    this.getFacilityTypeParam = function getFacilityTypeParam(param) {
      var result = ["Show All"];
      angular.forEach(this.facilityTypes, function(type, key) {
          result.push(type[param])
      });
      return result;
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
      return result;
    },

    this.getAreaCollection = function getAreaCollection(data) {
      var result = [];
      for (var i = 0; i< 29; i++) {
        result[i] = data[i].name;
      }
      return result;
    },

    this.getCaseCollection = function getCaseCollection() {
      var result = [
        "TB Registarion Facilitis",
        "GenXpert",
        "TB Case Notification Rate Per 100000",
        "Percentage of all facilities offering screening and referral for TB diagnosis",
        "Percentage of all facilities that have  functional TB smear microscopy ",
        "Percentage of all facilities that provide diagnosis of TB by using sputum smear",
        "Percentage of facilities that provide diagnosis of TB by using X-ray",
        "Percentage of facilities that provide diagnosis of TB based on clinical symptoms",
       /// "Percent of TB cases diagnosed out of Presumed cases referred from Community ",
        "Percent of all facilities offering HIV testing and counselling",
        "Percent of all facilities offering ART prescription or ART follow-up services",
        "Percent of all facilities that offering TB or HIV diagnosis services or treatment",
        "Percent of all facilities that offering TB and HIV diagnosis services or treatment"
      ];
      
      return result;
    },

    this.getCaseCollectionDashboard = function getCaseCollectionDashboard() {
      var result = [
        "Percentage of all facilities offering screening and referral for TB diagnosis",
        "Percent of all facilities offering any TB diagnosis services",
        "Percentage of all facilities that provide diagnosis of TB by using sputum smear",
        "Percentage of facilities that provide diagnosis of TB by using X-ray",
        "Percentage of facilities that provide diagnosis of TB by both sputum and X-ray",
        "Percentage of facilities that provide diagnosis of TB based on clinical symptoms",
      ];
      
      return result;
    },

    this.getColor = function getColor(grades, d) {
      d *= 1.1;
      return  d > grades[6] ?   '#BD0026' :
              d > grades[5] ?   '#E31A1C' :
              d > grades[4] ?   '#FC4E2A' :
              d > grades[3] ?   '#FD8D3C' :
              d > grades[2] ?   '#FEB24C' :
              d > grades[1] ?   '#FED976' :
                                '#FFEDA0' ;
    },

    this.getStatByDistrictName = function getStatByDistrictName(data, name) {
      var result = 0;
      angular.forEach(data, function(area, key) {
        if (area.name == name) {
          result = area.id;
        }
      });
      return result;
    },

    this.getDataByCase = function getDataByCase(data, cases){
      var dataCollection = [];
      var idCase = cases;
      angular.forEach(data, function(cases, key) {
        if(cases.District != "Malawi"){
        this.push(cases[idCase]);
      }
      }, dataCollection);
      return dataCollection;
    },
    this.getDataByArea = function getDataByArea(data, cases, area){
      var result = [];
      var region = "Region";
      angular.forEach(data, function(value, key) {
       if(value[region] == area){
         this.push(value[cases]);
        }
       }, result);
       return result;
      
    
    return result;
    }
  }
]);

angular.module('ira').service("StoreService", ["$q", "$timeout", "$filter",
  function StoreService($q, $timeout, $filter) {
    this.facilityTypes = {
      "Central Hospital": {
        icon: "marker_hospital.png",
        color: ""
      },
      "District Hospital": {
        icon: "marker_hospital.png",
        color: ""
      },
      "Health Centre": {
        icon: "marker_health_center.png",
        color: "#ff0000"
      },
      "Village Clinic": {
        icon: "marker_clinic.png",
        color: "#4c97e4"
      },
      "Outreach": {
        icon: "marker_maternity.png",
        color: "#5ab21a"
      },
      "Hospital": {
        icon: "marker_hospital.png",
        color: "#00aa90"
      },
      "Rural/Community Hospital": {
        icon: "marker_hospital.png",
        color: ""
      },
      "Dispensary": {
        icon: "marker_dispensary.png",
        color: "#ab58ce"
      },
      "Health Post": {
        icon: "marker_health_post.png",
        color: "#ffa800"
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

    this.getFacilityTypes = function getFacilityTypes() {
      var result = [
        "Show All",
        "Village Clinic",
        "Outreach",
        "Dispensary",
        "Hospital",
        "Health Centre",
        "Health Post"
      ];
      
      return result;
    },

    this.getFacilitColors = function getFacilitColors() {
      var result = [
        "#ffffff",
        "#4c97e4",
        "#5ab21a",
        "#ab58ce",
        "#00aa90",
        "#ff0000",
        "#ffa800"
      ];
      
      return result;
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
        var value = cases[idCase];
        var fix = value.toFixed(2);
        this.push(fix);
      }, dataCollection);
      return dataCollection;
    },


    this.getColorByName = function getColorByName(name) {
      var result = '#ffffff';
      switch (name) {
          case "Nothern": 
              result = '#f61111';
              break;
          case "Central": 
              result = '#f9c90a';
              break;
          case "Southern": 
              result = '#24c665';
              break;

      }
      return result;
    },


    this.getColorByParam = function getColorByParam(data, caseValue, areaName) {
      var minValue = 100000000;
      var maxValue = 0;
      var currentValue = 0;
      var colors = ['#E5B800', '#E2B100', '#DFAA00', '#DCA300', '#D99C00', '#D69500', '#D38E00', '#D08700', '#CD8000', '#CA7900', '#C77200', '#C46B00', '#C16400', '#BF5E00'];

      angular.forEach(data, function(area, key) {
        minValue = Math.min(minValue, area[caseValue]);
        maxValue = Math.max(maxValue, area[caseValue]);
        if (key == areaName) {
          currentValue = area[caseValue];
        }
      });
      var step = (maxValue - minValue) / 28;

      var counter = 0;
      for (var i = 0; i < 29; i++) {
        if (minValue > currentValue && minValue <= (currentValue + step)) {
          break;
        }
        minValue += step;
        counter ++;
      }

      console.log("step: " + step + " counter: " + counter);

     
      return colors[Math.ceil(counter / 2)];
    }
  }
]);

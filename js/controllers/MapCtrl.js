angular.module('sara').controller('MapCtrl', function ($scope, $timeout, ServiceData, $window, $interval) {
  var cGrades = [];

  $scope.isMapVisible = true;
  $scope.selectedIndicator;
  $scope.selectedRegion;
  $scope.mapData;

  var bounds = [];


  var map = L.map('map', {
    doubleClickZoom: false,
    zoomControl: false,
    tap: false
  })


  var mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // map info
  var info = L.control({ position: 'bottomleft' });
  info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'mapinfo'); // create a div with a class "info"
    this.update();
    return this._div;
  };

  info.update = function (props) {
    /*if (props) {
      var value = $scope.data[0][props.id];
      
      this._div.innerHTML = '<h4>' + props.name + '</h4>' + $scope.selectIndicator.name + ': <b>' + value.toFixed(2) + '</b>';
    } else {
      this._div.innerHTML = $scope.selectIndicator.name;
    }*/
  };

  info.addTo(map);

  mainLayer.setOpacity(0.4);

  var legend = L.control({ position: 'topright' });


  function loadGeoJson(country) {
    $timeout(function () {
      $.getJSON('data/geojson/' + country + '.json', function (data) {
        geojson = L.geoJson(data, {
          clickable: true,
          style: style,
          onEachFeature: onEachFeature
        }).addTo(map);
        bounds = data.bounds;
        updateMap(data.bounds);
      })
        .done(function () {
          $scope.isMapVisible = true;
        })
        .fail(function () {
          $scope.isMapVisible = false;
          console.log("MAp for this countri is not avaliable");
        })
    })
  }

  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: highlightFeature
    });
  }

  function highlightFeature(e) {
    var layer = e.target;
    info.update(layer.feature);
    layer.setStyle({
      color: '#1a78c2',
      weight: 4,
      opacity: 1,
      fillOpacity: 0.4
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  function resetHighlight(e) {
    var layer = e.target;
    geojson.resetStyle(e.target);
    info.update();
  }

  function updateMap() {
    map.fitBounds([[bounds[1], bounds[0]], [bounds[3], bounds[2]]]);
    
    // legend
    var minValue = Infinity;
    var maxValue = -Infinity;
    cGrades = [];
    angular.forEach($scope.mapData, function (value, key) {

      minValue = Math.min(minValue, value.value);
      maxValue = Math.max(maxValue, value.value);

    });
    var step = (maxValue - minValue) / 7;
    for (var i = 0; i < 7; i++) {
      cGrades[i] = (i * step + minValue);
    }

    legend.onAdd = function (map) {
      var div;
      div = L.DomUtil.create('div', 'maplegendinfo maplegend'),
        grades = cGrades,
        labels = [];

      for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
          '<i style="background:' + ServiceData.getColor(grades, grades[i + 1] ) + '; border-radius: 3px; border: 1px solid; border-color: white;"></i> ' +
          grades[i] + (grades[i + 1] ? ' &ndash; ' + grades[i + 1] + '<br>' : '+');
      }
      return div;
    };

    legend.addTo(map);
    geojson.setStyle(style);
    
  }

  loadGeoJson($scope.country);

  function style(feature) {
    var val = 0
    if ($scope.mapData) {
      val = $scope.mapData.filter(o => o.name == feature.properties.name)[0];
      if (val) val = val.value;
    }
    return {
      color: '#fff',
      weight: 2,
      fillColor: ServiceData.getColor(cGrades, Number(val)),
      fill: true,
      opacity: 1,
      fillOpacity: 0.8,
    };
  }

  angular.element($window).bind('resize', function () {
    var update = function () {
      updateMap();
    };
    $interval(updateMap, 500, 1);
  });



  $scope.$watch('selectedIndicator', function () {
    if ($scope.selectedIndicator) {
      var obj = $scope.ind.filter(o => o.name == $scope.selectedIndicator.name)[0];
      $scope.mapData = [];

      angular.forEach($scope.Data.regions, function (value, key) {
        if (value.indexes[obj.index].value == null) {
          $scope.mapData.push(0)
        } else {
          $scope.mapData.push({ name: value.name, value: Number(value.indexes[obj.index].value) });
        }
      })
      updateMap();
    }
  });



});

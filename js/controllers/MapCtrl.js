angular.module('sara').controller('MapCtrl', function ($scope, $timeout, ServiceData, $window, $interval) {
  $scope.cGrades = [];

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


  var mainLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);


  var info = L.control({ position: 'topright' });
  
  info.onAdd = function (map) {
      this._div = L.DomUtil.create('div', 'mapinfo'); // create a div with a class "info"
      this.update();
      return this._div;
  };

  info.update = function (props) {
    if (props) {
      this._div.innerHTML = 
      '<h4>' + props.properties.name + '</h4>' + 
      '<b>' + $scope.selectedIndicator.name + '</b>: ' + getValueByName(props.properties.name) + '<br>';
      // '</b><br>Facilities available: <b>' + $scope.pointData.length + '</b>';
    } else {
      this._div.innerHTML = '<b>' + $scope.selectedIndicator.name + '</b>';
    }
  };

  info.addTo(map);

  mainLayer.setOpacity(0.2);

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
      click: selectFeature
    });
  }

  $scope.selectedLayer = null;
  function selectFeature(e) {
    //if ($scope.selectedLayer == e.target;)
    if ($scope.selectedLayer) {
      geojson.resetStyle($scope.selectedLayer);
    }
    $scope.selectedLayer = e.target;
    $scope.selectedRegion = $scope.labels.filter(o => o == $scope.selectedLayer.feature.properties.name)[0];
    setLayerStyle(e.target, true);
  }

  function highlightFeature(e) {
    setLayerStyle(e.target, e.target == $scope.selectedLayer);
  }

  function setLayerStyle(layer, isSelect = false) {
    layer.setStyle({
      color: '#ff8b46',
      weight: 3,
      opacity: isSelect ? 1 : 0,
      fillOpacity: isSelect ? 0.8 : 0.5,
    });
    info.update(layer.feature);
    if (isSelect && !L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  function resetHighlight(e) {
    var layer = e.target;
    if ($scope.selectedLayer && $scope.selectedLayer == layer) {
      setLayerStyle($scope.selectedLayer, true);
      info.update($scope.selectedLayer.feature);
    } else {
      geojson.resetStyle(e.target);
      info.update();
      setLayerStyle($scope.selectedLayer, true);
      info.update($scope.selectedLayer.feature);
    }
  }

  function updateMap() {
    map.fitBounds([[bounds[1], bounds[0]], [bounds[3], bounds[2]]]);
    
    // legend
    var minValue = Infinity;
    var maxValue = -Infinity;
    $scope.cGrades = [];
    angular.forEach($scope.mapData, function (value, key) {

      minValue = Math.min(minValue, value.value);
      maxValue = Math.max(maxValue, value.value);

    });
    var step = (maxValue - minValue) / 7;
    for (var i = 0; i < 7; i++) {
      $scope.cGrades[i] = {value: (i * step + minValue), color:ServiceData.gColors[i]};
    }

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
      fillColor: ServiceData.getColor($scope.cGrades, Number(val)),
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
    onLoadUpdate();
    $scope.selectedLayer = null;
    if ($scope.selectedLayer)
    info.update($scope.selectedLayer.feature);
  });

  $scope.$watch('Data.regions', function () {
    onLoadUpdate()
  });

  function getValueByName(indexName) {
    var obj = $scope.mapData.filter(o => o.name == indexName)[0];
    if (obj) return obj.value; else return "-";
  }

  function onLoadUpdate() {
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
      if ($scope.mapData.length) {
        updateMap();
      }
    }
  }
    
  $scope.$watch('selectedIndicator', function () {

    $scope.elementLegend = ServiceData.getLegend($scope.disease, $scope.selectedIndicator.index);
    $scope.mapLegend = "[" +  $scope.selectedIndicator.code + "] " + $scope.elementLegend + " " + $scope.selectedIndicator.name;
  })

});

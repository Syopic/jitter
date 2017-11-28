function sideNavigation($timeout) {
  return function(scope, element) {
    $timeout(function() {
      element.metisMenu({
        activeClass: 'open',
        collapseClass: 'collapse',
        collapseInClass: 'in',
        collapsingClass: 'collapsing'
      });
    });
  };
}

function customScrollbar() {
  return {
    restrict: 'A',
    scope: {
      color: '@',
      distance: '@',
      height: '@',
      opacity: '@',
      position: '@',
      scrollTo: '@',
      size: '@',
      start: '@',
      touchScrollStep: '@',
      wheelStep: '@',
      width: '@'
    },
    link: function(scope, element) {
      element.slimscroll({
        class: 'custom-scrollbar',
        barClass: 'custom-scrollbar-gripper',
        railClass: 'custom-scrollbar-track',
        wrapperClass: 'custom-scrollable-area',
        color: _.get(scope, 'color', '#000'),
        distance: _.get(scope, 'distance', '5px'),
        height: _.get(scope, 'height', '100%'),
        opacity: _.get(scope, 'opacity', 0.3),
        position: _.get(scope, 'position', 'right'),
        scrollTo: _.get(scope, 'scrollTo'),
        size: _.get(scope, 'size', '6px'),
        start: _.get(scope, 'start', 'top'),
        touchScrollStep: _.get(scope, 'touchScrollStep', 50),
        wheelStep: _.get(scope, 'wheelStep', 10),
        width: _.get(scope, 'width', '100%')
      });
    }
  };
}

function mdFormControl() {
  return {
    restrict: 'AC',
    scope: {},
    link: function(scope, element, attrs) {
      var checkValue = function() {
        var hasValue = ((element.val() || '').length > 0);
        element.parent().toggleClass('has-value', hasValue);
      };

      element.bind('focus', function(evt) {
        element.parent().addClass('is-focused');
      });

      element.bind('blur', function(evt) {
        element.parent().removeClass('is-focused');
      });

      element.bind('change', checkValue);

      checkValue();
    }
  };
}

function vectorMap() {
  return {
    restrict: 'A',
    scope: {
      options: '=?',
    },
    link: function(scope, element, attrs) {
      element.vectorMap(angular.merge({}, {
        backgroundColor: "null",
        color: "#fff",
        enableZoom: "true",
        hoverOpacity: "0.7",
        map: "world_en",
        scaleColors: ["#0288d1", "#016389"],
        selectedColor: "#757575",
        showTooltip: "true",
      }, scope.options));
    }
  };
}

function fitHeight() {
  return {
    restrict: 'A',
    scope: {
      offset: '=?',
    },
    link: function(scope, element, attrs) {
      var offset = parseInt(scope.offset) || 0,
        $window = $(window);

      $window.on('resize', function(evt) {
        element.css("height", ($(window).height() - offset) + "px");
        element.css("min-height", ($(window).height() - offset) + "px");
      }).trigger('resize');
    }
  }
}

angular
  .module("sara")
  .directive('sideNavigation', sideNavigation)
  .directive('customScrollbar', customScrollbar)
  .directive('mdFormControl', mdFormControl)
  .directive('vectorMap', vectorMap)
  .directive('fitHeight', fitHeight)
  .directive("fileread", [function () {
    return {
    scope: {
      opts: '=',
      wb:   '='
    },
      link: function ($scope, $elm, $attrs) {
      $elm.on('change', function (changeEvent) {
        var reader = new FileReader();

        reader.onload = function (evt) {
          $scope.$apply(function () {
            var data = evt.target.result;

            var workbook = XLSX.read(data, {type: 'binary'});
            var headerNames = XLSX.utils.sheet_to_json(   workbook.Sheets[workbook.SheetNames[0]], { header: 2 })[0];

            var result = {};
            workbook.SheetNames.forEach(function(sheetName) {
              var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header:1});
              if(roa.length) result[sheetName] = roa;
            });
            
            var sheet = workbook.Sheets[workbook.SheetNames[0]]; // get the first worksheet
            
            var oldtext = "District";
            var newtext = "7777777777";
            
            /* loop through every cell manually */
            var range = XLSX.utils.decode_range(sheet['!ref']); // get the range
            for(var R = range.s.r; R <= range.e.r; ++R) {
              for(var C = range.s.c; C <= range.e.c; ++C) {
                /* find the cell object */
                var cellref = XLSX.utils.encode_cell({c:C, r:R}); // construct A1 reference for cell
                if(!sheet[cellref]) continue; // if cell doesn't exist, move on
                var cell = sheet[cellref];
                
                /* if the cell is a text cell with the old string, change it */
                if(!(cell.t == 's' || cell.t == 'str')) continue; // skip if cell is not text
                if(cell.v === oldtext) cell.v = newtext; // change the cell value
                //console.log(cell.v);
              }
            }
            $scope.opts = result;
            $scope.wb = workbook;
            //XLSX.writeFile(workbook, 'newfile.xlsx');



           //console.log(result);
            
            //var data = XLSX.utils.sheet_to_row_object_array( workbook.Sheets[workbook.SheetNames[0]]);
            //console.log(data);
            /*
            $scope.opts.columnDefs = [];
            headerNames.forEach(function (h) {
              $scope.opts.columnDefs.push({ field: h });
            });


            $elm.val(null);*/
          });
        };

        reader.readAsBinaryString(changeEvent.target.files[0]);
      });
     }
    }
    }]);

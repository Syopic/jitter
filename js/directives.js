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
        scaleColors: ["#0ac29d", "#067d5d"],
        selectedColor: "#555",
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
  .module("elephant")
  .directive('sideNavigation', sideNavigation)
  .directive('customScrollbar', customScrollbar)
  .directive('mdFormControl', mdFormControl)
  .directive('vectorMap', vectorMap)
  .directive('fitHeight', fitHeight)

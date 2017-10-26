angular.module("elephant")
  .animation('.sidenav', function() {
    return {
      beforeAddClass: function(element, className, done) {
        element.addClass(className);
        TweenLite.fromTo(element, 1, {
          opacity: 0
        }, {
          opacity: 1,
          ease: Power2.easeInOut
        })
      },
      beforeRemoveClass: function(element, className, done) {
        element.removeClass(className);
        TweenLite.fromTo(element, 1, {
          opacity: 0
        }, {
          opacity: 1,
          ease: Power2.easeInOut
        })
      }
    };
  });
'use strict';

angular.module('gk.product')
  .directive('gkProduct', function() {
    return {
      template: '<p>Hello World!</p>',
      link: function($scope, $element, $attrs) {
        // linkFn
      }
    };
  });


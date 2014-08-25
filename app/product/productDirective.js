'use strict';

angular.module('gk.product')
  .directive('gkProduct', function() {

    return {
      templateUrl: 'product/gk-product.html',
      restrict: 'AE',
      transclude: true ,
      scope: {
        price: "="
      }
    };
  });


'use strict';

  angular.module('gk.main')
    .controller('MainController', function($scope, ProductFactory){
      $scope.pageClass = 'page-main';
      $scope.products = ProductFactory.getAllProducts();
    });

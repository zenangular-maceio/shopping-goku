'use strict';

angular.module('shoppingGoku', ['ngRoute']);

  // configure our routes
  angular.module('shoppingGoku')
    .config(function($routeProvider) {

      $routeProvider

      // route for the home page
      .when('/', {
        templateUrl : 'pages/home.html'
      })

      // route for the product show
      .when('/product/:id', {
        templateUrl : 'pages/product.html'
      })

      // route for the home page
      .when('/contact', {
        templateUrl : 'pages/contact.html'
      });


    });


'use strict';

angular.module('shoppingGoku', ['ngRoute', 'ngAnimate','gk.error','gk.contact', 'gk.product', 'gk.main']);

  // configure our routes
  angular.module('shoppingGoku')
    .config(function($routeProvider, $locationProvider) {

      $routeProvider

      // route for the home page
      .when('/', {
        templateUrl : 'main/page-main.html',
        controller: 'MainController'
      })

      // route for the product show
      .when('/product/:id', {
        templateUrl : 'product/page-product.html',
        controller: 'ProductController'
      })

      // route for the home page
      .when('/contact', {
        templateUrl : 'contact/page-contact.html',
        controller: 'ContactController'
      })

      .when('/404', {
        templateUrl : 'error/404.html',
        controller: 'ErrorController'
      })

      .otherwise({
        redirectTo : '/404'
      });

      // If we need to change and use HTML5 history mode
      // $locationProvider.html5Mode(true);

    });

  // Catching errors
  angular.module('shoppingGoku').run(['$rootScope','$location',function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
      //change this code to handle the error somehow
      $location.path('/404').replace();
    });
  }]);

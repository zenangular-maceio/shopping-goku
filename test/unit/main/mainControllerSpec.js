'use strict';


describe('Controller: Main', function() {
  var ctrl, scope;

  beforeEach(module('gk.main'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();

    ctrl = $controller('MainController', {
      $scope: scope
    });
  }));
});

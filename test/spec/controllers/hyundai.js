'use strict';

describe('Controller: HyundaiCtrl', function () {

  // load the controller's module
  beforeEach(module('openIdolWebApp'));

  var HyundaiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HyundaiCtrl = $controller('HyundaiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

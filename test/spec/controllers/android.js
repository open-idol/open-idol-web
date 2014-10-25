'use strict';

describe('Controller: AndroidCtrl', function () {

  // load the controller's module
  beforeEach(module('openIdolWebApp'));

  var AndroidCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AndroidCtrl = $controller('AndroidCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

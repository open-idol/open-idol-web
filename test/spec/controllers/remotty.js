'use strict';

describe('Controller: RemottyCtrl', function () {

  // load the controller's module
  beforeEach(module('openIdolWebApp'));

  var RemottyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RemottyCtrl = $controller('RemottyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Directive: emotionRectTrends', function () {

  // load the directive's module
  beforeEach(module('openIdolWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<emotion-rect-trends></emotion-rect-trends>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the emotionRectTrends directive');
  }));
});

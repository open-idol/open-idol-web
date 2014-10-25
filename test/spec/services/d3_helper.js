'use strict';

describe('Service: D3Helper', function () {

  // load the service's module
  beforeEach(module('openIdolWebApp'));

  // instantiate service
  var D3Helper;
  beforeEach(inject(function (_D3Helper_) {
    D3Helper = _D3Helper_;
  }));

  it('should do something', function () {
    expect(!!D3Helper).toBe(true);
  });

});

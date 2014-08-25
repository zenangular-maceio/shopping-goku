'use strict';

describe('Factory: ProductFactory', function() {
  var productFactory;

  beforeEach(module('gk.product'));

  beforeEach(inject(function(_ProductFactory_) {
    productFactory = _ProductFactory_;
  }));

  it('should do something', function() {
    expect(!!productFactory).toBeDefined();
  });

  it("should be a resource", function() {
    expect(typeof productFactory).toBe('object');
    expect(typeof productFactory.getAllProducts).toBe('function');
    expect(typeof productFactory.getProduct).toBe('function');
  });
});


'use strict';

describe('Factory: ProductService', function() {
  var productService;

  beforeEach(module('gk.product'));

  beforeEach(inject(function(_ProductService_) {
    productService = _ProductService_;
  }));

  it('should do something', function() {
    expect(!!productService).toBeDefined();
  });

  it("should be a resource", function() {
    expect(typeof productService).toBe('object');
    expect(typeof productService.getAllProducts).toBe('function');
    expect(typeof productService.getProduct).toBe('function');
  });
});


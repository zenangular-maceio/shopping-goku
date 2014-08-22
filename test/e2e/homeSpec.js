describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('/');

    var home = element(by.id('title'));

    expect(home.getText()).toEqual('Home');
  });
});


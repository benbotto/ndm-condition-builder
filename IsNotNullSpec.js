describe('IsNotNull test suite.', function() {
  'use strict';

  const IsNotNull = require('./IsNotNull');

  it('checks a basic comparison.', function() {
    let comp = new IsNotNull('firstName');
    expect(comp.condition).toEqual({$isnt: {firstName: ':firstName'}});
    expect(comp.params).toEqual({firstName: null});
  });
});


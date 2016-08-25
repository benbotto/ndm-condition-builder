describe('IsNull test suite.', function() {
  'use strict';

  const IsNull = require('./IsNull');

  it('checks a basic comparison.', function() {
    let comp = new IsNull('firstName');
    expect(comp.condition).toEqual({$is: {firstName: ':firstName'}});
    expect(comp.params).toEqual({firstName: null});
  });
});


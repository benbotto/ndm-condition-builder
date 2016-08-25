describe('Lt test suite.', function() {
  'use strict';

  const Lt = require('./Lt');

  it('checks a basic comparison.', function() {
    let comp = new Lt('firstName', 'Ben');
    expect(comp.condition).toEqual({$lt: {firstName: ':firstName'}});
    expect(comp.params).toEqual({firstName: 'Ben'});
  });
});


describe('Eq test suite.', function() {
  'use strict';

  const Eq = require('./Eq');

  it('checks a basic comparison.', function() {
    let comp = new Eq('firstName', 'Ben');
    expect(comp.condition).toEqual({$eq: {firstName: ':firstName'}});
    expect(comp.params).toEqual({firstName: 'Ben'});
  });
});


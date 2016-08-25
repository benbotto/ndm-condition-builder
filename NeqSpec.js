describe('Neq test suite.', function() {
  'use strict';

  const Neq = require('./Neq');

  it('checks a basic comparison.', function() {
    let comp = new Neq('firstName', 'Ben');
    expect(comp.condition).toEqual({$neq: {firstName: ':firstName'}});
    expect(comp.params).toEqual({firstName: 'Ben'});
  });
});


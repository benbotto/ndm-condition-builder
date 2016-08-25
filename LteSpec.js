describe('Lte test suite.', function() {
  'use strict';

  const Lte = require('./Lte');

  it('checks a basic comparison.', function() {
    let comp = new Lte('firstName', 'Ben');
    expect(comp.condition).toEqual({$lte: {firstName: ':firstName'}});
    expect(comp.params).toEqual({firstName: 'Ben'});
  });
});


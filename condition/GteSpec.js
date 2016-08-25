describe('Gte test suite.', function() {
  'use strict';

  const Gte = require('./Gte');

  it('checks a basic comparison.', function() {
    let comp = new Gte('firstName', 'Ben');
    expect(comp.condition).toEqual({$gte: {firstName: ':firstName'}});
    expect(comp.params).toEqual({firstName: 'Ben'});
  });
});


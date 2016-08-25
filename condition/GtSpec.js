describe('Gt test suite.', function() {
  'use strict';

  const Gt = require('./Gt');

  it('checks a basic comparison.', function() {
    let comp = new Gt('firstName', 'Ben');
    expect(comp.condition).toEqual({$gt: {firstName: ':firstName'}});
    expect(comp.params).toEqual({firstName: 'Ben'});
  });
});


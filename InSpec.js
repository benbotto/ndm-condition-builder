describe('In test suite.', function() {
  'use strict';

  const In = require('./In');

  it('checks a basic comparison.', function() {
    let comp = new In('firstName', 'Ben');
    expect(comp.condition).toEqual({$in: {firstName: ':firstName'}});
    expect(comp.params).toEqual({firstName: 'Ben'});
  });
});


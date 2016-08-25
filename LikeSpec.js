describe('Like test suite.', function() {
  'use strict';

  const Like = require('./Like');

  it('checks a basic comparison.', function() {
    let comp = new Like('firstName', 'Ben');
    expect(comp.condition).toEqual({$like: {firstName: ':firstName'}});
    expect(comp.params).toEqual({firstName: 'Ben'});
  });
});


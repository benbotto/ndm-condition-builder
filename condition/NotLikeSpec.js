describe('NotLike test suite.', function() {
  'use strict';

  const NotLike = require('./NotLike');

  it('checks a basic comparison.', function() {
    let comp = new NotLike('firstName', 'Ben');
    expect(comp.condition).toEqual({$notLike: {firstName: ':firstName'}});
    expect(comp.params).toEqual({firstName: 'Ben'});
  });
});


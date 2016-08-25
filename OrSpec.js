describe('Or test suite.', function() {
  'use strict';

  const Or = require('./Or');
  const Eq = require('./Eq');

  it('checks a basic or.', function() {
    let or = new Or();
    or
      .eq('age', 30)
      .neq('name', 'Ben', 'n');

    expect(or.condition).toEqual({
      $or: [
        {$eq:  {'age':  ':age'}},
        {$neq: {'name': ':n'}}
      ]
    });

    expect(or.params).toEqual({age: 30, n: 'Ben'});
  });

  it('checks an or with an existing condition.', function() {
    let or = new Or(new Eq('name', 'Ben'));

    expect(or.condition).toEqual({
      $or: [
        {$eq: {'name': ':name'}}
      ]
    });

    expect(or.params).toEqual({name: 'Ben'});
  });
});


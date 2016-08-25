describe('And test suite.', function() {
  'use strict';

  const And = require('./And');
  const Eq  = require('./Eq');

  it('checks a basic and.', function() {
    let and = new And();
    and
      .eq('age', 30)
      .neq('name', 'Ben', 'n');

    expect(and.condition).toEqual({
      $and: [
        {$eq:  {'age':  ':age'}},
        {$neq: {'name': ':n'}}
      ]
    });

    expect(and.params).toEqual({age: 30, n: 'Ben'});
  });

  it('checks an and with an existing condition.', function() {
    let and = new And(new Eq('name', 'Ben'));

    expect(and.condition).toEqual({
      $and: [
        {$eq: {'name': ':name'}}
      ]
    });

    expect(and.params).toEqual({name: 'Ben'});
  });
});


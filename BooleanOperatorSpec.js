describe('BooleanOperator test suite.', function() {
  'use strict';

  const BooleanOperator = require('./BooleanOperator');

  it('checks the boolean operators.', function() {
    let and = new BooleanOperator('$and');
    expect(and.condition).toEqual({$and: []});
    expect(and.params).toEqual({});

    let or = new BooleanOperator('$or');
    expect(or.condition).toEqual({$or: []});
    expect(or.params).toEqual({});

    expect(function() {
      new BooleanOperator('other');
    }).toThrowError('Invalid boolean operator: other.');
  });
});


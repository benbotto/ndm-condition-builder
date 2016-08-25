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

  it('checks the optional condition parameter with objects.', function() {
    let cond = {
      condition: {$eq:{firstName:':fname'}},
      params: {fname:'Jack'}
    };

    let and = new BooleanOperator('$and', cond);

    expect(and.condition).toEqual({$and: [{$eq: {firstName: ':fname'}}]});
    expect(and.params).toEqual({fname: 'Jack'});
  });

  it('checks the optional condition parameter with strings.', function() {
    let cond = {
      condition: '{"$eq":{"firstName":":fname"}}',
      params: '{"fname":"Jack"}'
    };

    let and = new BooleanOperator('$and', cond);

    expect(and.condition).toEqual({$and: [{$eq: {firstName: ':fname'}}]});
    expect(and.params).toEqual({fname: 'Jack'});
  });

  it('checks the optional condition with an unparsable string.', function() {
    expect(function() {
      let cond = {
        condition: '{"$eq"fname"}}',
        params: '{"fname":"Jack"}'
      };
      new BooleanOperator('$and', cond);
    }).toThrowError('Unexpected token f');

    expect(function() {
      let cond = {
        condition: '{"$eq":{"firstName":":fname"}}',
        params: '{"fname""Jack"}'
      };
      new BooleanOperator('$and', cond);
    }).toThrowError('Unexpected string');
  });

  it('checks the basic comparison functions.', function() {
    ['$eq', '$neq', '$lt', '$lte', '$gt', '$gte'].forEach(function(type) {
      let and = new BooleanOperator('$and');
      // Remove the '$' from type and call the corresponding method.
      and[type.substring(1)]('firstName', 'Jack', 'fname');

      expect(and.condition).toEqual({$and: [{[type]: {firstName: ':fname'}}]});
      expect(and.params).toEqual({fname: 'Jack'});
    });
  });

  it('checks the null comparison types.', function() {
    let and = new BooleanOperator('$and');

    and.isNull('firstName', 'fname');
    and.isNotNull('lastName', 'lname');

    expect(and.condition).toEqual({
      $and: [
        {$is:   {firstName: ':fname'}},
        {$isnt: {lastName:  ':lname'}}
      ]});
    expect(and.params).toEqual({fname: null, lname: null});
  });
});


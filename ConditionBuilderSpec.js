describe('ConditionBuilder test suite.', function()
{
  'use strict';

  var ConditionBuilder = require('./ConditionBuilder');
  var condBldr         = new ConditionBuilder();

  describe('comparison test suite.', function()
  {
    it('checks all the basic comparison types.', function()
    {
      ConditionBuilder.COMPARISON_TYPES.forEach(function(type)
      {
        // Remove the '$' from type and call the corresponding method.
        var cond = condBldr[type.substring(1)]('firstName', ':firstName');
        expect(JSON.stringify(cond)).toBe(`{"${type}":{"firstName":":firstName"}}`);
      });
    });

    it('checks an invalid condition type.', function()
    {
      expect(function()
      {
        condBldr.comparison('foo', 'bar', 'baz');
      }).toThrowError('Invalid comparison type: foo.');
    });
  });

  describe('null test suite.', function()
  {
    it('checks isNull.', function()
    {
      var cond = condBldr.isNull('firstName');
      expect(cond).toEqual({$is: {'firstName': null}});
    });

    it('checks isntNull.', function()
    {
      var cond = condBldr.isntNull('firstName');
      expect(cond).toEqual({$isnt: {'firstName': null}});
    });
  });

  describe('boolean test suite.', function()
  {
    it('checks that conditions must be supplied.', function()
    {
      expect(function()
      {
        condBldr.and();
      }).toThrowError('No conditions supplied.');
    });

    it('checks that null/undefined/empty conditions are ignored.', function() {
      var cond1 = condBldr.eq('firstName', ':firstName');
      var cond2 = condBldr.eq('lastName', ':lastName');
      var and   = condBldr.and(cond1, undefined, cond2, {});

      expect(and).toEqual({$and: [{$eq: {'firstName': ':firstName'}},
        {$eq: {'lastName': ':lastName'}}]});
    });

    it('checks the or condition.', function() {
      var cond1 = condBldr.eq('firstName', ':firstName');
      var cond2 = condBldr.eq('lastName', ':lastName');
      var or   = condBldr.or(cond1, undefined, cond2, {});

      expect(or).toEqual({$or: [{$eq: {'firstName': ':firstName'}},
        {$eq: {'lastName': ':lastName'}}]});
    });

    it('checks a single condition.', function() {
      var cond1 = condBldr.eq('firstName', ':firstName');
      var or   = condBldr.or(cond1);

      expect(or).toEqual({$or: [{$eq: {'firstName': ':firstName'}}]});
    });
  });
});


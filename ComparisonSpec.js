describe('Comparison test suite.', function() {
  'use strict';

  const Comparison = require('./Comparison');

  it('checks all the basic comparison types.', function() {
    Comparison.COMPARISON_TYPES.forEach(function(type) {
      let comp = new Comparison(type, 'firstName', 'Ben');

      expect(comp.condition).toEqual({[type]: {'firstName': ':firstName'}});
      expect(comp.params).toEqual({firstName: 'Ben'});
    });
  });

  it('checks an invalid comparison type.', function() {
    expect(function() {
      new Comparison('foo', 'bar', 'baz');
    }).toThrowError('Invalid comparison type: foo.');
  });

  it('checks an explicit parameter name.', function() {
    let comp = new Comparison('$eq', 'firstName', 'Ben', ':fname');
    expect(comp.condition).toEqual({$eq: {'firstName': ':fname'}});
    expect(comp.params).toEqual({fname: 'Ben'});

    // Colon (:) is optional.
    comp = new Comparison('$eq', 'firstName', 'Ben', 'fname');
    expect(comp.condition).toEqual({$eq: {'firstName': ':fname'}});
    expect(comp.params).toEqual({fname: 'Ben'});
  });
});


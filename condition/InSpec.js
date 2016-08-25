describe('In test suite.', function() {
  'use strict';

  const In = require('./In');

  it('checks a basic comparison.', function() {
    let comp = new In('firstName', ['Ben', 'Jack', 'Joe']);
    expect(comp.condition).toEqual({
      $in: {
        firstName: [':firstName0', ':firstName1', ':firstName2']
      }
    });
    expect(comp.params).toEqual({firstName0: 'Ben', firstName1: 'Jack', firstName2: 'Joe'});
  });
});


'use strict';

const Comparison = require('./Comparison');

class IsNotNull extends Comparison {
  /**
   * Create an isnt comparison.
   * @param column The column name (FQCN).
   */
  constructor(column) {
    super('$isnt', column, null);
  }
}

module.exports = IsNotNull;


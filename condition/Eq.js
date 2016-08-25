'use strict';

const Comparison = require('./Comparison');

class Eq extends Comparison {
  /**
   * Create an eq comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  constructor(column, val, paramName) {
    super('$eq', column, val, paramName);
  }
}

module.exports = Eq;


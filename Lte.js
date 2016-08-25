'use strict';

const Comparison = require('./Comparison');

class Lte extends Comparison {
  /**
   * Create an lte comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  constructor(column, val, paramName) {
    super('$lte', column, val, paramName);
  }
}

module.exports = Lte;


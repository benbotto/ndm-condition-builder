'use strict';

const Comparison = require('./Comparison');

class Lte extends Comparison {
  /**
   * Create an lte comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   */
  constructor(column, val) {
    super('$lte', column, val);
  }
}

module.exports = Lte;


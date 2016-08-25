'use strict';

const Comparison = require('./Comparison');

class Eq extends Comparison {
  /**
   * Create an eq comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   */
  constructor(column, val) {
    super('$eq', column, val);
  }
}

module.exports = Eq;


'use strict';

const Comparison = require('./Comparison');

class Gte extends Comparison {
  /**
   * Create an gte comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   */
  constructor(column, val) {
    super('$gte', column, val);
  }
}

module.exports = Gte;


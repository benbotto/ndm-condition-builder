'use strict';

const Comparison = require('./Comparison');

class In extends Comparison {
  /**
   * Create an in comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   */
  constructor(column, val) {
    super('$in', column, val);
  }
}

module.exports = In;


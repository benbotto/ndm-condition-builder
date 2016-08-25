'use strict';

const Comparison = require('./Comparison');

class NotLike extends Comparison {
  /**
   * Create an notLike comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   */
  constructor(column, val) {
    super('$notLike', column, val);
  }
}

module.exports = NotLike;


'use strict';

const Comparison = require('./Comparison');

class NotLike extends Comparison {
  /**
   * Create an notLike comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  constructor(column, val, paramName) {
    super('$notLike', column, val, paramName);
  }
}

module.exports = NotLike;


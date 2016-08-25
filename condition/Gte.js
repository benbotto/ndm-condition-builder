'use strict';

const Comparison = require('./Comparison');

class Gte extends Comparison {
  /**
   * Create an gte comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  constructor(column, val, paramName) {
    super('$gte', column, val, paramName);
  }
}

module.exports = Gte;


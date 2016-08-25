'use strict';

const Comparison = require('./Comparison');

class Gt extends Comparison {
  /**
   * Create an gt comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  constructor(column, val, paramName) {
    super('$gt', column, val, paramName);
  }
}

module.exports = Gt;


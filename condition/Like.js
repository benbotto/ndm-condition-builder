'use strict';

const Comparison = require('./Comparison');

class Like extends Comparison {
  /**
   * Create an like comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  constructor(column, val, paramName) {
    super('$like', column, val, paramName);
  }
}

module.exports = Like;


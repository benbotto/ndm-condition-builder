'use strict';

const Comparison = require('./Comparison');

class Like extends Comparison {
  /**
   * Create an like comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   */
  constructor(column, val) {
    super('$like', column, val);
  }
}

module.exports = Like;


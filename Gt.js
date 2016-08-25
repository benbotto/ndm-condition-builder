'use strict';

const Comparison = require('./Comparison');

class Gt extends Comparison {
  /**
   * Create an gt comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   */
  constructor(column, val) {
    super('$gt', column, val);
  }
}

module.exports = Gt;


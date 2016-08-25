'use strict';

const Comparison = require('./Comparison');

class Neq extends Comparison {
  /**
   * Create a neq comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   */
  constructor(column, val) {
    super('$neq', column, val);
  }
}

module.exports = Neq;


'use strict';

const Comparison = require('./Comparison');

class Neq extends Comparison {
  /**
   * Create a neq comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  constructor(column, val, paramName) {
    super('$neq', column, val, paramName);
  }
}

module.exports = Neq;


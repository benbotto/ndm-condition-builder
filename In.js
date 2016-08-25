'use strict';

const Comparison = require('./Comparison');

class In extends Comparison {
  /**
   * Create an in comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  constructor(column, val, paramName) {
    // TODO: Can't parameterize the whole array; each item needs a parameter.
    super('$in', column, val, paramName);
  }
}

module.exports = In;


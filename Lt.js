'use strict';

const Comparison = require('./Comparison');

class Lt extends Comparison {
  /**
   * Create an lt comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  constructor(column, val, paramName) {
    super('$lt', column, val, paramName);
  }
}

module.exports = Lt;


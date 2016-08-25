'use strict';

const Comparison = require('./Comparison');

class Lt extends Comparison {
  /**
   * Create an lt comparison.
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   */
  constructor(column, val) {
    super('$lt', column, val);
  }
}

module.exports = Lt;


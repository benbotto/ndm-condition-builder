'use strict';

const Comparison = require('./Comparison');

class IsNull extends Comparison {
  /**
   * Create an IS NULL comparison.
   * @param column The column name (FQCN).
   */
  constructor(column) {
    super('$is', column, null);
  }
}

module.exports = IsNull;


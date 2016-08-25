'use strict';

const Comparison = require('./Comparison');

class IsNull extends Comparison {
  /**
   * Create an IS NULL comparison.
   * @param column The column name (FQCN).
   * @param paramName An optional parameter name matching column.
   */
  constructor(column, paramName) {
    super('$is', column, null, paramName);
  }
}

module.exports = IsNull;


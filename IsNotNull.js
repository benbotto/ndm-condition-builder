'use strict';

const Comparison = require('./Comparison');

class IsNotNull extends Comparison {
  /**
   * Create an isnt comparison.
   * @param column The column name (FQCN).
   * @param paramName An optional parameter name matching column.
   */
  constructor(column, paramName) {
    super('$isnt', column, null, paramName);
  }
}

module.exports = IsNotNull;


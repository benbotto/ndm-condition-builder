'use strict';

const Condition = require('./Condition');

class In extends Condition {
  /**
   * Create an in comparison.
   * @param column The column name (FQCN).
   * @param vals The array of values to equate with column.
   * @param paramName An optional parameter name matching column.  Each item in
   *        the array will be paraterized with its index appended.
   */
  constructor(column, vals, paramName) {
    super();

    paramName = this.createParameterName(column, paramName);
    this.condition.$in = {[column]: []};

    for (let i = 0; i < vals.length; ++i) {
      let name = `${paramName}${i}`;
      this.condition.$in[column].push(`:${name}`);
      this.params[name] = vals[i];
    }
  }
}

module.exports = In;


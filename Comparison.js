'use strict';

const Condition = require('./Condition');

/**
 * A class that represents a boolean condition (eq, neq, lt, etc.).
 */
class Comparison extends Condition {
  /**
   * Create a basic comparison ($eq, $neq, $lt, etc.).
   * @param type A valid comparison type ($eq, $neq, $lt, $lte, $gt, $gte, $like, $notLike).
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   * @param paramName A parameter name that matches the column.
   */
  constructor(type, column, val, paramName) {
    super();

    if (Comparison.COMPARISON_TYPES.indexOf(type) === -1)
      throw new Error(`Invalid comparison type: ${type}.`);

    paramName = this.createParameterName(column, paramName);

    this.condition[type]   = {[column]: `:${paramName}`};
    this.params[paramName] = val;
  }
}

Comparison.COMPARISON_TYPES = ['$eq', '$neq', '$lt', '$lte',
  '$gt', '$gte', '$like', '$notLike', '$in', '$is', '$isnt'];

module.exports = Comparison;


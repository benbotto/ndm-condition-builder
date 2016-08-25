'use strict';

/**
 * A class that represents a boolean condition (eq, neq, lt, etc.).
 */
class Comparison {
  /**
   * Create a basic comparison ($eq, $neq, $lt, etc.).
   * @param type A valid comparison type ($eq, $neq, $lt, $lte, $gt, $gte, $like, $notLike).
   * @param column The column name (FQCN).
   * @param val The value to equate with column.
   * @param paramName A parameter name that matches the column.
   */
  constructor(type, column, val, paramName) {
    if (Comparison.COMPARISON_TYPES.indexOf(type) === -1)
      throw new Error(`Invalid comparison type: ${type}.`);

    paramName = paramName || column;

    // A leading colon is optional on the parameter name.
    if (paramName[0] === ':')
      paramName = paramName.substring(1);

    this.condition = {
      [type]: {
        [column]: `:${paramName}`
      }
    };

    this.params = {[paramName]: val};
  }
}

Comparison.COMPARISON_TYPES = ['$eq', '$neq', '$lt', '$lte',
  '$gt', '$gte', '$like', '$notLike', '$in', '$is', '$isnt'];

module.exports = Comparison;


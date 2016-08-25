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
   */
  constructor(type, column, val) {
    if (Comparison.COMPARISON_TYPES.indexOf(type) === -1)
      throw new Error(`Invalid comparison type: ${type}.`);

    this.condition = {
      [type]: {
        [column]: `:${column}`
      }
    };

    this.params = {[column]: val};
  }
}

Comparison.COMPARISON_TYPES = ['$eq', '$neq', '$lt', '$lte',
  '$gt', '$gte', '$like', '$notLike', '$in', '$is', '$isnt'];

module.exports = Comparison;


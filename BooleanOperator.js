'use strict';

/**
 * A class that represents a boolean operator (and,or).
 */
class BooleanOperator {
  /**
   * Create a boolean condition.
   * @param type The operator type ($and or $or).
   * @param condition An optional existing conditition.
   * @param params An optional set of parameters matching condition.
   */
  constructor(type, condition, params) {
    if (BooleanOperator.BOOLEAN_OPERATORS.indexOf(type) === -1)
      throw new Error(`Invalid boolean operator: ${type}.`);

    this.condition = {[type]: []};
    this.params    = {};
  }
}

BooleanOperator.BOOLEAN_OPERATORS = ['$and', '$or'];

module.exports = BooleanOperator;


'use strict';

const Comparison = require('./Comparison');
const Condition  = require('./Condition');

/**
 * A class that represents a boolean operator (and,or).
 */
class BooleanOperator extends Condition {
  /**
   * Create a boolean condition.
   * @param type The operator type ($and or $or).
   * @param condition An existing condition object, with "condition" and
   *        "params" properties.  If strings are supplied for condition and
   *        params they must be parsable as objects or an exception will be
   *        raised.
   */
  constructor(type, condition) {
    super();

    if (BooleanOperator.BOOLEAN_OPERATORS.indexOf(type) === -1)
      throw new Error(`Invalid boolean operator: ${type}.`);

    this._type           = type;
    this.condition[type] = [];

    if (condition)
      this.addCondition(condition);
  }

  /**
   * Add a condition.
   * @param condition An existing condition object, with "condition" and
   *        "params" properties.  If strings are supplied for condition and
   *        params they must be parsable as objects or an exception will be
   *        raised.
   */
  addCondition(condition) {
    // null/undefined conditions are ignored.
    if (condition && typeof condition === 'object' && condition.condition) {
      if (typeof condition.condition === 'string')
        this.condition[this._type].push(JSON.parse(condition.condition));
      else
        this.condition[this._type].push(condition.condition);

      if (condition.params) {
        let params = condition.params;

        if (typeof params === 'string')
          params = JSON.parse(params);

        // Parameters are blindly overwritten.
        for (let key in params)
          this.params[key] = params[key];
      }
    }

    return this;
  }

  /**
   * Add an $eq condition.
   * @param column The column to equate with value.
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  eq(column, val, paramName) {
    return this.addCondition(new Comparison('$eq', column, val, paramName));
  }

  /**
   * Add a $neq condition.
   * @param column The column to equate with value.
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  neq(column, val, paramName) {
    return this.addCondition(new Comparison('$neq', column, val, paramName));
  }

  /**
   * Add a $lt condition.
   * @param column The column to equate with value.
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  lt(column, val, paramName) {
    return this.addCondition(new Comparison('$lt', column, val, paramName));
  }

  /**
   * Add a $lte condition.
   * @param column The column to equate with value.
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  lte(column, val, paramName) {
    return this.addCondition(new Comparison('$lte', column, val, paramName));
  }

  /**
   * Add a $gt condition.
   * @param column The column to equate with value.
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  gt(column, val, paramName) {
    return this.addCondition(new Comparison('$gt', column, val, paramName));
  }

  /**
   * Add a $gte condition.
   * @param column The column to equate with value.
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  gte(column, val, paramName) {
    return this.addCondition(new Comparison('$gte', column, val, paramName));
  }

  /**
   * Add a $like condition.
   * @param column The column to equate with value.
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  like(column, val, paramName) {
    return this.addCondition(new Comparison('$like', column, val, paramName));
  }

  /**
   * Add a $notLike condition.
   * @param column The column to equate with value.
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  notLike(column, val, paramName) {
    return this.addCondition(new Comparison('$notLike', column, val, paramName));
  }

  /**
   * Add a $in condition.
   * @param column The column to equate with value.
   * @param val The value to equate with column.
   * @param paramName An optional parameter name matching column.
   */
  in(column, val, paramName) {
    return this.addCondition(new Comparison('$in', column, val, paramName));
  }

  /**
   * Add an IS NULL condition (short-hand method).
   * @param column The column to check for null.
   * @param paramName An optional parameter name matching column.
   */
  isNull(column, paramName) {
    return this.addCondition(new Comparison('$is', column, null, paramName));
  }

  /**
   * Add an IS NOT NULL condition (short-hand method).
   * @param column The column to verify as not null.
   * @param paramName An optional parameter name matching column.
   */
  isNotNull(column, paramName) {
    return this.addCondition(new Comparison('$isnt', column, null, paramName));
  }
}

BooleanOperator.BOOLEAN_OPERATORS = ['$and', '$or'];

module.exports = BooleanOperator;


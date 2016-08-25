'use strict';

/**
 * Helper service for building conditions.
 */
function ConditionBuilder()
{
  this.condition = {};

  /*new Or(
    new And()
      .eq('fname', ':fname')
      .eq('lname', ':lname')
      .gt('age', ':age'));*/
}

ConditionBuilder.COMPARISON_TYPES = ['$eq', '$neq', '$lt', '$lte',
  '$gt', '$gte', '$like', '$notLike', '$in', '$is', '$isnt'];

ConditionBuilder.BOOLEAN_OPERATORS = ['$and', '$or'];

/**
 * Add a basic comparison ($eq, $neq, $lt, etc.).
 * @param type A valid comparison type ($eq, $neq, $lt, $lte, $gt, $gte, $like, $notLike).
 * @param column The column name (FQCN).
 * @param val The value to equate with column.
 */
ConditionBuilder.prototype.comparison = function(type, column, val)
{
  var cond = {};

  if (ConditionBuilder.COMPARISON_TYPES.indexOf(type) === -1)
    throw new Error(`Invalid comparison type: ${type}.`);

  cond[type] = {};
  cond[type][column] = val;

  return cond;
};

/**
 * Add an $eq condition.
 * @param column The column to equate with value.
 * @param val The value to equate with column.
 */
ConditionBuilder.prototype.eq = function(column, val)
{
  return this.comparison('$eq', column, val);
};

/**
 * Add a $neq condition.
 * @param column The column to equate with value.
 * @param val The value to equate with column.
 */
ConditionBuilder.prototype.neq = function(column, val)
{
  return this.comparison('$neq', column, val);
};

/**
 * Add a $lt condition.
 * @param column The column to equate with value.
 * @param val The value to equate with column.
 */
ConditionBuilder.prototype.lt = function(column, val)
{
  return this.comparison('$lt', column, val);
};

/**
 * Add a $lte condition.
 * @param column The column to equate with value.
 * @param val The value to equate with column.
 */
ConditionBuilder.prototype.lte = function(column, val)
{
  return this.comparison('$lte', column, val);
};

/**
 * Add a $gt condition.
 * @param column The column to equate with value.
 * @param val The value to equate with column.
 */
ConditionBuilder.prototype.gt = function(column, val)
{
  return this.comparison('$gt', column, val);
};

/**
 * Add a $gte condition.
 * @param column The column to equate with value.
 * @param val The value to equate with column.
 */
ConditionBuilder.prototype.gte = function(column, val)
{
  return this.comparison('$gte', column, val);
};

/**
 * Add a $like condition.
 * @param column The column to equate with value.
 * @param val The value to equate with column.
 */
ConditionBuilder.prototype.like = function(column, val)
{
  return this.comparison('$like', column, val);
};

/**
 * Add a $notLike condition.
 * @param column The column to equate with value.
 * @param val The value to equate with column.
 */
ConditionBuilder.prototype.notLike = function(column, val)
{
  return this.comparison('$notLike', column, val);
};

/**
 * Add a $in condition.
 * @param column The column to equate with value.
 * @param val The value to equate with column.
 */
ConditionBuilder.prototype.in = function(column, val)
{
  return this.comparison('$in', column, val);
};

/**
 * Add a $is condition.
 * @param column The column to equate with value.
 * @param val The value to equate with column.
 */
ConditionBuilder.prototype.is = function(column, val)
{
  return this.comparison('$is', column, val);
};

/**
 * Add an IS NULL condition (short-hand method).
 * @param column The column to check for null.
 */
ConditionBuilder.prototype.isNull = function(column)
{
  return this.comparison('$is', column, null);
};

/**
 * Add an IS NOT NULL condition (short-hand method).
 * @param column The column to verify as not null.
 */
ConditionBuilder.prototype.isntNull = function(column)
{
  return this.comparison('$isnt', column, null);
};

/**
 * Add a $isnt condition.
 * @param column The column to equate with value.
 * @param val The value to equate with column.
 */
ConditionBuilder.prototype.isnt = function(column, val)
{
  return this.comparison('$isnt', column, val);
};

/**
 * AND/OR a series of conditions together.  This function is variadic.
 * @param operator A boolean operator ($and, $or).
 * @param conditions An array of conditions to AND together.
 */
ConditionBuilder.prototype.boolean = function(operator /*, conditions*/)
{
  var boolCond   = {};
  var conditions = Array.prototype.slice.call(arguments, 1);

  boolCond[operator] = [];
  conditions.forEach(function(cond)
  {
    // TODO: Also need to take string representations.
    if (cond && Object.keys(cond).length)
      boolCond[operator].push(cond);
  });

  if (boolCond[operator].length === 0)
    throw new Error('No conditions supplied.');

  return boolCond;
};

/**
 * AND a series of conditions together.  This function is variadic.
 * @param conditions An array of conditions to AND together.
 */
ConditionBuilder.prototype.and = function(/*conditions*/)
{
  return this.boolean.apply(this,
    ['$and'].concat(Array.prototype.slice.call(arguments)));
};

/**
 * OR a series of conditions together.  This function is variadic.
 * @param conditions An array of conditions to OR together.
 */
ConditionBuilder.prototype.or = function(/*conditions*/)
{
  return this.boolean.apply(this,
    ['$or'].concat(Array.prototype.slice.call(arguments)));
};

module.exports = ConditionBuilder;


'use strict';

/**
 * Base class for all conditions.
 */
class Condition {

  /**
   * Initialize the condition and parameter properties.
   */
  constructor() {
    this.condition = {};
    this.params    = {};
  }

  /**
   * Helper method to create a parameter name, which defaults to column.
   * @param column The name of the column.
   * @param paramName An optional parameter name that matches column.
   */
  createParameterName(column, paramName) {
    paramName = paramName || column;

    // A leading colon is optional on the parameter name.
    if (paramName[0] === ':')
      paramName = paramName.substring(1);

    return paramName
  }
}

module.exports = Condition;


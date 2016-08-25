'use strict';

const BooleanOperator = require('./BooleanOperator');

class And extends BooleanOperator {
  /**
   * Create an AND condition.
   * @param condition An existing condition object, with "condition" and
   *        "params" properties.  If strings are supplied for condition and
   *        params they must be parsable as objects or an exception will be
   *        raised.
   */
  constructor(condition) {
    super('$and', condition);
  }
}

module.exports = And;


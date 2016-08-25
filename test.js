'use strict';

let util = require('util');
let Gt = require('./Gt');
let And = require('./And');
let Or = require('./Or');
let and = new And(new Gt('users.age', 30, 'uage'));

and
  .eq('userID', 1)
  .neq('userCourseID', 12)
  .lte('cash', 100, 'cash')
  .addCondition(new Or()
    .eq('age', 30)
    .eq('age', 50));

console.log(util.inspect(and, {depth: null}));

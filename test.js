'use strict';

let Comparison = require('./Comparison');
let cond = new Comparison('$eq', 'age', 17);

console.log(JSON.stringify(cond));


const tap = require('lodash/tap');

const pipe = (...funcs) => value =>
  funcs.reduce((value, func) => func(value), value);

const log = value => tap(value, console.log);

const peek = array => array[0];
const pop = array => array.shift();

module.exports = {
  pipe,
  log,
  peek,
  pop,
  tap,
};

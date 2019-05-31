const tap = require('lodash/tap');

const { tokenize } = require('./tokenize');
const { parse } = require('./parse');
const { evaluate } = require('./evaluate');

const pipe = (...funcs) => value =>
  funcs.reduce((value, func) => func(value), value);

const log = value => tap(value, console.log);

const parseAndEvaluate = pipe(
  tokenize,
  parse,
  evaluate,
);

module.exports = { parseAndEvaluate };

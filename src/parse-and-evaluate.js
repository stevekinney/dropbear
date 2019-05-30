const { tokenize } = require('./tokenize');
const { parse } = require('./parser');
const { evaluate } = require('./evaluate');

const pipe = (...funcs) => value =>
  funcs.reduce((value, func) => func(value), value);

const parseAndEvaluate = pipe(
  tokenize,
  parse,
  evaluate,
);

module.exports = { parseAndEvaluate };

const { tokenize } = require('./tokenize');
const { parse } = require('./parse');
const { evaluate } = require('./evaluate');
const { log, pipe } = require('./utilities');

const parseAndEvaluate = pipe(
  tokenize,
  parse,
  evaluate,
);

const tokenizeAndParse = pipe(
  tokenize,
  parse,
);

module.exports = { parseAndEvaluate, tokenizeAndParse };

const { tokenize } = require('./tokenize');
const { parse } = require('./parse');
const { evaluate } = require('./evaluate');
const { log, pipe } = require('./utilities');
const { parseProgram } = require('./parse-program');
const { transform } = require('./transform');

const parseAndEvaluate = pipe(
  tokenize,
  parse,
  evaluate,
);

const tokenizeAndParse = pipe(
  tokenize,
  parse,
);

const parseAndEvaluateProgram = pipe(
  tokenize,
  parseProgram,
  evaluate,
);

module.exports = {
  parseAndEvaluate,
  tokenizeAndParse,
  parseAndEvaluateProgram,
};

const { tokenize } = require('./tokenize');
const { parse } = require('./parse');
const { evaluate } = require('./evaluate');
const { parseAndEvaluate } = require('./parse-and-evaluate');

module.exports = {
  tokenize,
  parse,
  evaluate,
  parseAndEvaluate,
};

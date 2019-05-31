const { parse } = require('./parse');

const parseProgram = (tokens, body = []) => {
  if (!tokens.length)
    return {
      type: 'Program',
      body,
    };
  const node = parse(tokens);
  if (node) body.push(node);
  return parseProgram(tokens, body);
};

module.exports = { parseProgram };

const { specialForms } = require('./special-forms');
const { peek, pop } = require('./utilities');

const parse = tokens => {
  let token = pop(tokens);

  if (isNumberToken(token)) {
    return createNumericLiteral(token);
  }

  if (isStringToken(token)) {
    return createStringLiteral(token);
  }

  if (isNameToken(token)) {
    return createIdentifier(token);
  }

  if (isOpeningParenthesisToken(token)) {
    if (!isNameToken(peek(tokens))) return;

    const expressionTokens = [];

    while (!isClosingParenthesisToken(peek(tokens))) {
      expressionTokens.push(parse(tokens));
    }

    const [name, ...args] = expressionTokens;

    if (specialForms[name]) {
      return specialForms[name](args);
    }

    return createCallExpression(name, args);
  }

  throw new TypeError(`Unknown identifier: "${token.value}"`);
};

module.exports = { parse };

/* Helpers */

const isType = type => token => token.type === type;

const isParenthesisToken = isType('Parenthesis');
const isNumberToken = isType('Number');
const isStringToken = isType('String');
const isNameToken = isType('Name');

const isOpeningParenthesisToken = token => {
  return token && isParenthesisToken(token) && token.value === '(';
};

const isClosingParenthesisToken = token => {
  return token && isParenthesisToken(token) && token.value === ')';
};

const createLiteral = type => ({ value }) => ({
  type,
  value,
});

const createNumericLiteral = createLiteral('NumericLiteral');

const createStringLiteral = createLiteral('StringLiteral');

const createCallExpression = (identifier, args) => ({
  type: 'CallExpression',
  name: identifier.name,
  arguments: args,
});

const createIdentifier = token => ({
  type: 'Identifier',
  name: token.value,
});

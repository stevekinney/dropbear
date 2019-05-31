const { specialForms } = require('./parse-special-forms');

const peek = array => array[0];
const pop = array => array.shift();

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

const createCallExpression = token => ({
  type: 'CallExpression',
  name: token.value,
  arguments: [],
});

const createIdentifier = token => ({
  type: 'Identifier',
  name: token.value,
});

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

    const node = createCallExpression(pop(tokens));

    while (!isClosingParenthesisToken(peek(tokens))) {
      node.arguments.push(parse(tokens));
    }

    if (specialForms[node.name]) {
      return specialForms[node.name](node);
    }

    return node;
  }

  throw new TypeError(`Unknown identifier: "${token.value}"`);
};

module.exports = { parse };

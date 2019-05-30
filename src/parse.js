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

const parse = tokens => {
  let token = pop(tokens);

  if (isNumberToken(token)) {
    return createNumericLiteral(token);
  }

  if (isStringToken(token)) {
    return createStringLiteral(token);
  }

  if (isOpeningParenthesisToken(token)) {
    if (!isNameToken(peek(tokens))) return;

    const node = createCallExpression(pop(tokens));

    while (!isClosingParenthesisToken(peek(tokens))) {
      node.arguments.push(parse(tokens));
    }

    return node;
  }

  throw new TypeError(`Unknown identifier: "${token.value}"`);
};

module.exports = { parse };

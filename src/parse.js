const { specialForms } = require('./special-forms');
const { peek, pop } = require('./utilities');

const parse = () => {};

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

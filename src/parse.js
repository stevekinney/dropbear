const { isOpeningParenthesis, isClosingParenthesis } = require('./identify');
const { specialForms } = require('./special-forms');
const { peek, pop } = require('./utilities');

const parenthesize = tokens => {
  return tokens;
};

const parse = tokens => {
  const token = pop(tokens);

  if (token.type === 'Number') {
    return {
      type: 'NumericLiteral',
      value: token.value,
    };
  }
};

module.exports = { parse: tokens => parse(parenthesize(tokens)) };

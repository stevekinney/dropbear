const { isOpeningParenthesis, isClosingParenthesis } = require('./identify');
const { specialForms } = require('./special-forms');
const { peek, pop } = require('./utilities');

const parenthesize = () => {};

const parse = () => {};

module.exports = { parse: tokens => parse(parenthesize(tokens)) };

const LETTER = /[a-zA-Z]/;
const WHITESPACE = /\s+/;
const NUMBER = /^[0-9]+$/;
const OPERATORS = ['+', '-', '*', '/', '%'];

const isLetter = character => LETTER.test(character);

const isWhitespace = character => WHITESPACE.test(character);

const isNumber = character => NUMBER.test(character);

const isOpeningParenthesis = character => character === '(';

const isClosingParenthesis = character => character === ')';

const isParenthesis = character =>
  isOpeningParenthesis(character) || isClosingParenthesis(character);

const isQuote = character => character === '"';

const isOperator = character => OPERATORS.includes(character);

module.exports = {
  isLetter,
  isWhitespace,
  isNumber,
  isOpeningParenthesis,
  isClosingParenthesis,
  isParenthesis,
  isQuote,
  isOperator,
};

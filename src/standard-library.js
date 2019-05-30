const all = fn => (...list) => list.reduce(fn);

const add = all((a, b) => a + b);
const subtract = all((a, b) => a - b);
const multiply = all((a, b) => a * b);
const divide = all((a, b) => a / b);
const modulo = all((a, b) => a % b);
const log = console.log;

const environment = (exports.environment = {
  begin(...args) {
    return last(args);
  },
  define(identifier, value) {
    console.log({ identifier, value });
    environment[identifier] = value;
    console.log(environment);
  },
  add,
  subtract,
  multiply,
  divide,
  modulo,
  log,
  pi: Math.PI,
});

module.exports = environment;

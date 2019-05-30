const all = fn => (...list) => list.reduce(fn);

const add = (exports.add = all((a, b) => a + b));
const subtract = (exports.subtract = all((a, b) => a - b));
const multiply = (exports.multiply = all((a, b) => a * b));
const divide = (exports.divide = all((a, b) => a / b));
const modulo = (exports.modulo = all((a, b) => a % b));
const log = (exports.log = console.log);

const globalEnvironment = (exports.globalEnvironment = {
  begin(...args) {
    return last(args);
  },
  add,
  subtract,
  multiply,
  divide,
  modulo,
  log,
  pi: Math.PI,
});

const apply = node => {
  const fn = globalEnvironment[node.name];
  const args = node.arguments.map(evaluate);
  return fn(...args);
};

const evaluate = (exports.evaluate = node => {
  if (!node) return;
  if (node.value) return node.value;
  return apply(node);
});

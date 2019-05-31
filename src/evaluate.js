const { environment } = require('./standard-library');

const getIdentifier = node => {
  if (environment[node.name]) return environment[node.name];
  throw new ReferenceError(`${node.name} is not defined`);
};

const apply = node => {
  const fn = environment[node.name];
  const args = node.arguments.map(evaluate);
  if (typeof fn !== 'function') {
    throw new TypeError(`${node.name} is not a function`);
  }
  return fn(...args);
};

const evaluate = node => {
  if (node.type === 'Identifier') return getIdentifier(node);
  if (node.type === 'CallExpression') return apply(node);
  if (node.value) return node.value;
};

module.exports = { evaluate };

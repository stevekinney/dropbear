const { environment } = require('./standard-library');
const last = collection => collection[collection.length - 1];

const getIdentifier = node => {
  if (environment[node.name]) return environment[node.name];
  throw new ReferenceError(`${node.name} is not defined`);
};

const define = node => {
  environment[node.identifier.name] = node.assignment.value;
};

const apply = node => {
  const fn = environment[node.name];
  const args = node.arguments.map(evaluate);
  if (typeof fn !== 'function') {
    throw new ReferenceError(`${node.name} is not a function`);
  }
  return fn(...args);
};

const evaluate = node => {
  if (node.type === 'Program') return last(node.body.map(evaluate));
  if (node.type === 'Identifier') return getIdentifier(node);
  if (node.type === 'CallExpression') return apply(node, evaluate);
  if (node.type === 'VariableDeclaration') return define(node);
  if (node.value) return node.value;
};

module.exports = { evaluate };

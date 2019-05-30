const environment = require('./standard-library');

const apply = node => {
  const fn = environment[node.name];
  const args = node.arguments.map(evaluate);
  return fn(...args);
};

const evaluate = (exports.evaluate = node => {
  if (!node) return;
  if (node.value) return node.value;
  return apply(node);
});

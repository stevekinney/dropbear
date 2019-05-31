const { traverse } = require('./traverse');

const transform = node => {
  return node;
};

const specialForms = {};

module.exports = { specialForms, transform };

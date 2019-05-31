const specialForms = {
  define(node) {
    const [identifier, assignment] = node.arguments;
    return {
      type: 'VariableDeclaration',
      identifier,
      assignment,
    };
  },
};

module.exports = { specialForms };

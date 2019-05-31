const specialForms = {
  define(node) {
    const [identifier, assignment] = node.arguments;
    console.log({
      type: 'VariableDeclaration',
      identifier,
      assignment,
    });
    return {
      type: 'VariableDeclaration',
      identifier,
      assignment,
    };
  },
};

module.exports = { specialForms };

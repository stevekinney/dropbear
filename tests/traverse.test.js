const { traverse } = require('../src/traverse');

describe.skip(traverse, () => {
  it('should travel to all the nodes in the tree', () => {
    const ast = {
      type: 'CallExpression',
      name: 'add',
      arguments: [
        { type: 'NumericLiteral', value: 12 },
        { type: 'NumericLiteral', value: 6 },
      ],
    };

    const visitor = {
      CallExpression: {
        enter({ node }) {
          if (node.name === 'add') {
            node.name = 'subtract';
          }
        },
      },
      NumericLiteral: {
        exit({ node }) {
          node.value = node.value * 2;
        },
      },
    };

    traverse(ast, visitor);

    expect(ast.name).toBe('subtract');
  });
});

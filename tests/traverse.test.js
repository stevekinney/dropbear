const { traverse } = require('../src/traverse');

describe(traverse, () => {
  it('should travel to all the nodes in the tree and reverse the math', () => {
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

  it('should travel to all the nodes in the tree and double all of the numbers', () => {
    const ast = {
      type: 'CallExpression',
      name: 'add',
      arguments: [
        { type: 'NumericLiteral', value: 12 },
        { type: 'NumericLiteral', value: 6 },
      ],
    };

    const visitor = {
      NumericLiteral: {
        exit({ node }) {
          node.value = node.value * 2;
        },
      },
    };

    traverse(ast, visitor);

    expect(ast.arguments[0].value).toBe(24);
    expect(ast.arguments[1].value).toBe(12);
  });

  it('should modify the tree', () => {
    const ast = {
      type: 'CallExpression',
      name: '+',
      arguments: [
        { type: 'NumericLiteral', value: 12 },
        { type: 'NumericLiteral', value: 6 },
      ],
    };

    const visitor = {
      CallExpression: {
        enter({ node }) {
          if (node.name === '+') {
            node.name = 'add';
          }
        },
      },
    };

    traverse(ast, visitor);

    expect(ast.name).toBe('add');
  });
});

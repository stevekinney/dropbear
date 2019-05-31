const { transform } = require('../src/transform.js');

describe(transform, () => {
  it.skip('should transform a "define" function to a variable declaration', () => {
    const callExpression = {
      type: 'CallExpression',
      name: 'define',
      arguments: [
        { type: 'Identifier', name: 'x' },
        { type: 'NumericLiteral', value: 3 },
      ],
    };

    const variableDeclaration = {
      type: 'VariableDeclaration',
      identifier: { type: 'Identifier', name: 'x' },
      assignment: { type: 'NumericLiteral', value: 3 },
    };

    expect(transform(callExpression)).toEqual(variableDeclaration);
  });
});

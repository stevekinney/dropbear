const { specialForms } = require('../src/special-forms');

describe('specialForms', () => {
  describe('define', () => {
    it.skip('should transform a call expression into a variable declaration', () => {
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

      expect(specialForms.define(callExpression)).toEqual(variableDeclaration);
    });
  });
});

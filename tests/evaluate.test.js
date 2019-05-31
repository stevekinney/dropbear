import { evaluate } from '../src/evaluate';

describe.skip(evaluate, () => {
  it('should be able to evaluate a single expression', () => {
    const ast = {
      type: 'CallExpression',
      name: 'add',
      arguments: [
        { type: 'NumericLiteral', value: 2 },
        { type: 'NumericLiteral', value: 3 },
      ],
    };

    const result = evaluate(ast);

    expect(result).toBe(5);
  });

  it('should be able to evaluate a nested expression', () => {
    const ast = {
      type: 'CallExpression',
      name: 'add',
      arguments: [
        { type: 'NumericLiteral', value: 2 },
        { type: 'NumericLiteral', value: 3 },
        {
          type: 'CallExpression',
          name: 'subtract',
          arguments: [
            { type: 'NumericLiteral', value: 5 },
            { type: 'NumericLiteral', value: 4 },
          ],
        },
      ],
    };

    const result = evaluate(ast);

    expect(result).toBe(6);
  });
});

const { parseProgram } = require('../src/parse-program');

describe(parseProgram, () => {
  it.skip('should return a program node', () => {
    const tokens = [
      { type: 'Parenthesis', value: '(' },
      { type: 'Name', value: 'define' },
      { type: 'Name', value: 'x' },
      { type: 'Number', value: 7 },
      { type: 'Parenthesis', value: ')' },
      { type: 'Parenthesis', value: '(' },
      { type: 'Name', value: 'add' },
      { type: 'Name', value: 'x' },
      { type: 'Name', value: 'x' },
      { type: 'Parenthesis', value: ')' },
    ];

    expect(parseProgram(tokens).type).toBe('Program');
  });

  it.skip('should have an array of expressions', () => {
    const tokens = [
      { type: 'Parenthesis', value: '(' },
      { type: 'Name', value: 'define' },
      { type: 'Name', value: 'x' },
      { type: 'Number', value: 7 },
      { type: 'Parenthesis', value: ')' },
      { type: 'Parenthesis', value: '(' },
      { type: 'Name', value: 'add' },
      { type: 'Name', value: 'x' },
      { type: 'Name', value: 'x' },
      { type: 'Parenthesis', value: ')' },
    ];

    const program = parseProgram(tokens);

    expect(Array.isArray(program.body)).toBe(true);
    expect(program.body.length).toBe(2);
  });
});

import { tokenize } from '../src/tokenize';

describe.skip(tokenize, () => {
  it('should correctly tokenize a simple expression', () => {
    const input = '(add 2 3)';
    const result = [
      { type: 'Parenthesis', value: '(' },
      { type: 'Name', value: 'add' },
      { type: 'Number', value: 2 },
      { type: 'Number', value: 3 },
      { type: 'Parenthesis', value: ')' },
    ];

    expect(tokenize(input)).toEqual(result);
  });

  it('should correctly tokenize a single digit', () => {
    const input = '2';
    const result = [{ type: 'Number', value: 2 }];

    expect(tokenize(input)).toEqual(result);
  });

  it.skip('should correctly tokenize a single letter', () => {
    const input = 'a';
    const result = [{ type: 'Name', value: 'a' }];

    expect(tokenize(input)).toEqual(result);
  });

  it('should return an empty array for only whitespace', () => {
    const input = '        ';
    const result = [];

    expect(tokenize(input)).toEqual(result);
  });

  it('should ignore whitespace', () => {
    const input = '   (add    2 3)';
    const result = [
      { type: 'Parenthesis', value: '(' },
      { type: 'Name', value: 'add' },
      { type: 'Number', value: 2 },
      { type: 'Number', value: 3 },
      { type: 'Parenthesis', value: ')' },
    ];

    expect(tokenize(input)).toEqual(result);
  });

  it('should know about strings', () => {
    const input = '(log "hello" "world")';
    const result = [
      { type: 'Parenthesis', value: '(' },
      { type: 'Name', value: 'log' },
      { type: 'String', value: 'hello' },
      { type: 'String', value: 'world' },
      { type: 'Parenthesis', value: ')' },
    ];

    expect(tokenize(input)).toEqual(result);
  });
});

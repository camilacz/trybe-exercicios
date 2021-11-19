const sum = require('./sum');

describe('1 - A função sum(a,b) retorna a soma do parâmetro a com o b', () => {
  it('O retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('O retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('A função sum lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  it('A mensagem de erro é "parameters must be numbers" ao chamar sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});
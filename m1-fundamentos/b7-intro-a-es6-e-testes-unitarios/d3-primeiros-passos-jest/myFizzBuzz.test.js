const myFizzBuzz = require('./myFizzBuzz');

describe('3 - Testa a função myFizzBuzz', () => {
  it('Verifica se retorna "fizzbuzz" quando parâmetro passado é divisível por 3 e 5', () => {
    expect(myFizzBuzz(45)).toBe('fizzbuzz');
  });
  it('Verifica se retorna "fizz" se o parâmetro passado só é divisível por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('Verifica se retorna "buzz" se o parâmetro passado só é divisível por 5', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });
  it('Verifica se retorna o próprio número se o parâmetro não for divisível por 3 nem por 5', () => {
    expect(myFizzBuzz(13)).toBe(13);
  });
  it('Verifica se retorna "false" quando parâmetro não é número', () => {
    expect(myFizzBuzz('hello world')).toBe(false);
  });
});

// Extra explained so you can't complain ;)

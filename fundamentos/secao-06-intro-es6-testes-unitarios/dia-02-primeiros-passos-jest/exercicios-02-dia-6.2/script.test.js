const myFizzBuzz = require('./script');

describe('1° Teste', () => {
  test('Verifica se o numero é divisivel por 3 e por 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  })
  test('Verifica se o numero é divisivel apenas por 3', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  })
  test('Verifica se o numero é divisivel apenas por 5', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  })
  test('Verifica se o numero não é divisivel nem por 3 e nem por 5', () => {
    expect(myFizzBuzz(2)).toBe(2);
  })
})
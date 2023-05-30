const {encode, decode} = require('./script');


describe('1° Teste', () => {
  it('Verificar se encode é uma funções', () => {
    expect(encode).toBeDefined();
  })
  it('Verificar se decode é uma funções', () => {
    expect(encode).toBeDefined();
  })
  it('O retorno de encode para a, e, i, o, u deve ser 1,2,3,4,5', () => {
    expect(encode('aeiou')).toBe('12345')
  })
  it('O retorno de encode para 1,2,3,4,5  deve ser a, e, i, o,u', () => {
    expect(decode('12345')).toBe('aeiou')
  });
  it('O retorno de Ana para encode deve ser 1n1', () => {
    expect(encode('ana')).toBe('1n1')
  });
  it('Verificando se o tamanho das strings são iguais para encode', () => {
    expect(encode('ana').length).toBe(('1n1').length)
  });
  it('Verificando se o tamanho das strings são iguais pade decode', () => {
    expect(encode('1n1').length).toBe(('ana').length)
  });
})
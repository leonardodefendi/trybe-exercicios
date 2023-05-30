const removeItem = require('./script1');

describe('Primeiro teste', () => {
  it('Retorna array esperado', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  it('Não retorna o array [1, 2, 3, 4]', () => {
    expect(removeItem([[1, 2, 3, 4],3])).not.toEqual([1, 2, 3, 4])
  })
  it('Retorna array esperado', () => {
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})
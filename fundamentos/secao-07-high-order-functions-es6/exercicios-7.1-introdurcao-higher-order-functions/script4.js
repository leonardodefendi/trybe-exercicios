const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//ex1:
const expectedResult = 'Stephen King';
const authorBornIn1947 = (year) => {
  return books.find((autor) => autor.author.birthYear === year).author.name;
}
authorBornIn1947(1947);

//ex2:
const expectedResult2 = 'Duna';
const smallerName = () => {
  let nameBook = books[0].name

  books.forEach(element => {
    if(element.name.length < nameBook.length){
      nameBook = element.name;
    }
  })

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

smallerName();

//ex3 :
const expectedResult3 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const getNamedBook = () => {
 return books.find((element) => element.name.length === 26);
}

getNamedBook();

//ex4 :
const expectedResult4 = false;

const everyoneWasBornOnSecXX = () => {
  return books.every((element) => element.author.birthYear >= 1901);
}

everyoneWasBornOnSecXX();

// ex5 :
// const expectedResult = false;

const authorUnique = () => {
  return !books.some((book) => books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}

console.log(authorUnique());
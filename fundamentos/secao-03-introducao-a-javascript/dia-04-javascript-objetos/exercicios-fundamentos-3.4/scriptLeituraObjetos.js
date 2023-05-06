let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// console.log("O livro favorito de", leitor.nome, leitor.sobrenome, "se chama", "'",leitor.livrosFavoritos[0].titulo);// requisito 1;
// -------------------------------------------------------------------- requisito 2
let newBook = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}

leitor.livrosFavoritos.push(newBook);

// console.log(leitor.livrosFavoritos); // requisito 2

console.log(leitor.nome, "tem", leitor.livrosFavoritos.length, "livros favoritos");
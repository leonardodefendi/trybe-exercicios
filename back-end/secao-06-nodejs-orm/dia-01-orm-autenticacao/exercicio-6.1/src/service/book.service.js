const { Book } = require('../models')

const getAllBooks = async() => {
  const books = await Book.findAll({order: [['title', 'ASC']]});
  return books
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  if(!book) return {status: 404, data: {message: 'Livro com Id não encontrado'}};
  return {status: 200, data: book};
}

const getByAuthor = async(author) => {
  const book = await Book.findAll({
    where: {author},
    order: [['title', 'ASC']]
  });
  return book;
}

const createNewBook = async ({title, author, pageQuantity, publisher}) => {
  const newBook = await Book.create({title, author, pageQuantity, publisher});
  return newBook;
}

const updateBook = async ({id, title, author, pageQuantity, publisher}) => {
  const [updateBook] = await Book.update(
    {title, author, pageQuantity, publisher},
    {where: { id }},
    )
  return updateBook;
}


const removeBook = async (id) => {
  const book = await Book.destroy({where: {id}});
  return book;
}
module.exports = {
  getAllBooks,
  getById,
  createNewBook,
  updateBook,
  removeBook,
  getByAuthor,
}
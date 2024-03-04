const BookService = require('../service/book.service');

const getAllBooks = async(req, res) => {
  const {author} = req.query;
  if(author) {
  const books = await BookService.getByAuthor(author);
  return res.status(200).json(books);
  }
  const books = await BookService.getAllBooks();
    
    return res.status(200).json(books);

  
}

const getById = async (req, res) => {
  const {id} = req.params;
  const {status, data} = await BookService.getById(id);
  return res.status(status).json(data);
};

const createNewBook = async (req, res) => {
  const newBook = await BookService.createNewBook(req.body);
  return res.status(200).json(newBook);
}

const updateBook = async (req, res) => {
  const {title, author, pageQuantity, publisher} = req.body;
  const { id } = req.params;
  const updatedBook = await BookService.updateBook({id, title, author, pageQuantity, publisher});
  if(!updatedBook) return res.status(404).json({message: 'Book not found'})
  return res.status(201).json({message: 'Book updated'});
}

const deleteBook = async (req, res) => {
  const{ id } = req.params;
  const bookDelete = await BookService.removeBook(id);
  if(!bookDelete) return res.status(404).json({message: 'Book not found'});
  return res.status(200).json({message: 'Book removed'});
}

const getByAuthor = async (req, res) => {
  const {author} = req.body;
  const book = await BookService.getByAuthor(author);
  if(!book) return res.status(404).json({message: 'Book not found'});
  return res.status(200).json(book);
}

module.exports = {
  getAllBooks,
  getById,
  createNewBook,
  updateBook,
  deleteBook,
  getByAuthor,
}
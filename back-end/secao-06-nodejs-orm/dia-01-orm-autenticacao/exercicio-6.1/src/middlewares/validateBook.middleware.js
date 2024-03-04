const {Book} = require('../models');

const validateBook = async (req, res, next) => {
  const {id} = req.params;
  const {title, author, pageQuantity} = req.body;
  const books = await Book.findAll();
  const exist = books.some((book) => book.id === Number(id));
  if(!title) return res.status(400).json({message: 'Title is required'});
  if(!author) return res.status(400).json({message: 'Author is required'});
  if(!pageQuantity) return res.status(400).json({message: 'pageQuantity is required'});
  
  next();
}

module.exports = {
  validateBook
}
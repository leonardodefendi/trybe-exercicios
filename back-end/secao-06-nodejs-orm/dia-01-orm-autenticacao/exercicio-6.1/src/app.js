const express = require('express');
const BookController = require('./controller/book.controller');
const {validateBook} = require('./middlewares')

const app = express();
app.use(express.json());

app.get('/book', BookController.getAllBooks);
app.post('/book', BookController.createNewBook);
app.get('/book/author', BookController.getByAuthor);
app.get('/book/:id', BookController.getById);
app.put('/book/:id',validateBook.validateBook, BookController.updateBook);
app.delete('/book/:id', BookController.deleteBook);
module.exports = app;
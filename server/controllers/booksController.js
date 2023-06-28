const data = {
  books: require('../model/books.json'),
  setBooks: function (data) {
    this.books = data;
  },
};

const fsPromises = require('fs').promises;
const path = require('path');

const getAllBooks = (req, res) => {
  res.json(data.books);
};

const getBook = (req, res) => {
  const book = data.books.find((bk) => bk.id === parseInt(req.params.id));
  if (!book) {
    return res.json({ message: `Book ID ${req.params.id} not found!` });
  }

  res.json(book);
};

const createNewBook = async (req, res) => {
  const newBook = {
    id: data.books?.length ? data.books[data.books.length - 1].id + 1 : 1,
    title: req.body.title,
    author: req.body.author,
    no_of_pages: parseInt(req.body.bookPages),
    published_at: req.body.publishDate,
  };

  if (!newBook.title || !newBook.author || !newBook.no_of_pages || !newBook.published_at) {
    return res.json({ message: 'Please enter all required details!' });
  }

  data.setBooks([...data.books, newBook]);
  await fsPromises.writeFile(path.join(__dirname, '..', 'model', 'books.json'), JSON.stringify(data.books));
  res.status(201).json({ message: 'Book added!' });
};

const updateBook = async (req, res) => {
  const updatedBook = data.books.find((bk) => bk.id === parseInt(req.body.id));
  console.log(req.body);

  if (!updatedBook) {
    return res.json({ message: `Book ID ${req.body.id} not found` });
  }

  if (!req.body.title || !req.body.author || !req.body.no_of_pages || !req.body.published_at) {
    return res.json({ message: 'Please do not leave empty fields!' });
  }

  if (req.body.title) updatedBook.title = req.body.title;
  if (req.body.author) updatedBook.author = req.body.author;
  if (req.body.no_of_pages) updatedBook.no_of_pages = parseInt(req.body.no_of_pages);
  if (req.body.published_at) updatedBook.published_at = req.body.published_at;

  const filteredArray = data.books.filter((bk) => bk.id !== parseInt(req.body.id));
  const unsortedArray = [...filteredArray, updatedBook];

  data.setBooks(unsortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0)));
  await fsPromises.writeFile(path.join(__dirname, '..', 'model', 'books.json'), JSON.stringify(data.books));
  res.json({ message: 'Book updated!' });
};

const deleteBook = async (req, res) => {
  const book = data.books.find((bk) => bk.id === parseInt(req.params.id));
  if (!book) {
    return res.json({ message: `Book ID ${req.params.id} not found` });
  }
  const filteredArray = data.books.filter((bk) => bk.id !== parseInt(req.params.id));
  data.setBooks([...filteredArray]);
  await fsPromises.writeFile(path.join(__dirname, '..', 'model', 'books.json'), JSON.stringify(data.books));
  res.json({ message: 'Book deleted!' });
};

module.exports = { getAllBooks, getBook, createNewBook, updateBook, deleteBook };

const express = require('express');
const router = express.Router();
const booksController = require('../../controllers/booksController');

router.route('/').get(booksController.getAllBooks);

router.route('/:id').delete(booksController.deleteBook);

router.route('/addBook').post(booksController.createNewBook);

router.route('/editBook/:id').put(booksController.updateBook);
router.route('/editBook/:id').get(booksController.getBook);

module.exports = router;

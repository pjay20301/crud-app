const express = require('express')
const router = express.Router()
const author = require('../controller/author')
const book = require('../controller/book')


router.post('/api/authors', author.create);

router.get('/api/authors', author.find);

router.put('/api/authors/:id', author.update);

router.delete('/api/authors/:id', author.delete);

router.post('/api/books', book.create);

router.get('/api/books', book.find);

router.put('/api/books/:id', book.update);

router.delete('/api/books/:id', book.delete);

module.exports = router

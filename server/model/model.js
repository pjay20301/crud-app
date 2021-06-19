const mongoose = require('mongoose')

var authorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    }
})
const Author = mongoose.model('Author', authorSchema)

var bookSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Author',
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    

})
const Book = mongoose.model('Book', bookSchema)

module.exports = {
    Author: Author,
    Book: Book
};


var {Book} = require('../model/model')
const mongoose = require('mongoose')

exports.create = (req,res) => {

    if(!req.body) {
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    const book =  new Book({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        author: req.body.author,
        price: req.body.price
    })
    book
    .save(book)
    .then(data=> {
        res.send(data)
    })
    .catch(err=> {
        res.status(500).send({
            message: err.message || `some error occured while creating a create operation`
        })
    })
}

exports.find = (req,res) => {

    Book.find()
    .populate('author')
    .then(book => {
        res.send(book)
    })
    .catch(err=> {
        res.status(500).send({
            message: err.message || `Error occured while retrieving book data`})
    })
}

exports.update = (req,res) => {
    if(!req.body) {
        return res
            .status(400)
            .send({message: `Data to be updated cannot be empty`})
    }

    const id = req.params.id;

    Book.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .populate('author')
    .then(data=> {
        if(!data) {
            res.status(404).send({
                message: `cannot update book with ${id}. Maybe uer not found`
            }) 
        } else {
            res.send(data)
        }
    })
    .catch(err=> {
        res.status(500).send({
            message: `Error update book information`
        })
    })
}

exports.delete = (req,res) => {
    const id = req.params.id;

    Book.findByIdAndDelete(id)
    .then(data=> {
        if(!data) {
            res.status(404).send({
                message: `Cannot delete book with id ${id}. Maybe id is wrong`
            })
        } else {
            res.send({
                message: `book deleted successfully!`
            })
        }
    })
    .catch(err=> {
        res.status(500).send({
            message: `Could not delete book with id ${id}`
        })
    })
}
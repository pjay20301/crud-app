const mongoose = require('mongoose');
var {Author} = require('../model/model') 

exports.create = (req,res) => {

    if(!req.body) {
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    const author =  new Author({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
    author 
    .save(author)
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

    Author.find()
    .then(author => {
        res.send(author)
    })
    .catch(err=> {
        res.status(500).send({
            message: err.message || `Error occured while retrieving author data`})
    })
}

exports.update = (req,res) => {
    if(!req.body) {
        return res
            .status(400)
            .send({message: `Data to be updated cannot be empty`})
    }

    const id = req.params.id;

    Author.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=> {
        if(!data) {
            res.status(404).send({
                message: `cannot update author with ${id}. Maybe uer not found`
            }) 
        } else {
            res.send(data)
        }
    })
    .catch(err=> {
        res.status(500).send({
            message: `Error update author information`
        })
    })
}

exports.delete = (req,res) => {
    const id = req.params.id;

    Author.findByIdAndDelete(id)
    .then(data=> {
        if(!data) {
            res.status(404).send({
                message: `Cannot delete author with id ${id}. Maybe id is wrong`
            })
        } else {
            res.send({
                message: `author deleted successfully!`
            })
        }
    })
    .catch(err=> {
        res.status(500).send({
            message: `Could not delete author with id ${id}`
        })
    })
}
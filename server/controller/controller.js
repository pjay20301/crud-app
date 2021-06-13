var User = require('../model/model') 

exports.create = (req,res) => {
    if(!req.body) {
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    const user =  new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
    user 
    .save(user)
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
    
}

exports.update = (req,res) => {
    
}

exports.delete = (req,res) => {
    
}
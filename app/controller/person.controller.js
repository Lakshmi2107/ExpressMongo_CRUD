var Person = require('../models/person.model.js');

// Create and Save a new person
exports.create = function(req, res){
    var person = new Person({
        name: req.body.name ,
        job_description: req.body.job_description ,
        id : req.body.id
    });
    person.save()
    .then(data => {
        res.send(data);
    })
    };


// Retrieve and return all persons from the database.
exports.findAll = function(req, res) {
    Person.find()
    .then(person => {
        res.send(person);
    })
};

// Find a single person with his id
exports.findOne = function(req, res){
    Person.findById(req.params.id)
    .then(person => {
        if(!person) {
            return res.status(404).send({
                message: "Person not found with id " + req.params.id
            });
        }
        res.send(person);
    })
};

// Update a person identified by the personId
exports.update = function(req, res){
    Person.findByIdAndUpdate(req.params.id, {
        name : req.body.name,
        job_description: req.body.job_description,
        id : req.body.id
    }, {new: true})
    .then(person => {
      if(!person) {
          return res.status(404).send({
              message: "Person not found with id " + req.params.id
          });
        }
        res.send(person);
    })
};

// Delete a person with the specified id
exports.delete = function(req, res){
    Person.findByIdAndRemove(req.params.id)
    .then(person => {
        res.send({message: "Person deleted successfully!"});
    })
};

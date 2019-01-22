module.exports = (app) => {
var person = require ('../controller/person.controller.js');

//Create a new person with his/her details
app.post('/person',person.create);

//Retrieve all Persons
app.get('/person',person.findAll);

//Retrieve a single person with his/her id
app.get('/person/:id',person.findOne);

//Update a person given id
app.put('/person/:id',person.update);

//Delete a person given id
app.delete('/person/:id',person.delete);
}

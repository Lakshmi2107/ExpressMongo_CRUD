var express = require('express');
var bodyParser = require('body-parser');

// create express app
var app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var mongoose = require('mongoose');

//Configuring the database
var dbconfig = require('./config/database.config.js');
mongoose.Promise = global.Promise;

//Connecting to the database
mongoose.connect(dbconfig.url).then(() => {
    console.log("Successfully connected to the database");
  });

require('./app/routes/person.routes.js')(app);

//Listen on port 3000
var port = process.env.PORT || 3000;
app.listen(port,function(){
console.log('Listening on localhost:'+ port);
});

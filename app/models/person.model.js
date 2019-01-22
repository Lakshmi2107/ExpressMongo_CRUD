var mongoose = require('mongoose');
var PersonSchema = new mongoose.Schema({
  name : String,
  job_description : String ,
  id : Number
});
mongoose.model('Person',PersonSchema);

module.exports = mongoose.model('Person');

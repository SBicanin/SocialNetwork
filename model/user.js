var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
    firstName: String,
    surname: String,
    age: Number,
    gender: String,
    friends: [{ type: Schema.ObjectId, ref: 'User'}]
  });


module.exports = mongoose.model('User', User);
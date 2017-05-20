var mongoose = require('mongoose');
var async = require('async');
mongoose.connect('mongodb://localhost/social_network');
var User = require('./model/user');
var keyboardInput = require('./keyboard_input');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
/*
var user = new User({
  firstName: 'Dusan',
  surname: 'Maric',
  age: 31,
  gender: 'male'
});

user.save(function (err, result) {
  if (err) {
    console.log('err', err);
  }
 // console.log('result', result);  
});

*/


User.find({}).lean().exec( function (err, users) {   
  if (err) {
    console.log('err', err);
  }
  function sortUsers(oneUser, callback) {
    var result = oneUser.firstName + ' ' + oneUser.surname;
    callback(null, result);
  }
  async.map(users, sortUsers, function(error, resultAsyncMap) {
    console.log('\n Registrovani korisnici: \n \n' , resultAsyncMap);
  })
});


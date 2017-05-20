
var User = require('./model/user');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// DIRECT FRIENDS

rl.question('\n Unesite ime jednog korisnika sa liste:  ', (name) => {
  
  User.findOne({ firstName: name }).populate('friends').lean().exec( function (err, result) {   
  if (err) {
    console.log('err', err);
  }
  console.log('\n Ovo su prijatelji izabranog korisnika: \n \n',  result.friends);
});

  rl.close();
});




// FRIENDS OF FRIENDS

/*
 rl.question('Unesite ime jednog korisnika sa liste:  ', (name) => {
   User.findOne({ firstName: name }).populate('friends').lean().exec( function (err, friend) {
    if (err) {
      console.log('err', err);
    }

   function friendsOfFriends(id, callback) {

  var friends = [];

  User.findOne({_id: id }).lean().exec( function (err, user) {
       if (err) {
      console.log('err', err);
     }

  friends.push(user);
  });
     callback(null, friends);
   }

   async.map(friend.friends, friendsOfFriends, function(error, allFriends) {
   console.log('This is friends of friend: ', allFriends);
   })

  });

   rl.close();
 });

*/


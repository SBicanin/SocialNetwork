var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/social_network";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Table created!");
    db.close();
  });
});
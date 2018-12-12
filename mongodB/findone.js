var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("training");
  dbo.collection("todo").findOne({"_id":new ObjectId("5c10c64bbd4da828145b5ad4")}, function(err, result) {
    if (err) throw err;
    console.log(result.task);
    
  });
  dbo.collection("todo").find({"task":"task 11 created"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    
  });
  dbo.collection("todo").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
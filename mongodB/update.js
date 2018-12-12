var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("training");
  var myquery = {"_id":new ObjectId("5c10e04dfd905b1be8aae6a0")};
  var newvalues = { $set: {task: "task 11 created" }};
  dbo.collection("todo").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
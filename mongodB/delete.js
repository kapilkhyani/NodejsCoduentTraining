var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("training");
  var myquery = {"_id":new ObjectId("5c101b575986c026fc55eb7a")};
  dbo.collection("todo").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});
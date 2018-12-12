var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectId = require('mongodb').ObjectID;

exports.mongoCombinedFunction = function(action,id=null,task=null) {
    console.log(action);    
    var myquery = {"_id":new ObjectId(id)};
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, db) => {
            if (err) throw err;
            var dbo = db.db("training");
            var myobj = {  task: task };
            if (action === 'insert') {
                dbo.collection("todo").insertOne(myobj, (err, res) => {
                    if (err) reject(err);
                    db.close();
                    resolve("1 document inserted");                    
                });
            } else if (action === 'getall') {
                dbo.collection("todo").find({}).toArray((err, result) => {
                    if (err) reject(err);
                    db.close();
                    resolve(result);
                });
            } else if (action === 'getone') {
                dbo.collection("todo").findOne({"_id":new ObjectId(id)}, (err, result) => {
                    if (err) reject(err);
                    db.close();
                    resolve(result);
                });
            }  else if (action === 'delete') {
                dbo.collection("todo").deleteOne(myquery, function(err, obj) {
                    if (err) reject(err);
                    db.close();
                    resolve("id "+id+"document deleted");
                });
            } else if (action === 'update') {
                var updateObject = { $set: {task: task }};
                dbo.collection("todo").updateOne(myquery, updateObject, function(err, res) {
                    if (err) reject(err);
                    db.close();
                    resolve("1 document updated id: " + id);
                });
            } 
        });
    });    
}

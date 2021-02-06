var MongoClient = require("mongodb").MongoClient;
const URL = process.env.MONGO_DB_CONNECTION_STRING;

function getAllSessions() {
  MongoClient.connect(URL, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("hangboard_sessions");
    dbo
      .collection("hangboard_sessions_collection")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        //console.log(result);
        db.close();
      });
    return dbo;
  });
}

console.log(getAllSessions());

module.exports = { getAllSessions };

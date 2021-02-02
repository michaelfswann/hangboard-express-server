var MongoClient = require("mongodb").MongoClient;
const URL = process.env.MONGO_DB_CONNECTION_STRING;

MongoClient.connect(URL, function (err, db) {
  if (err) throw err;
  var dbo = db.db("hangboard_sessions");
  dbo.createCollection(
    "hangboard_sessions_collection",
    { useUnifiedTopology: true },
    function (err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    }
  );
});

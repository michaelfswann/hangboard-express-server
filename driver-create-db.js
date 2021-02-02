const mongo = require("mongodb");

const MongoClient = require("mongodb").MongoClient;
const URL = process.env.MONGO_DB_CONNECTION_STRING;

MongoClient.connect(URL, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

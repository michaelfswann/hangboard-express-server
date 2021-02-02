const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const URL = process.env.MONGO_DB_CONNECTION_STRING;

MongoClient.connect(URL, { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("hangboard_sessions");

    router.get("/", function (req, res) {
      // do something
      db.collection("hangboard_sessions_collection")
        .find()
        .toArray()
        .then((results) => {
          res.send(results);
        });
    });
  })
  .catch((error) => console.error(error));

module.exports = router;

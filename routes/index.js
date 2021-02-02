const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const URL = process.env.MONGO_DB_CONNECTION_STRING;

// connect to database
MongoClient.connect(URL, { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("hangboard_sessions");

    // respond to get requests at /mongo/ with all documents in collection
    router.get("/", function (req, res) {
      db.collection("hangboard_sessions_collection")
        .find()
        .toArray()
        .then((results) => {
          res.send(results);
        });
    });

    // respond to post requests at /mongo/
    router.post("/", function (req, res) {
      const data = req.body;
      db.collection("hangboard_sessions_collection")
        .insertOne(data)
        .then((results) => {
          res.send(`New session logged id: ${results.insertedId}`);
        });
    });
  })
  .catch((error) => console.error(error));

module.exports = router;

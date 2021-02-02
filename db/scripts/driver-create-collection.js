var MongoClient = require("mongodb").MongoClient;
const URL = process.env.MONGO_DB_CONNECTION_STRING;

MongoClient.connect(URL, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("hangboard_sessions");
    db.createCollection("hangboard_sessions_collection");
    console.log("Collection created");
  })
  .catch(console.error);

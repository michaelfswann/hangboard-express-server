var MongoClient = require("mongodb").MongoClient;
const URL = process.env.MONGO_DB_CONNECTION_STRING;

MongoClient.connect(URL, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db("hangboard_sessions");
  var myobj = [
    {
      date_of_session: "2020-28-01",
      user_email: "michael@mswann.dev",
      weight_added_in_kg: 10,
    },
    {
      date_of_session: "2020-24-01",
      user_email: "michael@mswann.dev",
      weight_added_in_kg: 14,
    },
    {
      date_of_session: "2020-22-01",
      user_email: "michael@mswann.dev",
      weight_added_in_kg: 10,
    },
  ];
  dbo
    .collection("hangboard_sessions_collection")
    .insertMany(myobj, function (err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
});

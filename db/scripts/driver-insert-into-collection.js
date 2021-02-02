const MongoClient = require("mongodb").MongoClient;
const URL = process.env.MONGO_DB_CONNECTION_STRING;

const exampleData = [
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

MongoClient.connect(URL, { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("hangboard_sessions");
    const hangboardSessionCollection = db.collection(
      "hangboard_sessions_collection"
    );
    const res = hangboardSessionCollection.insertMany(exampleData);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.error(error));

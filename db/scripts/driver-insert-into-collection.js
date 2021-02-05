const MongoClient = require("mongodb").MongoClient;
const URL = process.env.MONGO_DB_CONNECTION_STRING;

const exampleData = [
  {
    date_of_session: "2020-10-01",
    user_email: "mikeswann1989@gmail.com",
    weight_added_in_kg: 10,
  },
  {
    date_of_session: "2020-14-01",
    user_email: "mikeswann1989@gmail.com",
    weight_added_in_kg: 14,
  },
  {
    date_of_session: "2020-12-01",
    user_email: "mikeswann1989@gmail.com",
    weight_added_in_kg: 12,
  },
];

MongoClient.connect(URL, { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("hangboard_sessions");
    const hangboardSessionCollection = db.collection(
      "hangboard_sessions_collection"
    );
    hangboardSessionCollection.insertMany(exampleData);
  })
  .catch((error) => console.error(error));

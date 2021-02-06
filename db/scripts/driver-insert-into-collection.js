const MongoClient = require("mongodb").MongoClient;
const URL = process.env.MONGO_DB_CONNECTION_STRING;
const EMAIL = process.env.EMAIL_FOR_POPULATE_SCRIPTS;

const exampleData = [
  {
    date_of_session: "2020-11-04",
    user_email: EMAIL,
    weight_added_in_kg: -7.5,
    max_hang_session: true,
    rest_time_seconds: 120,
    hanging_time_seconds: 5,
    number_sets: 6,
  },
  {
    date_of_session: "2020-11-13",
    user_email: EMAIL,
    weight_added_in_kg: -5,
    max_hang_session: true,
    rest_time_seconds: 120,
    hanging_time_seconds: 5,
    number_sets: 6,
  },
  {
    date_of_session: "2020-11-17",
    user_email: EMAIL,
    weight_added_in_kg: -2.5,
    max_hang_session: true,
    rest_time_seconds: 120,
    hanging_time_seconds: 5,
    number_sets: 6,
  },
  {
    date_of_session: "2020-11-21",
    user_email: EMAIL,
    weight_added_in_kg: 0,
    max_hang_session: true,
    rest_time_seconds: 120,
    hanging_time_seconds: 5,
    number_sets: 6,
  },
  {
    date_of_session: "2020-11-27",
    user_email: EMAIL,
    weight_added_in_kg: 2.5,
    max_hang_session: true,
    rest_time_seconds: 120,
    hanging_time_seconds: 5,
    number_sets: 6,
  },
  {
    date_of_session: "2020-12-04",
    user_email: EMAIL,
    weight_added_in_kg: 5,
    max_hang_session: true,
    rest_time_seconds: 120,
    hanging_time_seconds: 5,
    number_sets: 6,
  },
  {
    date_of_session: "2020-12-06",
    user_email: EMAIL,
    weight_added_in_kg: 8,
    max_hang_session: true,
    rest_time_seconds: 120,
    hanging_time_seconds: 5,
    number_sets: 6,
  },
  {
    date_of_session: "2020-12-19",
    user_email: EMAIL,
    weight_added_in_kg: 9.2,
    max_hang_session: true,
    rest_time_seconds: 120,
    hanging_time_seconds: 5,
    number_sets: 6,
  },
  {
    date_of_session: "2020-12-21",
    user_email: EMAIL,
    weight_added_in_kg: 10,
    max_hang_session: true,
    rest_time_seconds: 120,
    hanging_time_seconds: 5,
    number_sets: 6,
  },
  {
    date_of_session: "2020-12-29",
    user_email: EMAIL,
    weight_added_in_kg: 10,
    max_hang_session: true,
    rest_time_seconds: 120,
    hanging_time_seconds: 5,
    number_sets: 6,
  },
  {
    date_of_session: "2021-01-08",
    user_email: EMAIL,
    weight_added_in_kg: 10,
    max_hang_session: true,
    rest_time_seconds: 120,
    hanging_time_seconds: 5,
    number_sets: 6,
  },
  {
    date_of_session: "2021-01-10",
    user_email: EMAIL,
    weight_added_in_kg: 12.5,
    max_hang_session: true,
    rest_time_seconds: 120,
    hanging_time_seconds: 5,
    number_sets: 6,
  },
  {
    date_of_session: "2021-01-17",
    user_email: EMAIL,
    weight_added_in_kg: 15,
    max_hang_session: true,
    rest_time_seconds: 120,
    hanging_time_seconds: 5,
    number_sets: 6,
  },
  {
    date_of_session: "2021-02-03",
    user_email: EMAIL,
    weight_added_in_kg: 15,
    max_hang_session: true,
    rest_time_seconds: 120,
    hanging_time_seconds: 5,
    number_sets: 6,
  },
  {
    date_of_session: "2021-02-03",
    user_email: EMAIL,
    weight_added_in_kg: 16,
    max_hang_session: true,
    rest_time_seconds: 120,
    hanging_time_seconds: 5,
    number_sets: 6,
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

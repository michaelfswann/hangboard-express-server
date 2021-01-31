// External Modules
const express = require("express");
var mongoose = require("mongoose");

// App Variables
const app = express();
const port = process.env.SERVER_PORT || "8000";

// Set up default mongoose connection
var mongoDB = process.env.MONGO_DB_CONNECTION_STRING;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//  App Configuration
// /////NONE ADDED YET/////

// Routes Definitions
app.get("/", (req, res) => {
  res.status(200).send("working");
});

// Server Activation
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

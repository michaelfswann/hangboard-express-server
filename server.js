// External Modules
const express = require("express");

// App Variables
const app = express();
const port = process.env.SERVER_PORT || "8000";

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

// External Modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// App Variables
const app = express();
const port = process.env.SERVER_PORT || "8000";
const checkJwt = require("./middleware/check-jwt");

//  App Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes Definitions
app.get("/", (req, res) => {
  res.status(200).send("working");
});

const mongoRouter = require("./routes");
app.use("/mongo", checkJwt, mongoRouter);

// Server Activation
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

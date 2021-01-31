#! /usr/bin/env node

console.log(
  "This script populates some test hangboard sessions to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true"
);

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/

var async = require("async");

var HangboardSession = require("./models/hangboard-session.js");

var mongoose = require("mongoose");
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var hangboardSession = [];

function hangboardSessionCreate(date, weight, email, cb) {
  sessionDetail = {
    date_of_session: date,
    weight_added_in_kg: weight,
    user_email: email,
  };
  if (weight != false) sessionDetail.weight_added_in_kg = weight;
  if (date != false) sessionDetail.date_of_session = date;
  if (email != false) sessionDetail.user_email = email;

  var session = new HangboardSession(sessionDetail);

  session.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New session logged for: " + date);
    hangboardSession.push(session);
    cb(null, session);
  });
}

function createSessions(cb) {
  async.series(
    [
      function (callback) {
        hangboardSessionCreate("2020-01-01", 5, "michael@mswann.dev", callback);
      },
      function (callback) {
        hangboardSessionCreate(
          "2020-01-01",
          10,
          "michael@mswann.dev",
          callback
        );
      },
      function (callback) {
        hangboardSessionCreate(
          "2020-01-01",
          15,
          "michael@mswann.dev",
          callback
        );
      },
    ],
    // optional callback
    cb
  );
}

async.series(
  [createSessions],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("Session: " + hangboardSession);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);

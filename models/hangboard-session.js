//Require Mongoose
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

const HangboardSessionModelSchema = new Schema({
  date_of_session: Date,
  user_email: String,
  weight_added_in_kg: Number,
});

// Virtual for date of session
HangboardSessionModelSchema.virtual("date").get(function () {
  return this.date_of_session;
});

// Virtual for user's email full name
HangboardSessionModelSchema.virtual("email").get(function () {
  return this.user_email;
});

// Virtual for weight added for session
HangboardSessionModelSchema.virtual("weight").get(function () {
  return this.weight_added_in_kg;
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model(
  "HangboardSession",
  HangboardSessionModelSchema
);

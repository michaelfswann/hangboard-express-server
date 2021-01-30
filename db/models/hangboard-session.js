//Require Mongoose
var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var HangboardSessionModelSchema = new Schema({
  date_of_session: Date,
  user_email: String,
  weight_added_in_kg: Number,
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model(
  "HangboardSessionModel",
  HangboardSessionModelSchema
);

///////////
//
/* 
example schema with data types:

var schema = new Schema(
    {
      name: String,
      binary: Buffer,
      living: Boolean,
      updated: { type: Date, default: Date.now() },
      age: { type: Number, min: 18, max: 65, required: true },
      mixed: Schema.Types.Mixed,
      _someId: Schema.Types.ObjectId,
      array: [],
      ofString: [String], // You can also have an array of each of the other types too.
      nested: { stuff: { type: String, lowercase: true, trim: true } }
    })
 */

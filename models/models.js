// create the model for my MongoDB server

const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  tech: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Suman", DataSchema);

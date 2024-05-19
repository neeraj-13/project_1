const mongoose = require('mongoose');
const shortid = require("shortid");

const eventSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => `SPARSH-A-${shortid.generate()}`
  },
  image: {
    type: String,
    required: true,
    unique:true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});
const eventModel = mongoose.model('News&Events', eventSchema);
module.exports = { eventModel };

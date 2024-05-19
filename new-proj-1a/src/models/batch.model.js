const { string } = require('joi');
const mongoose = require('mongoose');
const shortid = require("shortid");

const batchesSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => `SPARSH-A-${shortid.generate()}`
  },
  batchName: {
    type: String,
    required: true,
    unique:true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    default: 0
  },
  year: {
    type: Number,
    required:true
  }
});
const batchesModel = mongoose.model('Batches', batchesSchema);
module.exports = { batchesModel };

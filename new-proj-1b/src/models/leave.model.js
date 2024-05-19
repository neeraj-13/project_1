const { number } = require('joi');
const mongoose = require('mongoose');
const shortid = require("shortid");

const leaveSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => `SPARSH-F-${shortid.generate()}`
  },
  reason: {
    type: String,
    required: true
  },
  facultyId: {
    type: String,
    required: true,
    unique:true
  },
  dates: {
    type: Date,
    required: true
  },
  decision: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
});
const leaveModel = mongoose.model('Leave', leaveSchema);
module.exports = { leaveModel };
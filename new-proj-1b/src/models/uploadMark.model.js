const { number } = require('joi');
const mongoose = require('mongoose');
const shortid = require("shortid");

const uploadMarkSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => `SPARSH-F-${shortid.generate()}`
  },
  subject: {
    type: String,
    required: true
  },
  subjectCode: {
    type: String,
    required: true,
    unique:true
  },
  mark: {
    type: Number,
    required: true
  },
  grade: {
    type: Number,
    required: true
  },
  totGrade: {
    type: Number,
    required: true
  },
  attendance: {
    type: Number,
    required: true
  },
  cgpa: {
    type: Number,
    required: true,
    float: true
  }
});
const uploadMarksModel = mongoose.model('UploadMarks', uploadMarkSchema);
module.exports = { uploadMarksModel };

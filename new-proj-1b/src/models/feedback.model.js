const mongoose = require('mongoose');
const shortid = require("shortid");

const facultyFeedbackSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => `SPARSH-F-${shortid.generate()}`
  },
  studentFeedback: {
    type: String,
    required: true
  },
  othersFeedback: {
    type: String,
    required: true
  },

  
});
const facultyFeedback = mongoose.model('Feedback', facultyFeedbackSchema);
module.exports = { facultyFeedback };

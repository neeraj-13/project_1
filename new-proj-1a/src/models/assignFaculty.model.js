const mongoose = require('mongoose');
const shortid = require("shortid");
const assignFacultySchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => `SPARSH-A-${shortid.generate()}`
  },
  facultyName: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  }
});
const AssignFaculty = mongoose.model('AssignFaculty', assignFacultySchema);
module.exports = { AssignFaculty };

const mongoose = require('mongoose');
const shortid = require("shortid");

const courseSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => `SPARSH-A-${shortid.generate()}`
  },
  courseName: {
    type: String,
    required: true
  },
  courseCode: {
    type: String,
    required: true,
    unique:true
  },
  duration: {
    type: String,
    required: true
  },
  numberOfStudents: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    unique:true
  },
  description: {
    type: String
  }
});
const coursesModel = mongoose.model('Courses', courseSchema);
module.exports = { coursesModel };

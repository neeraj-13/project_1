const mongoose = require('mongoose');
const shortid = require("shortid");

const studentsSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => `SPARSH-A-${shortid.generate()}`
  },
  image: {
    type: String,
    required: true,
    unique:true
  },
  isActive: {
    type: Boolean,
    default:false
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true,
    unique:true
  },
  sex: {
    type: String,
    required: true
  },
  currentSem: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required:true,
    unique:true
  },
  fatherName: {
    type: String,
    required:true,
   
  },
  motherName: {
    type: String,
    required:true
  },
  guardianPhoneNumber: {
    type: String,
    required:true,
    unique:true
  },
  department: {
    type: String,
    required:true
  },
});
const studentsModel = mongoose.model('Students', studentsSchema);
module.exports = { studentsModel };

const mongoose = require('mongoose');
const shortid = require("shortid");

const dashboardSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => `FACULTY-F-${shortid.generate()}`
  },
   facultyDetails: {
    type: String,
    required: true
  },
   announcement: {
    type: String,
    required: true
  }
  
});
const dashboardModel = mongoose.model('Facultys', dashboardSchema);
module.exports = { dashboardModel };

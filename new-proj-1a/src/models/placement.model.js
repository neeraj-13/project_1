const mongoose = require('mongoose');
const shortid = require("shortid");

const placementSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => `SPARSH-A-${shortid.generate()}`
      },
  companyName: {
    type: String,
    required: true
  },
  companyEmail: {
    type: String,
    required: true,
    unique:true
  },
  companyWebsite: {
    type: String,
    required: true,
  }
});



const PlacementModel = mongoose.model('PlacementModel', placementSchema);

module.exports = { PlacementModel };

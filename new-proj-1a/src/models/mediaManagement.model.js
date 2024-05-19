const mongoose = require("mongoose");
const shortid = require("shortid");

// Define the schema for media management
const mediaSchemaManagement = new mongoose.Schema({
    _id: {
        type: String,
        default: () => `SPARSH-A-${shortid.generate()}`
    },
    imgManagement: {
        type: String,
        required: true
    }
});

// Create the Mongoose model
const mediaManagementModel = mongoose.model("mediaManagementModel", mediaSchemaManagement);

module.exports = { mediaManagementModel };

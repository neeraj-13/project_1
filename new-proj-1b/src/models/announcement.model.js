const mongoose = require('mongoose');
const shortid = require("shortid");

const announcementSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => `Announcement-A-${shortid.generate()}`
    },
    announcementTitle: {
        type: String,
        required: true,
        unique:true
    },
    announcementDesc: {
        type: String,
        required: true
    },
    announcementDate: {
        type: Date,
        required: true
    },
    announcementFor: {
        type: String
    }
})
const announcementTitleModel = mongoose.model("Announcement", announcementSchema)
module.exports = announcementTitleModel 
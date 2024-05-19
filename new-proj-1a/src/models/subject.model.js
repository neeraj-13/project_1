const mongoose = require('mongoose');
const shortid = require("shortid");


const subjectSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => `SPARSH-A-SUB-${shortid.generate()}`
    },
    subjectName: {
        type: String,
        required: true
    },
    subjectCode: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    batchName: {
        type: String,
        require: true
    }
})
const subjectModel = mongoose.model('subjects', subjectSchema);
module.exports = { subjectModel };
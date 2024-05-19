const mongoose = require("mongoose")
const shortid = require("shortid");

const facultySchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => `FACULTY-F-${shortid.generate()}`
    },
    facName: {
        type: String,
        required: true
    },
    facPhone: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    relationship: {
        type: String,
        required: true
    },
    facultyId: {
        type: String,
        required: true,
        unique:true
    },
    emailId: {
        type: String,
        required: true,
        unique:true
    },
    facFatherName: {
        type: String,
        required: true
    },
    facSpouseName: {
        type: String,
        required: true
    },
    guardianPhoneNum: {
        type: Number,
    },
    facDepartment: {
        type: String,
        required: true
    },
    facImage: {
        type: String
    },
    isActive: {
        type: Boolean
    }
})
const Faculty = mongoose.model('Facultys', facultySchema)
module.exports = Faculty
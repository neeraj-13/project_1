const mongoose = require("mongoose")
const shortid = require("shortid");

const facultySchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => `FACULTY-A-${shortid.generate()}`
    },
    facName: {
        type: String,
        required: true
    },
    facPhone: {
        type: Number,
        required: true,
        unique:true
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
        type: String,
        uniqiue:true
    },
    isActive: {
        type: Boolean
    }
})
const facultyModel = mongoose.model('Facultys', facultySchema)
module.exports = { facultyModel }
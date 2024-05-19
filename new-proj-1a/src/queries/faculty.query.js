const { facultyModel } = require("../models/faculty.model")
const saveFaculty = async (body, session) => {
    try {
        const newFaculty = await new facultyModel(body);
        newFaculty.save(session)
        return newFaculty
    } catch (error) {
        throw error
    }
}
const getFacultyById = async (id) => {
    try {
        return await facultyModel.findById(id)
    } catch (error) {
        throw error
    }
}
const getAllFaculty = async () => {
    try {
        return await facultyModel.find()
    } catch (error) {
        throw error
    }
}
const getTotalFaculty = async () => {
    try {
        return await facultyModel.countDocuments()
    } catch (error) {
        throw error
    }
}
const updateFacultyById = async (id, body) => {
    try {
        return await facultyModel.findByIdAndUpdate(id, body, { new: true })
    } catch (error) {
        throw error
    }
}
const deleteFacultyById = async (id) => {
    try {
        return await facultyModel.findByIdAndDelete(id);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    saveFaculty,
    getFacultyById,
    getAllFaculty,
    getTotalFaculty,
    updateFacultyById,
    deleteFacultyById
};
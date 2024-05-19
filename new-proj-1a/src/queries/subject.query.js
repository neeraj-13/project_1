const { subjectModel } = require("../models/subject.model")
const saveSubject = async (body, session) => {
    try {
        const course = await new subjectModel(body);
        course.save(session);
        return course;
    } catch (error) {
        throw error;
    }
}
const getAllSubject = async () => {
    try {
        let result = await subjectModel.find();
        return result
    } catch (error) {
        throw error
    }
}
const updateSubject = async (id, body) => {
    try {
        let result = await subjectModel.findByIdAndUpdate(id, body, { new: true });
        return result
    } catch (error) {
        throw error
    }
}
const getSubjectById = async (id) => {
    try {
        return await subjectModel.findById(id)
    } catch (error) {
        throw error
    }
}
const deleteSubjectById = async (id) => {
    try {
        return await subjectModel.findByIdAndDelete(id)
    } catch (error) {
        throw error
    }
}
module.exports = {
    saveSubject,
    getAllSubject,
    updateSubject,
    getSubjectById,
    deleteSubjectById
}

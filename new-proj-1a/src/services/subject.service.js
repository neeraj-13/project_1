const subjectQuery = require("../queries/subject.query")
const saveSubject = async (body, session) => {
    try {
        const { subjectName, subjectCode, duration, batchName } = body;
        let result = await subjectQuery.saveSubject({
            subjectName, subjectCode, duration, batchName
        }, session);
        return result
    } catch (error) {
        throw error;
    }
}
const getAllSubject = async () => {
    try {
        const allSubject = await subjectQuery.getAllSubject()
        return allSubject
    } catch (error) {
        throw error
    }
}
const updateSubject = async (id, body) => {
    try {
        if (!id) {
            return "Please pass the subject ID...";
        }
        let getSubject = await subjectQuery.getSubjectById(id)
        if (!getSubject) {
            return `${id} is not associted with any id.Please check...`
        }
        const updateSubject = await subjectQuery.updateSubject(id, body)
        return updateSubject
    } catch (error) {
        throw error
    }
}
const deleteSubById = async (id) => {
    try {
        if (!id) {
            return "Please pass the subject ID...";
        }
        let getSubject = await subjectQuery.getSubjectById(id)
        if (!getSubject) {
            return `${id} is not associted with any id.Please check...`
        }
        return await subjectQuery.deleteSubjectById(id)
    } catch (error) {

    }
}
module.exports = {
    saveSubject,
    getAllSubject,
    updateSubject,
    deleteSubById
}
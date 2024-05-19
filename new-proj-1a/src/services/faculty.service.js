const facultyQuery = require("../queries/faculty.query")

const saveFaculty = async (body, session) => {
    try {
        const { facName, facPhone, sex, relationship, facultyId, emailId, facFatherName, facSpouseName, guardianPhoneNum, facDepartment, facImage, isActive } = body
        return await facultyQuery.saveFaculty({
            facName, facPhone, sex, relationship, facultyId, emailId, facFatherName, facSpouseName, guardianPhoneNum, facDepartment, facImage, isActive
        }, session)
    } catch (error) {
        throw error
    }
}

const getFacultyById = async (facultyId) => {
    try {
        let getFaculty = await facultyQuery.getFacultyById({_id:facultyId});
        
        if (!getFaculty) {
            return `${facultyId} is not associted with any id. Please check...`;
        };
        return getFaculty
    } catch (error) {
        throw error
    }
}
const getAllFaculty = async () => {
    try {
        return await facultyQuery.getAllFaculty()
    } catch (error) {
        throw error
    }
}
const getTotalFaculty = async () => {
    try {
        return await facultyQuery.getTotalFaculty()
    } catch (error) {
        throw error
    }
}
const updateFaculty = async (id, body) => {
    try {
        if (!id) {
            return "Please pass the Faculty ID...";
        }
        let getFaculty = await facultyQuery.getFacultyById(id)
        if (!getFaculty) {
            return `${id} is not associted with any id. Please check...`;
        }
        const { facName, facPhone, sex, relationship, facultyId, emailId, facFatherName, facSpouseName, guardianPhoneNum, facDepartment, facImage, isActive } = body
        return await facultyQuery.updateFacultyById(id, {
            facName, facPhone, sex, relationship, facultyId, emailId, facFatherName, facSpouseName, guardianPhoneNum, facDepartment, facImage, isActive
        })
    } catch (error) {
        throw error
    }
}
const deleteFacultyById = async (id) => {
    try {
        let getFaculty = await facultyQuery.getFacultyById(id);
        if (!getFaculty) {
            return `${id} is not associated with any faculty. Please check...`;
        } else {
            await facultyQuery.deleteFacultyById(id)
            return `${id} faculty deleted successfully.`;
        }
    } catch (error) {
        throw error;
    }
}
module.exports = {
    saveFaculty,
    getFacultyById,
    getAllFaculty,
    getTotalFaculty,
    updateFaculty,
    deleteFacultyById
};

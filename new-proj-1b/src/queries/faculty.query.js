const Faculty = require("../models/faculty.model")

const getFacultyByEmail = async (facultId) => {
    try {
        return await Faculty.findOne({facultyId:facultId})
    } catch (error) {
        throw error
    }
}

const findByFacultyId = async(facultyId)=>{
    try {
        return await Faculty.findOne({facultyId:facultyId})
    } catch (error) {
        throw error;
    }
}

module.exports= {
    getFacultyByEmail,
    findByFacultyId
};

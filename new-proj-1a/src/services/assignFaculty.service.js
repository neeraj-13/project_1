const assignFacultyQuery = require("../queries/assignFaculty.query");
const saveFaculty = async(body, session)=>{
    try {
        return await assignFacultyQuery.saveFaculty(body, session);
    } catch (error) {
        throw error;
    }
}
const viewFaculty = async(id)=>{
    try {
        return await assignFacultyQuery.viewFaculty(id);
    } catch (error) {
        throw error;
    }
}
const viewAllFaculty = async()=>{
    try {
        return await assignFacultyQuery.viewAllFaculty();
    } catch (error) {
        throw error;
    }
}
const updateFaculty = async(id, body)=>{
    try {
        return await assignFacultyQuery.updateFaculty(id, body);
    } catch (error) {
     throw error;   
    }
}
const deleteFaculty = async(id)=>{
    try {
        return await assignFacultyQuery.deleteFaculty(id);
    } catch (error) {
        throw error;
    }
}
module.exports = {
   saveFaculty,
   viewFaculty,
   viewAllFaculty,
   updateFaculty,
   deleteFaculty
}
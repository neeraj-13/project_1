const courseQuery = require("../queries/course.query");
const saveCourse = async(body, session)=>{
    try {
        return await courseQuery.saveCourse(body, session);
    } catch (error) {
        throw error;
    }
}
const viewCourse = async(id)=>{
    try {
        return await courseQuery.viewCourse(id);
    } catch (error) {
        throw error;
    }
}
const viewAllCourses = async()=>{
    try {
        return await courseQuery.viewAllCourses();
    } catch (error) {
        throw error;
    }
}
const viewTotalstudents = async()=>{
    try {
        return await courseQuery.viewTotalstudents();
    } catch (error) {
        throw error;
    }
}
const viewTotalSubjects = async()=>{
    try {
        return await courseQuery.viewTotalSubjects();
    } catch (error) {
        throw error;
    }
}
const viewTotalBatches = async()=>{
    try {
        return await courseQuery.viewTotalBatches();
    } catch (error) {
        throw error;
    }
}
const updateCourse = async(id, body)=>{
    try {
        return await courseQuery.updateCourse(id, body);
    } catch (error) {
     throw error;   
    }
}
const deleteCourse = async(id)=>{
    try {
        return await courseQuery.deleteCourse(id);
    } catch (error) {
        throw error;
    }
}
module.exports = {
    saveCourse,
    viewCourse,
    viewAllCourses,
    viewTotalstudents,
    viewTotalBatches,
    viewTotalSubjects,
    updateCourse,
    deleteCourse
}
const  dashboardQuery = require("../queries/dashboard.query");

const viewFacultyDetails = async(email)=>{
    try {
        if(!email){
            throw customException.error(
                statusCode.BAD_REQUEST,
                "MissingParameter",
                "Email is required."
            );
        }
        return await dashboardQuery.viewFacultyDetails({emailId: email});
    } catch (error) {
        throw error;
    }
};
const viewAnnouncement = async(announcementId)=>{
    try {
        if(!announcementId){
            throw customException.error(
                statusCode.NOT_FOUND,
                null,
                `${announcementId} not found.`
              );
        }
        return await dashboardQuery.viewAnnouncement(announcementId);
    } catch (error) {
        throw error;
    }
};
module.exports = {
    viewFacultyDetails,
    viewAnnouncement,
}
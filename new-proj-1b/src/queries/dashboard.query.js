const { dashboardModel } = require("../models/dashboard.model"); 
const viewFacultyDetails = async (email) => {
  try {
     return await dashboardModel.find({emailId: email});
  } catch (error) {
    throw error;
  }
};
const viewAnnouncement = async (announcementId) => {
  try {
     return await dashboardModel.findById(announcementId);
  } catch (error) {
    throw error;
  }
};


module.exports = {
    viewFacultyDetails,
    viewAnnouncement,
};

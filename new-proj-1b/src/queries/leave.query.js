const { leaveModel } = require("../models/leave.model");

const saveLeave = async (body, session) => {
  try {
    const uploadMarks = await new leaveModel(body);
    uploadMarks.save(session);
    return uploadMarks;
  } catch (error) {
    throw error;
  }
};

const viewLeave = async (id) => {
  try {
     return await leaveModel.findById(id);
  } catch (error) {
    throw error;
  }
};
const viewAllLeaves = async () => {
  try {
    return await leaveModel.find();
  } catch (error) {
    throw error;
  }
};
const updateFacultyLeaveStatus = async (id, body) => {
  try {
    return await leaveModel.findByIdAndUpdate(id, body, { new: true });
  } catch (error) {
    throw error;
  }
};

module.exports = {
    saveLeave,
    viewLeave,
    viewAllLeaves,
    updateFacultyLeaveStatus,
};

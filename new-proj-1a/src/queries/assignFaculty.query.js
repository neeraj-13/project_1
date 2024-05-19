const { AssignFaculty } = require("../models/assignFaculty.model.js");
const saveFaculty = async (body, session) => {
  try {
    const faculty = await new AssignFaculty(body);
    faculty.save(session);
    return faculty;
  } catch (error) {
    throw error;
  }
};
const viewFaculty = async (id) => {
  try {
    return await AssignFaculty.findById(id);
  } catch (error) {
    throw error;
  }
};
const viewAllFaculty = async () => {
  try {
    return await AssignFaculty.find();
  } catch (error) {
    throw error;
  }
};
const updateFaculty = async (id, body) => {
  try {
    return await AssignFaculty.findByIdAndUpdate(id, body, { new: true });
  } catch (error) {
    throw error;
  }
};
const deleteFaculty = async (id) => {
  try {
    return await AssignFaculty.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
module.exports = {
 saveFaculty,
 viewFaculty,
 viewAllFaculty,
 updateFaculty,
 deleteFaculty
};

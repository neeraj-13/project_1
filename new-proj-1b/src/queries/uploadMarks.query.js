const { uploadMarksModel } = require("../models/uploadMark.model");

const saveUploadMarks = async (body, session) => {
  try {
    const uploadMarks = await new uploadMarksModel(body);
    uploadMarks.save(session);
    return uploadMarks;
  } catch (error) {
    throw error;
  }
};

const viewUploadMarks = async (id) => {
  try {
     return await uploadMarksModel.findById(id);;
  } catch (error) {
    throw error;
  }
};
const viewAllUploadMarks = async () => {
  try {
    return await uploadMarksModel.find();
  } catch (error) {
    throw error;
  }
};
const updateUploadMarks = async (id, body) => {
  try {
    return await uploadMarksModel.findByIdAndUpdate(id, body, { new: true });
  } catch (error) {
    throw error;
  }
};

module.exports = {
    saveUploadMarks,
    viewUploadMarks,
    viewAllUploadMarks,
    updateUploadMarks,
};

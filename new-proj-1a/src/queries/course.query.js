const { coursesModel } = require("../models/course.model");
const {studentsModel} = require("../models/students.model");
const {batchesModel} = require("../models/batch.model");
const {subjectModel} = require("../models/subject.model");
const saveCourse = async (body, session) => {
  try {
    const course = await new coursesModel(body);
    course.save(session);
    return course;
  } catch (error) {
    throw error;
  }
};
const viewCourse = async (id) => {
  try {
    return await coursesModel.findById(id);
  } catch (error) {
    throw error;
  }
};
const viewAllCourses = async () => {
  try {
    return await coursesModel.find();
  } catch (error) {
    throw error;
  }
};
const viewTotalstudents = async () => {
  try {
    return await studentsModel.countDocuments();
  } catch (error) {
    throw error;
  }
};
const viewTotalBatches = async () => {
  try {
    return await batchesModel.C();
  } catch (error) {
    throw error;
  }
};
const viewTotalSubjects = async () => {
  try {
    return await subjectModel.countDocuments();
  } catch (error) {
    throw error;
  }
};
const updateCourse = async (id, body) => {
  try {
    return await coursesModel.findByIdAndUpdate(id, body, { new: true });
  } catch (error) {
    throw error;
  }
};
const deleteCourse = async (id) => {
  try {
    return await coursesModel.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  saveCourse,
  viewCourse,
  viewAllCourses,
  viewTotalstudents,
  viewTotalBatches,
  viewTotalSubjects,
  updateCourse,
  deleteCourse,
};

const { studentsModel } = require("../models/students.model");

const saveStudent = async (body, session) => {
  try {
    const student = await new studentsModel(body);
    student.save(session);
    return student;
  } catch (error) {
    throw error;
  }
};

const viewStudent = async (id) => {
  try {
    const studentDet = await studentsModel.findById(id);
    return studentDet;
  } catch (error) {
    throw error;
  }
};
const viewAllStudents = async () => {
  try {
    return await studentsModel.find();
  } catch (error) {
    throw error;
  }
};
const updateStudent = async (id, body) => {
  try {
    return await studentsModel.findByIdAndUpdate(id, body, { new: true });
  } catch (error) {
    throw error;
  }
};
const deleteStudent = async (id) => {
  try {
    return await studentsModel.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  saveStudent,
  viewStudent,
  viewAllStudents,
  updateStudent,
  deleteStudent,
};

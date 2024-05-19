const { PlacementModel } = require("../models/placement.model");
const saveCompany = async (body, session) => {
  try {
    const company = await new PlacementModel(body);
    company.save(session);
    return company;
  } catch (error) {
    throw error;
  }
};
const viewCompany = async (id) => {
  try {
    return await PlacementModel.findById(id);
  } catch (error) {
    throw error;
  }
};
const viewAllCompany = async () => {
  try {
    return await PlacementModel.find();
  } catch (error) {
    throw error;
  }
};
const updateCompany = async (id, body) => {
  try {
    return await PlacementModel.findByIdAndUpdate(id, body, { new: true });
  } catch (error) {
    throw error;
  }
};
const deleteCompany = async (id) => {
  try {
    return await PlacementModel.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
module.exports = {
saveCompany,
viewCompany,
viewAllCompany,
updateCompany,
deleteCompany
};

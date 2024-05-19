const { batchesModel } = require("../models/batch.model");
const saveBatch = async (body, session) => {
  try {
    const batch = await new batchesModel(body);
    batch.save(session);
    return batch;
  } catch (error) {
    throw error;
  }
};
const viewBatch = async (id) => {
  try {
    return await batchesModel.findById(id);
  } catch (error) {
    throw error;
  }
};
const viewAllBatches = async () => {
  try {
    return await batchesModel.find();
  } catch (error) {
    throw error;
  }
};
const updateBatch = async (id, body) => {
  try {
    return await batchesModel.findByIdAndUpdate(id, body, { new: true });
  } catch (error) {
    throw error;
  }
};
const deleteBatch = async (id) => {
  try {
    return await batchesModel.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  saveBatch,
  viewBatch,
  viewAllBatches,
  updateBatch,
  deleteBatch,
};

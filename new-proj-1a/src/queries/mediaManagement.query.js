const { mediaManagementModel}= require("../models/mediaManagement.model.js");
const saveImage = async (body, session) => {
    try {
      const image= await new mediaManagementModel(body);
      image.save(session);
      return image;
    } catch (error) {
      throw error;
    }
  };
  const viewAllImages = async () => {
    try {
      return await mediaManagementModel.find();
    } catch (error) {
      throw error;
    }
  };


  module.exports={saveImage,viewAllImages};
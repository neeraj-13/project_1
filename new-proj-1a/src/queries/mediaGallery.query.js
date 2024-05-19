const {galleryModel}= require("../models/mediaGallery.model.js");
const saveImage = async (body, session) => {
    try {
      const image= await new galleryModel(body);
      image.save(session);
      return image;
    } catch (error) {
      throw error;
    }
  };
  const viewAllImages = async () => {
    try {
      return await galleryModel.find();
    } catch (error) {
      throw error;
    }
  };


  module.exports={saveImage,viewAllImages};
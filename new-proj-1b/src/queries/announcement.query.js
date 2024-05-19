const announcementTitleModel = require("../models/announcement.model")
const getAnnouncementByTitle = async () => {
    try {
      return await announcementTitleModel.find();
    } catch (error) {
      throw error;
    }
  };

  module.exports = {
    getAnnouncementByTitle
  };
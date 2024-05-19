const { announcementModel } = require("../models/announcement.model")
const getAllAnnouncement = async () => {
    try {
        return await announcementModel.find()
    } catch (error) {
        throw error
    }
};
const getAnnouncementById = async (announcementId) => {
    try {
       return await announcementModel.findById(announcementId);;
    } catch (error) {
      throw error;
    }
  };
  const addAnnouncement = async (body, session) => {
    try {
        const newAnnouncement = await new announcementModel(body)
        newAnnouncement.save(session)
        return newAnnouncement
    } catch (error) {
        throw error
    }
}
const updateAnnouncement = async (id, body) => {
    try {
        return await announcementModel.findByIdAndUpdate(id, body, { new: true })
    } catch (error) {
        throw error
    }
}
const deleteAnnouncement = async (id) => {
    try {
        return await announcementModel.findByIdAndDelete(id)
    } catch (error) {
        throw error
    }
};
const getAnnouncement = async (id) => {
    try {
        return await announcementModel.findById(id)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllAnnouncement,
    getAnnouncementById,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    getAnnouncement
};

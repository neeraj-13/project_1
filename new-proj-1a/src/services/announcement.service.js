const announcementQuery = require("../queries/announcement.query")
const addAnnouncement = async (body, session) => {
    try {
        return await announcementQuery.addAnnouncement(body, session);
    } catch (error) {
        throw error;
    }
}
const getAnnouncementById = async (announcementId) => {
    try {
        let getAnnouncement = await announcementQuery.getAnnouncementById({_id:announcementId});
        
        if (!getAnnouncement) {
            return `${announcementId} is not associted with any id. Please check...`;
        };
        return getAnnouncement
    } catch (error) {
        throw error
    }
}
const getAllAnnouncement = async () => {
    try {
        return await announcementQuery.getAllAnnouncement()
    } catch (error) {
        throw error
    }
}
const updateAnnouncemnt = async (id, body) => {
    try {
        let getResult = await announcementQuery.getAnnouncement(id)
        if (!getResult) {
            return `${id} is not associted with any id. Please check...`;
        }
        return await announcementQuery.updateAnnouncement(id, body)
    } catch (error) {
        throw error
    }
}
const deleteAnnouncement = async (id) => {
    try {
        let getResult = await announcementQuery.getAnnouncement(id)
        if (!getResult) {
            return `${id} is not associted with any id. Please check...`;
        }
        return await announcementQuery.deleteAnnouncement(id)
    } catch (error) {
        throw error
    }
}

module.exports = {
    addAnnouncement,
    getAnnouncementById,
    getAllAnnouncement,
    updateAnnouncemnt,
    deleteAnnouncement
}
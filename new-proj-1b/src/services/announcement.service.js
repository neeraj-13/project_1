const announcementQuery = require("../queries/announcement.query")
const getAnnouncementByTitle = async () => {
    try {
        const getAnnouncement = await announcementQuery.getAnnouncementByTitle();
        if (!getAnnouncement) {
            return 'required data is not associted with any id. Please check...';
        };
        return getAnnouncement
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAnnouncementByTitle
};
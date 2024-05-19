const mongoose = require("mongoose");
const shortid = require("shortid");

const mediaSchemaGallery = new mongoose.Schema({
    _id: {
        type: String,
        default: () => `SPARSH-A-${shortid.generate()}`
    },
    imgGallery: {
        type: String,
        required: true
    }
});

const galleryModel = mongoose.model("GalleryModel", mediaSchemaGallery);

module.exports = { galleryModel };

const mediaGalleryQuery=require("../queries/mediaGallery.query");
const saveImage = async(body, session)=>{
    try {
        return await mediaGalleryQuery.saveImage(body, session);
    } catch (error) {
        throw error;
    }
}
const viewAllImage = async()=>{
    try {
        return await mediaGalleryQuery.viewAllImages();
    } catch (error) {
        throw error;
    }
}
module.exports={
    viewAllImage,
    saveImage
}
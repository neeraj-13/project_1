const mediaManagementQuery=require("../queries/mediaManagement.query");
const saveImage = async(body, session)=>{
    try {
        return await mediaManagementQuery.saveImage(body, session);
    } catch (error) {
        throw error;
    }
}
const viewAllImage = async()=>{
    try {
        return await mediaManagementQuery.viewAllImages();
    } catch (error) {
        throw error;
    }
}
module.exports={
    viewAllImage,
    saveImage
}
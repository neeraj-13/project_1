const uploadMarks = require("../queries/uploadMarks.query");
const saveUploadMarks = async(body, session)=>{
    try {
        const{
            subject,
            subjectCode,
            mark,
            grade,
            totGrade,
            attendance,
            cgpa
        } = body;
          
          const uploadData = {
            subject,
            subjectCode,
            mark,
            grade,
            totGrade,
            attendance,
            cgpa
          };
        return await uploadMarks.saveUploadMarks(uploadData, session);
    } catch (error) {
        throw error;
    }
};
const viewUploadMarks = async(id)=>{
    try {
        if(!id){
            throw customException.error(
                statusCode.NOT_FOUND,
                null,
                `${id} not found.`
              );
        }
        return await uploadMarks.viewUploadMarks(id);
    } catch (error) {
        throw error;
    }
};
const viewAllUploadMarks = async()=>{
    try {
        return await uploadMarks.viewAllUploadMarks();
    } catch (error) {
        throw error;
    }
};
const updateUploadMarks = async(id, body)=>{
    try {
        if(!id){
            return 'Please write the event ID...'
        }
        if(!await uploadMarks.updateUploadMarks(id)){
            return `${id} is not associted with any id. Please check...`
        }
         return await uploadMarks.updateUploadMarks(id,body);
    } catch (error) {
     throw error;   
    }
};



module.exports = {
    saveUploadMarks,
    viewUploadMarks,
    viewAllUploadMarks,
    updateUploadMarks
}
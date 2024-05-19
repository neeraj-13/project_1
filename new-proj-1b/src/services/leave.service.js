const leaveQuery = require("../queries/leave.query")
const saveLeave = async(body, session)=>{
    try {
        const{
            reason,
            facultyId,
            date,
            decision
          
        } = body;
          
          const Data = {
            reason,
            facultyId,
            date,
            decision
           
          };
        return await leaveQuery.saveLeave(Data, session);
    } catch (error) {
        throw error;
    }
};
const viewLeave = async(id)=>{
    try {
        if(!id){
            throw customException.error(
                statusCode.NOT_FOUND,
                null,
                `${id} not found.`
              );
        }
        return await leaveQuery.viewLeave(id);
    } catch (error) {
        throw error;
    }
};
const viewAllLeaves = async()=>{
    try {
        return await leaveQuery.viewAllLeaves();
    } catch (error) {
        throw error;
    }
};

const updateFacultyLeaveStatus= async ( facultyId)=> {
    try {
        
        if(!await leaveQuery.updateFacultyLeaveStatus(id)){
            return `${id} is not associted with any id. Please check...`
        }
       return await facultyModel.findByIdAndUpdate(facultyId);

    } catch (error) {
        console.error("Error approving/rejecting faculty leave:", error);
        throw error;
    }
}


module.exports = {
    saveLeave,
    viewLeave,
    viewAllLeaves,
    updateFacultyLeaveStatus
}
const placementQuery = require("../queries/placement.query");
const saveCompany = async(body, session)=>{
    try {
        return await placementQuery.saveCompany(body, session);
    } catch (error) {
        throw error;
    }
}
const viewCompany = async(id)=>{
    try {
        return await placementQuery.viewCompany(id);
    } catch (error) {
        throw error;
    }
}
const viewAllCompany = async()=>{
    try {
        return await placementQuery.viewAllCompany();
    } catch (error) {
        throw error;
    }
}
const updateCompany = async(id, body)=>{
    try {
        return await placementQuery.updateCompany(id, body);
    } catch (error) {
     throw error;   
    }
}
const deleteCompany = async(id)=>{
    try {
        return await placementQuery.deleteCompany(id);
    } catch (error) {
        throw error;
    }
}
module.exports = {
saveCompany,
viewCompany,
viewAllCompany,
updateCompany,
deleteCompany
}
const batchQuery = require("../queries/batch.query");
const saveBatch = async(body, session)=>{
    try {
        const{
            batchName,
            startDate,
            endDate,
            time,
            year} = body;
          
          const batchData = {
            batchName,
            startDate,
            endDate,
            time,
            year
          };
        return await batchQuery.saveBatch(batchData, session);
    } catch (error) {
        throw error;
    }
};
const viewBatch = async(id)=>{
    try {
        if(!id){
            throw customException.error(
                statusCode.NOT_FOUND,
                null,
                `${id} not found.`
              );
        }
        return await batchQuery.viewBatch(id);
    } catch (error) {
        throw error;
    }
};
const viewAllBatches = async()=>{
    try {
        const allBatchs = await batchQuery.viewAllBatches();

        return allBatchs
    } catch (error) {
        throw error;
    }
};
const updateBatch = async(id, body)=>{
    try {
        if(!id){
            return 'Please write the batch ID...'
        }
        if(!await batchQuery.updateBatch(id)){
            return `${id} is not associted with any id. Please check...`
        }
        const updatedBatch = await batchQuery.updateBatch(id,body);
        return updatedBatch;
    } catch (error) {
     throw error;   
    }
};
const deleteBatch = async(id)=>{
    try {
      if (!id) {
        return "Please write the batch ID...";
      }
      const result = await batchQuery.deleteBatch(id);
      return `${result}\nBatch deleted successfully.`;
        
    } catch (error) {
        throw error;
    }
};
module.exports = {
    saveBatch,
    viewBatch,
    viewAllBatches,
    updateBatch,
    deleteBatch
}
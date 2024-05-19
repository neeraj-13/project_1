const eventQuery = require("../queries/event.query");
const saveEvent = async(body, session)=>{
    try {
        const{
            image,
            title,
            description,
            date} = body;
          
          const eventData = {
            image,
            title,
            description,
            date
          };
        return await eventQuery.saveEvent(eventData, session);
    } catch (error) {
        throw error;
    }
};
const viewEvent = async(id)=>{
    try {
        if(!id){
            throw customException.error(
                statusCode.NOT_FOUND,
                null,
                `${id} not found.`
              );
        }
        return await eventQuery.viewEvent(id);
    } catch (error) {
        throw error;
    }
};
const viewAllEvents = async()=>{
    try {
        return await eventQuery.viewAllEvents();
    } catch (error) {
        throw error;
    }
};
const updateEvent = async(id, body)=>{
    try {
        if(!id){
            return 'Please write the event ID...'
        }
        if(!await eventQuery.updateEvent(id)){
            return `${id} is not associted with any id. Please check...`
        }
         return await eventQuery.updateEvent(id,body);
    } catch (error) {
     throw error;   
    }
};
const deleteEvent = async(id)=>{
    try {
      if (!id) {
        return "Please write the event ID...";
      }
      const result = await eventQuery.deleteEvent(id);
      return `${result}\nEvent deleted successfully.`;
        
    } catch (error) {
        throw error;
    }
};


module.exports = {
    saveEvent,
    viewEvent,
    viewAllEvents,
    updateEvent,
    deleteEvent
}
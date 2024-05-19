const feedbackQuery=require("../queries/feedback.query")
const saveFeedback = async(body, session)=>{
    try {
        const{studentFeedback,othersFeedback}=body;
        const feedbackDetails={studentFeedback,othersFeedback};
        return await feedbackQuery.saveFeedback(feedbackDetails, session);
    } catch (error) {
        throw error;
    }
}


module.exports={
    saveFeedback
}
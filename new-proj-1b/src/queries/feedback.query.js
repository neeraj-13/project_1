const {facultyFeedback}= require("../models/feedback.model");

const saveFeedback = async (body, session) => {
  try {
    const feedback = await new facultyFeedback(body);
    feedback.save(session);
    return feedback;
  } catch (error) {
    throw error;
  }
};


module.exports={saveFeedback};


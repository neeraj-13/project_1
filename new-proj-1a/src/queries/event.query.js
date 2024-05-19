const { eventModel } = require("../models/event.model");
const saveEvent = async (body, session) => {
  try {
    const event = await new eventModel(body);
    event.save(session);
    return event;
  } catch (error) {
    throw error;
  }
};
const viewEvent = async (id) => {
  try {
     return await eventModel.findById(id);;
  } catch (error) {
    throw error;
  }
};
const viewAllEvents = async () => {
  try {
    return await eventModel.find();
  } catch (error) {
    throw error;
  }
};
const updateEvent = async (id, body) => {
  try {
    return await eventModel.findByIdAndUpdate(id, body, { new: true });
  } catch (error) {
    throw error;
  }
};
const deleteEvent = async (id) => {
  try {
    return await eventModel.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
module.exports = {
    saveEvent,
    viewEvent,
    viewAllEvents,
    updateEvent,
    deleteEvent,
};

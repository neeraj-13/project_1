const Joi = require('joi').extend(require('@joi/date'));
const response = require("../../commons/response/response");
const statusCode = require("../../commons/utils/statusCode");

const dashboardSchema = Joi.object({
  facultyDetails: Joi.string(),
  announcement: Joi.string()
});


const uploadMarkSchema = Joi.object({
  subject: Joi.string().required(),
  subjectCode: Joi.string().required(),
  mark: Joi.number().required(),
  grade: Joi.number().integer().min(0),
  totGrade: Joi.number().required(), 
  attendance: Joi.number().required(),
  cgpa: Joi.number().precision(2).required() 
});

const leaveSchema = Joi.object({
  reason: Joi.string().required(),
  facultyId: Joi.string().required(),
  date: Joi.date().format('YYYY-MM-DD').utc(),
  decision: Joi.string().valid('pending', 'approved', 'rejected').default('pending')
});



const feedbackSchema = Joi.object({
  studentFeedback: Joi.string().required(),
  othersFeedback: Joi.string().required(),
});

const validateRequest=   async(schema,req,res,next) =>{
  try{
    await schema.validateAsync(req.body);
    next();
  }catch(error){
    return response.handleErrorResponse({
      errorCode: statusCode.BAD_REQUEST,
      message: error,
      displayMessage: { error: error.details[0].message },
     },res);
  }
}

const validateUploadMarks = async (req, res, next) => validateRequest(uploadMarkSchema, req, res, next);
const validateFacultyLeave = async (req, res, next) => validateRequest(leaveSchema, req, res, next);
const validateFeedback = async (req, res, next) => validateRequest(feedbackSchema, req, res, next);
const validateDashboard = async (req, res, next) => validateRequest(dashboardSchema, req, res, next);

module.exports = { 
  
  validateUploadMarks,
  validateFacultyLeave,
  validateFeedback,
  validateDashboard
 };

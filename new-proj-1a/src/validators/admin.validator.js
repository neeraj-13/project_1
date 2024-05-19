const Joi = require('joi').extend(require('@joi/date'));

const response = require("../../commons/response/response");
const statusCode = require("../../commons/utils/statusCode");
const courseSchema = Joi.object({
  courseName: Joi.string().required(),
  courseCode: Joi.string().required(),
  duration: Joi.string().required(),
  numberOfStudents: Joi.number().integer().min(0),
  image: Joi.string().allow('', null), 
  description: Joi.string().allow('', null) 
});
const batchSchema = Joi.object({
  batchName: Joi.string().required(),
  startDate: Joi.date().format('YYYY-MM-DD').utc(),
  endDate:Joi.date().format('YYYY-MM-DD').utc(),
  time: Joi.string().min(0).required(), 
  year: Joi.number().allow('', null).required(), 
});
const studentSchema = Joi.object({
  image: Joi.string().required(),
  isActive: Joi.boolean().required(),
  name: Joi.string().required(),
  phone: Joi.number().required(),
  sex: Joi.string().required(),
  currentSem: Joi.number().min(0).required(), 
  email: Joi.string().required(), 
  fatherName: Joi.string().required(), 
  motherName: Joi.string().required(), 
  guardianPhoneNumber: Joi.number().required(), 
  department: Joi.string().required(),  
});
const eventSchema = Joi.object({
  image: Joi.string().required(),
  description: Joi.string().required(),
  title: Joi.string().required(),
  date:Joi.date().format('YYYY-MM-DD').utc(),
});
const assignFacultySchema = Joi.object({
  facultyName: Joi.string().required(),
  subject: Joi.string().required(),
  batch: Joi.string().required(),
});
const placementSchema = Joi.object({
  companyName: Joi.string().required(),
  companyEmail: Joi.string().required(),
  companyWebsite: Joi.string().required(),
});
const mediaSchemaGallery = Joi.object({
  imgGallery: Joi.string().required(),
});

const mediaSchemaManagement = Joi.object({
  imgManagement: Joi.string().required(),
});

const announcementSchema = Joi.object({
  
  announcementTitle: Joi.string().required(),
  announcementDesc: Joi.string().required(),
  announcementDate: Joi.date().format('YYYY-MM-DD').utc(),
  announcementFor: Joi.string().required(),
  
});

const subjectSchema = Joi.object({
  
  subjectName: Joi.string().required(),
  subjectCode: Joi.string().required(),
  duration: Joi.string().required(),
  batchName: Joi.string().required(),
  
});



const facultySchema = Joi.object({
  facName: Joi.string().required(),
  facPhone: Joi.number().required(),
  sex: Joi.string().required(),
  relationship: Joi.string().required(), 
  facultyId: Joi.string().required(), 
  emailId: Joi.string().required(), 
  facFatherName: Joi.string().required(), 
  facSpouseName: Joi.string().required(),
  guardianPhoneNum: Joi.number().required(),  
  facDepartment: Joi.string().required(),  
  facImage: Joi.string().required(),  
  isActive: Joi.boolean().required(),
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
const validateCourse = async (req, res, next) => validateRequest(courseSchema, req, res, next)
const validateBatch = async (req, res, next) => validateRequest(batchSchema, req, res, next)
const validateStudent = async (req, res, next) => validateRequest(studentSchema, req, res, next)
const validateEvent = async (req, res, next) => validateRequest(eventSchema, req, res, next)
const validateFaculty = async (req, res, next) => validateRequest(assignFacultySchema, req, res, next)
const validatePlacemnt = async (req, res, next) => validateRequest(placementSchema, req, res, next)
const validateMediaGallery = async (req, res, next) => validateRequest(mediaSchemaGallery, req, res, next)
const validateMediaManagement= async (req, res, next) => validateRequest(mediaSchemaManagement, req, res, next)
const validateAnnouncement= async (req, res, next) => validateRequest(announcementSchema, req, res, next)
const validateSubject= async (req, res, next) => validateRequest(subjectSchema, req, res, next)
const validateFacultySeperate= async (req, res, next) => validateRequest(facultySchema, req, res, next)

module.exports = { 
  validateCourse,
  validateBatch,
  validateStudent,
  validateEvent,
  validateFaculty,
  validatePlacemnt,
  validateMediaGallery,
  validateMediaManagement,
  validateAnnouncement,
  validateSubject,
  validateFacultySeperate
 };

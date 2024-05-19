// mongodb+srv://hypersage:s764YLNmH75mOea1@hypersage.iwnnqlb.mongodb.net/kidtryz?retryWrites=true&w=majority&appName=hypersage
const facultyService = require("../services/faculty.service")
const announcementService = require("../services/announcement.service")
const uploadMarksService = require("../services/uploadMarks.service")
const leaveService = require("../services/leave.service")
const feedbackService = require("../services/feedback.service")
const auth = require("../middleware/auth")
const StatusCode = require("../../commons/utils/statusCode");
const response = require("../../commons/response/response");
const mongoose = require("mongoose");

const login = async (req, res) => {
  try {
    const result = await facultyService.login(req.body);
    return response.handleSuccessResponse(
      result,
      res,
      "Login Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res,
      error
    );
  }
};

const viewFacultyDetails = async (req, res) => {
  try {
    const facultId = req.body.facultyId
    const facultyDetails = await facultyService.getFacultyByEmail(facultId);
    return response.handleSuccessResponse(
      facultyDetails,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res,
      error
    );
  }
};
const viewAnnouncement = async (req, res) => {
  try {
    const result = await announcementService.getAnnouncementByTitle();
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res,
      error
    );
  }
};
const saveUploadMarks = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await uploadMarksService.saveUploadMarks(req.body, session);
    await session.commitTransaction();
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully"
    );
  } catch (error) {
    await session.abortTransaction();
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  } finally {
    session.endSession();
  }
};
const viewUploadMarks = async (req, res) => {
  try {
    const result = await uploadMarksService.viewUploadMarks(req.params.id);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res,
      error
    );
  }
};
const viewAllUploadMarks = async (req, res) => {
  try {
    const result = await uploadMarksService.viewAllUploadMarks();
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res,
      error
    );
  }
};
const updateUploadMarks = async (req, res) => {
  try {
    const result = await uploadMarksService.updateUploadMarks(req.params.id, req.body);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
};
const saveLeave = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const { reason } = req.body;
  
    const leaveRequest = await leaveService.saveLeave(reason, session);
    
    await session.commitTransaction();
    
    return response.handleSuccessResponse(
      leaveRequest,
      res,
      "Leave request posted successfully"
    );
  } catch (error) {
    await session.abortTransaction();
    console.error("Error posting leave request:", error);
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  } finally {
    session.endSession();
  }
};
const viewLeave = async (req, res) => {
  try {
    const result = await leaveService.viewLeave(req.params.id);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res,
      error
    );
  }
};
const viewAllLeaves = async (req, res) => {
  try {
    const result = await leaveService.viewAllLeaves();
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res,
      error
    );
  }
};
const updateFacultyLeaveStatus = async (req, res) => {
  try {
    const result = await leaveService.updateFacultyLeaveStatus(req.params.id, req.body);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
};
const saveFeedback = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const { reason } = req.body;
  
    const feedback = await feedbackService.saveFeedback(reason, session);
    
    await session.commitTransaction();
    
    return response.handleSuccessResponse(
      feedback,
      res,
      "Feedback posted successfully"
    );
  } catch (error) {
    await session.abortTransaction();
    console.error("Error posting leave request:", error);
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  } finally {
    session.endSession();
  }
};
module.exports = {
  /**
   * @swagger
   * tags:
   *   name: Login
   *   description: User login APIs
   *
   * /login:
   *   post:
   *     summary: Faculty login
   *     description: Use this API to authenticate a Faculty
   *     tags:
   *       - Login
   *     produces:
   *       - application/json
   *     consumes:
   *       - application/json
   *     parameters:
   *       - in: body
   *         name: credentials
   *         description: The user credentials for login
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             name:
   *               type: string
   *               description: The name of the faculty
   *               example: Bijay
   *             facultyId:
   *               type: string
   *               description: The email address of the faculty
   *               example: Bij123
   *     responses:
   *       200:
   *         description: Successful response indicating successful login
   *       401:
   *         description: Unauthorized - Invalid credentials
   *       500:
   *         description: Internal server error
   */
  login,

  /**
   * @swagger
   * tags:
   *   name: Dashboard
   *   description: APIs for viewing Faculty Details by id
   *
   * /faculty-view-faculty-details:
   *   get:
   *     summary: View faculty details by id
   *     description: Use this API to view Faculty Details by ID
   *     tags:
   *       - Dashboard
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         description: Access token for Authentication.
   *         type: string
   *         required: true
   *       - in: path
   *         name: _id
   *         description: Id of the faculty to view the details
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Successful response containing the faculty details
   *         schema:
   *           type: object
   *           properties:
   *             _id :
   *               type: string
   *               description: The id of the faculty
   *             facName:
   *               type: string
   *               description: The faculty name
   *             facPhone:
   *               type: Number
   *               description: Faculty phone number
   *             sex:
   *               type: string
   *               description: Gender
   *             relationship:
   *               type: String
   *               description: relationship
   *             facultyId:
   *               type: string
   *               description: faculty id given by admin
   *             emailId:
   *               type: string
   *             facFatherName:
   *               type: String
   *               description: Faculty father's name
   *             facSpouseName:
   *               type: string
   *               description: faculty spouse's name
   *             guardianPhoneNum:
   *               type: Number
   *               description: faculty guardian's number
   *             facDepartment:
   *               type: String
   *               description: faculty department
   *             facImage: 
   *               type: string
   *               description: faculty image
   *             isActive:
   *               type: Boolean
   *               description: true or false
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Marks not found
   *       500:
   *         description: Internal Server Error - Failed to retrieve marks details
   */
    viewFacultyDetails,


  /**
   * @swagger
   * tags:
   *   name: Dashboard
   *   description: APIs for Viewing all Announcements from Admin 
   *
   * /faculty-view-announcement:
   *   get:
   *     summary: View Announcements from Admin 
   *     description: Use this API to view all announcements
   *     tags:
   *       - Dashboard
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         description: Access token for Authentication.
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Successful response containing the course details
   *         schema:
   *           type: object
   *           properties:
   *             announcementTitle:
   *               type: string
   *               description: Announcement title
   *             announcementDesc:
   *               type: string
   *               description: Announcement description
   *             announcementDate:
   *               type: string
   *               description: Announcement date
   *             announcementFor:
   *               type: string
   *               description: Announcement reason
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Marks not found
   *       500:
   *         description: Internal Server Error - Failed to retrieve marks details
   */
  viewAnnouncement,
  
  /**
   * @swagger
   * tags:
   *   name: Update Marks
   *   description: APIs for updating marks
   *
   * /faculty-add-update-marks:
   *   post:
   *     summary: Save new update marks
   *     description: Use this API to save new marks
   *     tags:
   *       - Update Marks
   *     produces:
   *       - application/json
   *     consumes:
   *       - application/json
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         description: Access token for Authentication.
   *         type: string
   *         required: true
   *       - in: body
   *         name: marks
   *         description: The marks object to save
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             subject:
   *               type: string
   *               description: The name of the subject
   *               example: Digital Signal Prossesing
   *             subjectCode:
   *               type: string
   *               description: The code of the subject
   *               example: 19EC3DCDSP
   *             mark:
   *               type: number
   *               description: Marks given by faculty
   *               example: 99
   *             grade:
   *               type: number
   *               description: Grade given by faculty
   *               example: 9
   *             totGrade:
   *               type: number
   *               description: Total Grade given by faculty
   *               example: 8
   *             attendance:
   *               type: number
   *               description: Attendance of Student
   *               example: 80
   *             cgpa:
   *               type: number
   *               description: CGPA of Student
   *               example: 8
   *     responses:
   *       200:
   *         description: Successful response indicating the Marks has been saved
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the Marks due to server issues
   */
 saveUploadMarks,
  /**
   * @swagger
   * tags:
   *   name: Update Marks
   *   description: APIs for viewing marks by id
   *
   * /faculty-view-update-marks/{id}:
   *   get:
   *     summary: View update marks by id
   *     description: Use this API to view update marks by its ID
   *     tags:
   *       - Update Marks
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         description: Access token for Authentication.
   *         type: string
   *         required: true
   *       - in: path
   *         name: id
   *         description: ID of the course to view
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Successful response containing the course details
   *         schema:
   *           type: object
   *           properties:
   *             _id:
   *               type: string
   *               description: The unique identifier of the course
   *             subject:
   *               type: string
   *               description: The name of the course
   *               example: Digital Signal Prossesing
   *             subjectCode:
   *               type: string
   *               description: The code of the subject
   *               example: 19EC3DCDSP
   *             mark:
   *               type: string
   *               description: Marks given by faculty
   *               example: 99
   *             grade:
   *               type: number
   *               description: Grade given by faculty
   *               example: 9
   *             totGrade:
   *               type: string
   *               description: Total Grade given by faculty
   *               example: 8
   *             attendance:
   *               type: Number
   *               description: Attendance of Student
   *               example: This course provides an introduction to business administration.
   *             cgpa:
   *               type: Number
   *               description: CGPA of Student
   *               example: 8      
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Marks not found
   *       500:
   *         description: Internal Server Error - Failed to retrieve marks details
   */
 viewUploadMarks,

  /**
   * @swagger
   * tags:
   *   name: Update Marks
   *   description: APIs for viewing marks 
   *
   * /faculty-view-all-update-marks:
   *   get:
   *     summary: View all courses
   *     description: Use this API to view details of all courses
   *     tags:
   *       - Update Marks
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         description: Access token for Authentication.
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Successful response containing details of all courses
   *         schema:
   *           type: array
   *           items:
   *             type: object
   *             properties:
   *               _id:
   *                 type: string
   *                 description: The unique identifier of the course
   *               subject:
   *                 type: string
   *                 description: The name of the subject
   *                 example: Digital Signal Prossesing
   *               subjectCode:
   *                 type: string
   *                 description: The code of the subject
   *                 example: 19EC3DCDSP
   *               mark:
   *                 type: number
   *                 description: Marks given by faculty
   *                 example: 99
   *               grade:
   *                 type: number
   *                 description: Grade given by faculty
   *                 example: 9
   *               totGrade:
   *                 type: number
   *                 description: Total Grade given by faculty
   *                 example: 8
   *               attendance:
   *                 type: number
   *                 description: Attendance of Student
   *                 example: 80
   *               cgpa:
   *                 type: Number
   *                 description: CGPA of Student
   *                 example: 8
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to retrieve Marks details
   */
 viewAllUploadMarks,

  /**
   * @swagger
   * tags:
   *   name: Update Marks
   *   description: API for updating marks
   *
   * /faculty-update-update-marks/{id}:
   *   put:
   *     summary: Update a course by ID
   *     description: Use this API to update details of a course by its ID
   *     tags:
   *       - Update Marks
   *     produces:
   *       - application/json
   *     consumes:
   *       - application/json
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         description: Access token for Authentication.
   *         type: string
   *         required: true
   *       - in: path
   *         name: id
   *         description: ID of the course to update
   *         type: string
   *         required: true
   *       - in: body
   *         name: marks
   *         description: The updated course object
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             subject:
   *                type: string
   *                description: The name of the course
   *                example: DSDV
   *             subjectCode:
   *                type: string
   *                description: The code of the course
   *                example: 19EC3DCDSDV
   *             mark:
   *                type: Number
   *                description: Marks given by faculty
   *                example: 100
   *             grade:
   *                type: Number
   *                description: Grade given by faculty
   *                example: 10
   *             totGrade:
   *                type: number
   *                description: Total Grade given by faculty
   *                example: 10
   *             attendance:
   *                type: number
   *                description: Attendance of Student
   *                example: 100
   *             cgpa:
   *                type: number
   *                description: CGPA of Student
   *                example: 7.9    
   *     responses:
   *       200:
   *         description: Successful response indicating the course has been updated
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Course not found
   *       500:
   *         description: Internal Server Error - Failed to update the Marks due to server issues
   */
 updateUploadMarks,


   /**
   * @swagger
   * tags:
   *   name: Leaves
   *   description: APIs for Taking Leave
   *
   * /faculty-add-faculty-leave:
   *   post:
   *     summary: Save new Leave
   *     description: Use this API to save new Leave
   *     tags:
   *       - Leaves
   *     produces:
   *       - application/json
   *     consumes:
   *       - application/json
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         description: Access token for Authentication.
   *         type: string
   *         required: true
   *       - in: body
   *         name: marks
   *         description: The Leave object to save
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             reason:
   *               type: string
   *               description: The Reason for Leave
   *               example: Sickness
   *             facultyId:
   *               type: string
   *               description: The id of the faculty
   *               example: ABCDE
   *             dates:
   *               type: Date
   *               format: date
   *               description: Date for taking Leave
   *               example: 2024-04-01
   *             decision:
   *               type: number
   *               description: Granting for leave or not
   *               example: Pending
   *     responses:
   *       200:
   *         description: Successful response indicating the Marks has been saved
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the Marks due to server issues
   */
 saveLeave,

     /**
   * @swagger
   * tags:
   *   name: Leaves
   *   description: APIs for Taking Leave
   *
   * /faculty-view-faculty-leave/{id}:
   *   get:
   *     summary: View Leave Status
   *     description: Use this API to view leave by its ID
   *     tags:
   *       - Leaves
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         description: Access token for Authentication.
   *         type: string
   *         required: true
   *       - in: path
   *         name: id
   *         description: ID of the faculty to view leave status
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Successful response containing the course details
   *         schema:
   *           type: object
   *           properties:
   *             reason:
   *               type: string
   *               description: Announcement
   *               example: Sickness
   *             facultyId:
   *               type: string
   *               description: The code of the subject
   *               example: ABCDE    
   *             dates:
   *               type: Date
   *               format: date
   *               description: The code of the subject
   *               example: 2024-04-01    
   *             decision:
   *               type: string
   *               description: The code of the subject
   *               example: Pending    
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Marks not found
   *       500:
   *         description: Internal Server Error - Failed to retrieve marks details
   */
 viewLeave,

   /**
   * @swagger
   * tags:
   *   name: Leaves
   *   description: APIs for viewing all Leaves
   *
   * /faculty-view-all-faculty-leaves:
   *   get:
   *     summary: View all Leaves
   *     description: Use this API to view details of all leaves
   *     tags:
   *       - Leaves
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         description: Access token for Authentication.
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Successful response containing details of all courses
   *         schema:
   *           type: array
   *           items:
   *             type: object
   *             properties:
   *               _id:
   *                 type: string
   *                 description: The unique identifier of the course
   *               reason:
   *                 type: string
   *                 description: The Reason for Leave
   *                 example: Sickness
   *               facultyId:
   *                 type: string
   *                 description: The id of the faculty
   *                 example: ABCDE
   *               dates:
   *                 type: Date
   *                 format: date
   *                 description: Date for taking Leave
   *                 example: 2024-04-01
   *               decision:
   *                 type: number
   *                 description: Granting for leave or not
   *                 example: Pending
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to retrieve Marks details
   */
 viewAllLeaves,

   /**
   * @swagger
   * tags:
   *   name: Leaves
   *   description: API for updating leaves
   *
   * /faculty-update-faculty-leave/{id}:
   *   put:
   *     summary: Update the leave by ID
   *     description: Use this API to update details the leave by its ID
   *     tags:
   *       - Leaves
   *     produces:
   *       - application/json
   *     consumes:
   *       - application/json
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         description: Access token for Authentication.
   *         type: string
   *         required: true
   *       - in: path
   *         name: id
   *         description: ID of the course to update
   *         type: string
   *         required: true
   *       - in: body
   *         name: marks
   *         description: The updated course object
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             reason:
   *                type: string
   *                description: The Reason for Leave
   *                example: Sickness
   *             facultyId:
   *                type: string
   *                description: The id of the faculty
   *                example: ABCDE
   *             dates:
   *                type: Date
   *                format: date
   *                description: Date for taking Leave
   *                example: 2024-04-01
   *             decision:
   *                type: Number
   *                description: Granting for leave or not
   *                example: Pending 
   *     responses:
   *       200:
   *         description: Successful response indicating the course has been updated
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Course not found
   *       500:
   *         description: Internal Server Error - Failed to update the Marks due to server issues
   */
 updateFacultyLeaveStatus,

 /**
  * @swagger
  * tags:
  *   name: Feedback
  *   description: APIs for updating feedback
  *
  * /faculty-add-feedback:
  *   post:
  *     summary: Save feedbacks
  *     description: Use this API to save feedback
  *     tags:
  *       - Feedback
  *     produces:
  *       - application/json
  *     consumes:
  *       - application/json
  *     parameters:
  *       - in: header
  *         name: Authorization
  *         description: Access token for Authentication.
  *         type: string
  *         required: true
  *       - in: body
  *         name: feedback
  *         description: The feedback object to save
  *         required: true
  *         schema:
  *           type: object
  *           properties:
  *             studentFeedback:
  *               type: string
  *               description: Student's feedback
  *               example: ABCD....
  *             othersFeedback:
  *               type: string
  *               description: Other's feedback
  *               example: abcd....
  *     responses:
  *       200:
  *         description: Successful response indicating the Marks has been saved
  *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the Marks due to server issues
   */
 saveFeedback

};

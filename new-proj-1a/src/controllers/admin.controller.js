const courseService = require("../services/course.service");
const loginService = require("../services/admin.login.service");
const batchService = require("../services/batch.service")
const studentService = require("../services/student.service")
const eventService = require("../services/event.service")
const assignFacultyService =require("../services/assignFaculty.service")
const placementService = require("../services/placement.service")
const mediaGalleryServices = require("../services/mediaGallery.service")
const mediaManagementService = require("../services/mediaManagement.service")
const announcementService = require("../services/announcement.service")
const facultyService = require("../services/faculty.service")
const subjectService = require("../services/subject.service")
const StatusCode = require("../../commons/utils/statusCode");
const response = require("../../commons/response/response");
const mongoose = require("mongoose");
const addAdmin = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await loginService.addAdmin(req.body, session);
    await session.commitTransaction();
    return response.handleSuccessResponse(
      result,
      res,
      "Admin save Successfully",
      "Admin save Successfully"
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
const login = async (req, res) => {
  try {
    const result = await loginService.login(req.body);
    return response.handleSuccessResponse(
      result,
      res,
      "Login Successfully",
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
const saveCourse = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await courseService.saveCourse(req.body, session);
    await session.commitTransaction();
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
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
const viewCourse = async (req, res) => {
  try {
    const result = await courseService.viewCourse(req.params.id);
    return response.handleSuccessResponse(
      result,
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
const viewAllCourses = async (req, res) => {
  try {
    const result = await courseService.viewAllCourses();
    return response.handleSuccessResponse(
      result,
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
const viewTotalstudents = async (req, res) => {
  try {
    const result = await courseService.viewTotalstudents();
    return response.handleSuccessResponse(
      result,
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
const viewTotalBatches = async (req, res) => {
  try {
    const result = await courseService.viewTotalBatches();
    return response.handleSuccessResponse(
      result,
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
const viewTotalSubjects = async (req, res) => {
  try {
    const result = await courseService.viewTotalSubjects();
    return response.handleSuccessResponse(
      result,
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
const updateCourse = async (req, res) => {
  try {
    const result = await courseService.updateCourse(req.params.id, req.body);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
};
const deleteCourse = async (req, res) => {
  try {
    const result = await courseService.deleteCourse(req.params.id);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
};
const saveBatches = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await batchService.saveBatch(req.body, session);
    await session.commitTransaction();
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
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
const viewBatch = async (req, res) => {
  try {
    const result = await batchService.viewBatch(req.params.id);
    return response.handleSuccessResponse(
      result,
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
const viewAllBatches = async (req, res) => {
  try {
    const result = await batchService.viewAllBatches();
    return response.handleSuccessResponse(
      result,
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
const updateBatch = async (req, res) => {
  try {
    const result = await batchService.updateBatch(req.params.id, req.body);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
};
const deleteBatch = async (req, res) => {
  try {
    const result = await batchService.deleteBatch(req.params.id);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
};
const saveStudent = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await studentService.saveStudent(req.body, session);
    await session.commitTransaction();
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
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
const viewStudent = async (req, res) => {
  try {
    const result = await studentService.viewStudent(req.params.id);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    console.log(error)
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res,
      error
    );
  }
};
const viewAllStudents = async (req, res) => {
  try {
    const result = await studentService.viewAllStudents();
    return response.handleSuccessResponse(
      result,
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
const updateStudent = async (req, res) => {
  try {
    const result = await studentService.updateStudent(req.params.id, req.body);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
};
const deleteStudent = async (req, res) => {
  try {
    const result = await studentService.deleteStudent(req.params.id);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
};
const saveEvent = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await eventService.saveEvent(req.body, session);
    await session.commitTransaction();
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
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
const viewEvent = async (req, res) => {
  try {

    const result = await eventService.viewEvent(req.params.id);
    return response.handleSuccessResponse(
      result,
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
const viewAllEvents = async (req, res) => {
  try {
    const result = await eventService.viewAllEvents();
    return response.handleSuccessResponse(
      result,
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
const updateEvent = async (req, res) => {
  try {
    const result = await eventService.updateEvent(req.params.id, req.body);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
};
const deleteEvent = async (req, res) => {
  try {
    const result = await eventService.deleteEvent(req.params.id);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
};
const saveAssignFaculty = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await assignFacultyService.saveFaculty(req.body, session);
    await session.commitTransaction();
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
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
const viewAssignedFaculty = async (req, res) => {
  try {
    const result = await assignFacultyService.viewFaculty(req.params.id);
    return response.handleSuccessResponse(
      result,
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
const viewAllAssignedFaculties = async (req, res) => {
  try {
    const result = await assignFacultyService.viewAllFaculty();
    return response.handleSuccessResponse(
      result,
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
const updateAssignedFaculty = async (req, res) => {
  try {
    const result = await assignFacultyService.updateFaculty(req.params.id, req.body);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
};
const deleteAssignedFaculty = async (req, res) => {
  try {
    const result = await assignFacultyService.deleteFaculty(req.params.id);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
};
const saveCompany = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await placementService.saveCompany(req.body, session);
    await session.commitTransaction();
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
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
const viewCompany = async (req, res) => {
  try {
    const result = await placementService.viewCompany(req.params.id);
    return response.handleSuccessResponse(
      result,
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
const viewAllCompany = async (req, res) => {
  try {
    const result = await placementService.viewAllCompany();
    return response.handleSuccessResponse(
      result,
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
const updateCompany = async (req, res) => {
  try {
    const result = await placementService.updateCompany(req.params.id, req.body);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
};
const deleteCompany = async (req, res) => {
  try {
    const result = await placementService.deleteCompany(req.params.id);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
};
const addImageInGallery= async(req,res)=>{
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await mediaGalleryServices.saveImage(req.body, session);
    await session.commitTransaction();
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
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
const viewAllImagesinGallery = async (req, res) => {
  try {
    const result = await mediaGalleryServices.viewAllImage();
    return response.handleSuccessResponse(
      result,
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
const addImageInManagement= async(req,res)=>{
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await mediaManagementService.saveImage(req.body, session);
    await session.commitTransaction();
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
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
const viewAllImagesinManagement = async (req, res) => {
  try {
    const result = await mediaManagementService.viewAllImage();
    return response.handleSuccessResponse(
      result,
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
}
const saveSubject = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await subjectService.saveSubject(req.body,session);
    await session.commitTransaction();
    session.endSession();
    return response.handleSuccessResponse(
      result,
      res,
      "Subject saved successfully",
      "Subject saved successfully"
    );
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res,
      error
    );
  }
}
const getAllSubject = async (req, res) => {
  try {
    const result = await subjectService.getAllSubject()
    return response.handleSuccessResponse(
      result,
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
const updateSubject = async (req, res) => {
  try {
    const result = await subjectService.updateSubject(req.params.id, req.body);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
};
const deleteSubjectById = async (req, res) => {
  try {
    const result = await subjectService.deleteSubById(req.params.id);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
}
const addFaculty = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await facultyService.saveFaculty(
      req.body,
      session
    );

    await session.commitTransaction();
    session.endSession();
    return response.handleSuccessResponse(
      result,
      res,
      "Subject saved successfully",
      "Subject saved successfully"
    );
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res,
      error
    );
  }
}
const getFacultyById = async (req, res) => {
  try {
    const result = await facultyService.getFacultyById(req.params.id)
    return response.handleSuccessResponse(
      result,
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
}
const getAllFaculty = async (req, res) => {
  try {
    const result = await facultyService.getAllFaculty()
    return response.handleSuccessResponse(
      result,
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
}
const getTotalFaculty = async (req, res) => {
  try {
    const result = await facultyService.getTotalFaculty()
    return response.handleSuccessResponse(
      result,
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
}
const updateFaculty = async (req, res) => {
  try {
    const result = await facultyService.updateFaculty(req.params.id, req.body);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
}
const deleteFaculty = async (req, res) => {
  try {
    const result = await facultyService.deleteFacultyById(req.params.id);
    return response.handleSuccessResponse(
      result,
      res,
      "Successfully",
      "Successfully"
    );
  } catch (error) {
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res
    );
  }
}
const addAnnouncement = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await announcementService.addAnnouncement(
      req.body,
      session
    );
    await session.commitTransaction();
    session.endSession();
    return response.handleSuccessResponse(
      result,
      res,
      "Subject saved successfully",
      "Subject saved successfully"
    );
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return response.handleErrorResponse(
      { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
      res,
      error
    );
  }
}
const getAnnouncementById = async (req, res) => {
  try {
    const result = await announcementService.getAnnouncementById(req.params.id)
    return response.handleSuccessResponse(
      result,
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
}
const getAllAnnouncement = async (req, res) => {
  try {
    const result = await announcementService.getAllAnnouncement()
    return response.handleSuccessResponse(
      result,
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
}
const updateAnnouncement = async (req, res) => {
  try {
    const result = await announcementService.updateAnnouncemnt(req.params.id, req.body)
    return response.handleSuccessResponse(
      result,
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
}
const deleteAnnouncement = async (req, res) => {
  try {
    const result = await announcementService.deleteAnnouncement(req.params.id)
    return response.handleSuccessResponse(
      result,
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
}
module.exports = {
  addAdmin,
  /**
   * @swagger
   * tags:
   *   name: Authentication
   *   description: User authentication APIs
   *
   * /login:
   *   post:
   *     summary: Admin login
   *     description: Use this API to authenticate a Admin
   *     tags:
   *       - Authentication
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
   *             username:
   *               type: string
   *               format: email
   *               description: The username or email address of the Admin
   *               example: qwerty@test.com
   *             password:
   *               type: string
   *               description: The password of the Admin
   *               example: password
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
   *   name: Course Management
   *   description: APIs for managing courses
   *
   * /admin-add-course:
   *   post:
   *     summary: Save a new course
   *     description: Use this API to save a new course
   *     tags:
   *       - Course Management
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
   *         name: course
   *         description: The course object to save
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             courseName:
   *               type: string
   *               description: The name of the course
   *               example: BBA
   *             courseCode:
   *               type: string
   *               description: The code of the course
   *               example: CS101
   *             duration:
   *               type: string
   *               description: The duration of the course
   *               example: 10 weeks
   *             numberOfStudents:
   *               type: number
   *               description: The number of students enrolled in the course
   *               example: 0
   *             image:
   *               type: string
   *               description: URL of the course image
   *               example: https://example.com/course_image.jpg
   *             description:
   *               type: string
   *               description: Description of the course
   *               example: This course provides an introduction to business administration.
   *     responses:
   *       200:
   *         description: Successful response indicating the course has been saved
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the course due to server issues
   */
  saveCourse,
  /**
   * @swagger
   * tags:
   *   name: Course Management
   *   description: APIs for managing courses
   *
   * /admin-view-course/{id}:
   *   get:
   *     summary: View course details by ID
   *     description: Use this API to view details of a course by its ID
   *     tags:
   *       - Course Management
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
   *             courseName:
   *               type: string
   *               description: The name of the course
   *             courseCode:
   *               type: string
   *               description: The code of the course
   *             duration:
   *               type: string
   *               description: The duration of the course
   *             numberOfStudents:
   *               type: number
   *               description: The number of students enrolled in the course
   *             image:
   *               type: string
   *               description: URL of the course image
   *             description:
   *               type: string
   *               description: Description of the course
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Course not found
   *       500:
   *         description: Internal Server Error - Failed to retrieve course details
   */
  viewCourse,
  /**
   * @swagger
   * tags:
   *   name: Course Management
   *   description: APIs for managing courses
   *
   * /admin-view-all-courses:
   *   get:
   *     summary: View all courses
   *     description: Use this API to view details of all courses
   *     tags:
   *       - Course Management
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
   *               courseName:
   *                 type: string
   *                 description: The name of the course
   *               courseCode:
   *                 type: string
   *                 description: The code of the course
   *               duration:
   *                 type: string
   *                 description: The duration of the course
   *               numberOfStudents:
   *                 type: number
   *                 description: The number of students enrolled in the course
   *               image:
   *                 type: string
   *                 description: URL of the course image
   *               description:
   *                 type: string
   *                 description: Description of the course
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to retrieve course details
   */
  viewAllCourses,

  /**
   * @swagger
   * tags:
   *   name: Course Management
   *   description: APIs for finding total number of Students Entered
   *
   * /admin-view-total-students:
   *   get:
   *     summary: View total Students
   *     description: Use this API to view details of all courses
   *     tags:
   *       - Course Management
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
   *         description: Successful response containing details of total students
   *         schema:
   *           type: array
   *           items:
   *             type: object
   *             properties:
   *               _id:
   *                 type: string
   *                 description: The unique identifier of the course
   *               image:
   *                 type: string
   *                 description: The image
   *               isActive:
   *                 type: Boolean
   *                 description: true or false
   *               name:
   *                 type: string
   *                 description: The name of the student
   *               phone:
   *                 type: number
   *                 description: The number of students 
   *               sex:
   *                 type: string
   *                 description: Gender of student
   *               currentSem:
   *                 type: Number
   *                 description: Current semester of student
   *               email:
   *                 type: string
   *                 description: email of student
   *               fatherName:
   *                 type: string
   *                 description: father's name
   *               motherName:
   *                 type: string
   *                 description: mother's name
   *               guardianPhoneNumber:
   *                 type: string
   *                 description: Guardian's phone number
   *               department:
   *                 type: string
   *                 description: Department
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to retrieve students details
   */
  viewTotalstudents,


  /**
   * @swagger
   * tags:
   *   name: Course Management
   *   description: APIs for viewing total batches
   *
   * /admin-view-total-batches:
   *   get:
   *     summary: View total batches
   *     description: Use this API to view details of total batches
   *     tags:
   *       - Course Management
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
   *         description: Successful response containing details of total batches
   *         schema:
   *           type: array
   *           items:
   *             type: object
   *             properties:
   *               _id:
   *                 type: string
   *                 description: The unique identifier of the batch
   *               batchName:
   *                 type: string
   *                 description: The name of the batch
   *               startDate:
   *                 type: Date
   *                 description: The date of batch 
   *               endDate:
   *                 type: Date
   *                 description: The end date of batch
   *               time:
   *                 type: String
   *                 description: The time taken by the batch
   *               year:
   *                 type: Number
   *                 description: the year
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to retrieve batch details
   */
  viewTotalBatches,
  
  /**
   * @swagger
   * tags:
   *   name: Course Management
   *   description: APIs for viewing all subjects
   *
   * /admin-view-total-subjects:
   *   get:
   *     summary: View total subjects
   *     description: Use this API to view details of total subjects
   *     tags:
   *       - Course Management
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
   *         description: Successful response containing details of total subjects 
   *         schema:
   *           type: array
   *           items:
   *             type: object
   *             properties:
   *               _id:
   *                 type: string
   *                 description: The unique identifier of subjects
   *               subjectName:
   *                 type: string
   *                 description: The name of the subject
   *               subjectCode:
   *                 type: string
   *                 description: The code of the subject
   *               duration:
   *                 type: string
   *                 description: The duration of the subject
   *               batchName:
   *                 type: number
   *                 description: The batch name
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to retrieve student details
   */
  viewTotalSubjects,
  /**
   * @swagger
   * tags:
   *   name: Course Management
   *   description: APIs for managing courses
   *
   * /admin-update-course/{id}:
   *   put:
   *     summary: Update a course by ID
   *     description: Use this API to update details of a course by its ID
   *     tags:
   *       - Course Management
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
   *         name: course
   *         description: The updated course object
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             courseName:
   *               type: string
   *               description: The updated name of the course
   *               example: BBA
   *             courseCode:
   *               type: string
   *               description: The updated code of the course
   *               example: CS102
   *             duration:
   *               type: string
   *               description: The updated duration of the course
   *               example: 12 weeks
   *             numberOfStudents:
   *               type: number
   *               description: The updated number of students enrolled in the course
   *               example: 20
   *             image:
   *               type: string
   *               description: URL of the updated course image
   *               example: https://example.com/updated_course_image.jpg
   *             description:
   *               type: string
   *               description: Updated description of the course
   *               example: This course provides an advanced study of business administration.
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
   *         description: Internal Server Error - Failed to update the course due to server issues
   */
  updateCourse,
  /**
   * @swagger
   * tags:
   *   name: Course Management
   *   description: APIs for managing courses
   *
   * /admin-delete-course/{id}:
   *   delete:
   *     summary: Delete a course by ID
   *     description: Use this API to delete a course by its ID
   *     tags:
   *       - Course Management
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
   *         description: ID of the course to delete
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Successful response indicating the course has been deleted
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Course not found
   *       500:
   *         description: Internal Server Error - Failed to delete the course due to server issues
   */
  deleteCourse,

/**
 * @swagger
 * /admin-add-batch:
 *   post:
 *     summary: Save a new batch
 *     description: Use this API to save a new batch
 *     tags:
 *       - Batch Management
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
 *         name: batch
 *         description: The batch object to save
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             batchName:
 *               type: string
 *               description: The name of the batch
 *               example: Batch A
 *             startDate:
 *               type: Date
 *               format: date
 *               description: The start date of the batch
 *               example: 2024-03-05
 *             endDate:
 *               type: Date
 *               format: date
 *               description: The end date of the batch
 *               example: 2024-06-05
 *             time:
 *               type: string
 *               description: The time of the batch
 *               example: 08:35
 *             year:
 *               type: number
 *               format: date
 *               description: The year of the batch
 *               example: 2024
 *     responses:
 *       200:
 *         description: Successful response indicating the batch has been saved
 *       400:
 *         description: Bad Request - Invalid input or missing required fields
 *       401:
 *         description: Unauthorized - Missing or invalid authentication token
 *       500:
 *         description: Internal Server Error - Failed to save the batch due to server issues
 */ 
saveBatches,

/**
 * @swagger
 * /admin-view-batch/{id}:
 *   get:
 *     summary: View batch details by ID
 *     description: Use this API to view details of a batch by its ID
 *     tags:
 *       - Batch Management
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
 *         description: ID of the batch to view
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Successful response containing the batch details
 *         schema:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: The unique identifier of the batch
 *             batchName:
 *               type: string
 *               description: The name of the batch
 *             startDate:
 *               type: string
 *               format: date
 *               description: The start date of the batch
 *             endDate:
 *               type: string
 *               format: date
 *               description: The end date of the batch
 *             courseId:
 *               type: string
 *               description: The ID of the course associated with the batch
 *       400:
 *         description: Bad Request - Invalid input or missing required fields
 *       401:
 *         description: Unauthorized - Missing or invalid authentication token
 *       404:
 *         description: Batch not found
 *       500:
 *         description: Internal Server Error - Failed to retrieve batch details
 */
viewBatch,

/**
* @swagger
* /admin-view-all-batches:
*   get:
*     summary: View all batches
*     description: Use this API to view details of all batches
*     tags:
*       - Batch Management
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
*         description: Successful response containing details of all batches
*         schema:
*           type: array
*           items:
*             type: object
*             properties:
*               _id:
*                 type: string
*                 description: The unique identifier of the batch
*               batchName:
*                 type: string
*                 description: The name of the batch
*               startDate:
*                 type: string
*                 format: date
*                 description: The start date of the batch
*               endDate:
*                 type: string
*                 format: date
*                 description: The end date of the batch
*               courseId:
*                 type: string
*                 description: The ID of the course associated with the batch
*       401:
*         description: Unauthorized - Missing or invalid authentication token
*       500:
*         description: Internal Server Error - Failed to retrieve batch details
*/
viewAllBatches,

/**
* @swagger
* /admin-update-batch/{id}:
*   put:
*     summary: Update a batch by ID
*     description: Use this API to update details of a batch by its ID
*     tags:
*       - Batch Management
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
*         description: ID of the batch to update
*         type: string
*         required: true
*       - in: body
*         name: batch
*         description: The updated batch object
*         required: true
*         schema:
*           type: object
*           properties:
*               batchName:
*                 type: string
*                 description: The updated name of the batch
*                 example: Batch A
*               startDate:
*                 type: string
*                 format: date
*                 description: The updated start date of the batch
*                 example: 2024-03-10
*               endDate:
*                 type: string
*                 format: date
*                 description: The updated end date of the batch
*                 example: 2024-06-10
*               courseId:
*                 type: string
*                 description: The updated ID of the course associated with the batch
*   responses:
*       200:
*         description: Successful response indicating the batch has been updated
*       400:
*         description: Bad Request - Invalid input or missing required fields
*       401:
*         description: Unauthorized - Missing or invalid authentication token
*       404:
*         description: Batch not found
*       500:
*         description: Internal Server Error - Failed to update the batch due to server issues
*/
updateBatch,

/**
* @swagger
* /admin-delete-batch/{id}:
*   delete:
*     summary: Delete a batch by ID
*     description: Use this API to delete a batch by its ID
*     tags:
*       - Batch Management
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
*         description: ID of the batch to delete
*         type: string
*         required: true
*     responses:
*       200:
*         description: Successful response indicating the batch has been deleted
*       401:
*         description: Unauthorized - Missing or invalid authentication token
*       404:
*         description: Batch not found
*       500:
*         description: Internal Server Error - Failed to delete the batch due to server issues
*/
deleteBatch,

 /**
 * @swagger
 * /admin-add-student:
 *   post:
 *     summary: Save a new student
 *     description: Use this API to save a new student
 *     tags:
 *       - Student Management
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
 *         name: student
 *         description: The student object to save
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *               image:
 *                 type: string
 *                 description: URL of the student image
 *                 example: url
 *               isActive:
 *                 type: Boolean
 *                 description: Indicates if the student is active or not
 *                 example: true
 *               name:
 *                 type: string
 *                 description: The name of the student
 *                 example: Neer
 *               phone:
 *                 type: number
 *                 description: The phone number of the student
 *                 example: 123456789
 *               sex:
 *                 type: string
 *                 description: The gender of the student
 *                 example: male
 *               currentSem:
 *                 type: number
 *                 description: The current semester of the student
 *                 example: 8
 *               email:
 *                 type: string
 *                 description: The email of the student
 *                 example: abc@test.com
 *               fatherName:
 *                 type: string
 *                 description: The name of the student's father
 *                 example: Rameshwar
 *               motherName:
 *                 type: string
 *                 description: The name of the student's mother
 *                 example: Rupali
 *               guardianPhoneNumber:
 *                 type: string
 *                 description: The phone number of the student's guardian
 *                 example: 122222222
 *               department:
 *                 type: string
 *                 description: The department of the student
 *                 example: ECE
 *     responses:
 *       200:
 *         description: Successful response indicating the student has been saved
 *       400:
 *         description: Bad Request - Invalid input or missing required fields
 *       500:
 *         description: Internal Server Error - Failed to save the student due to server issues
 */
saveStudent,

 /**
 * @swagger
 * /admin-view-student/{id}:
 *   get:
 *     summary: View student details by ID
 *     description: Use this API to view details of a student by their ID
 *     tags:
 *       - Student Management
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
 *         description: ID of the student to view
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Successful response containing the student details
 *         schema:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: The unique identifier of the student
 *             image:
 *               type: string
 *               description: URL of the student image
 *             isActive:
 *               type: Boolean
 *               description: Indicates if the student is active or not
 *             name:
 *               type: string
 *               description: The name of the student
 *             phone:
 *               type: number
 *               description: The phone number of the student
 *             sex:
 *               type: string
 *               description: The gender of the student
 *             currentSem:
 *               type: number
 *               description: The current semester of the student
 *             email:
 *               type: string
 *               description: The email of the student
 *             fatherName:
 *               type: string
 *               description: The name of the student's father
 *             motherName:
 *               type: string
 *               description: The name of the student's mother
 *             guardianPhoneNumber:
 *               type: string
 *               description: The phone number of the student's guardian
 *             department:
 *               type: string
 *               description: The department of the student
 *       400:
 *         description: Bad Request - Invalid input or missing required fields
 *       404:
 *         description: Student not found
 *       500:
 *         description: Internal Server Error - Failed to retrieve student details
 */
viewStudent,

/**
 * @swagger
 * /admin-view-all-students:
 *   get:
 *     summary: View all students
 *     description: Use this API to view details of all students
 *     tags:
 *       - Student Management
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
 *         description: Successful response containing details of all students
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 description: The unique identifier of the student
 *               image:
 *                 type: string
 *                 description: URL of the student image
 *               isActive:
 *                 type: Boolean
 *                 description: Indicates if the student is active or not
 *               name:
 *                 type: string
 *                 description: The name of the student
 *               phone:
 *                 type: number
 *                 description: The phone number of the student
 *               sex:
 *                 type: string
 *                 description: The gender of the student
 *               currentSem:
 *                 type: number
 *                 description: The current semester of the student
 *               email:
 *                 type: string
 *                 description: The email of the student
 *               fatherName:
 *                 type: string
 *                 description: The name of the student's father
 *               motherName:
 *                 type: string
 *                 description: The name of the student's mother
 *               guardianPhoneNumber:
 *                 type: string
 *                 description: The phone number of the student's guardian
 *               department:
 *                 type: string
 *                 description: The department of the student
 *       500:
 *         description: Internal Server Error - Failed to retrieve student details
 */
viewAllStudents,
 

 /**
 * @swagger
 * /admin-update-student/{id}:
 *   put:
 *     summary: Update a student by ID
 *     description: Use this API to update details of a student by their ID
 *     tags:
 *       - Student Management
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
 *         description: ID of the student to update
 *         type: string
 *         required: true
 *       - in: body
 *         name: student
 *         description: The updated student object
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             image:
 *               type: string
 *               description: URL of the updated student image
 *             isActive:
 *               type: Boolean
 *               description: Updated value to indicate if the student is active or not
 *             name:
 *               type: string
 *               description: The updated name of the student
 *             phone:
 *               type: number
 *               description: The updated phone number of the student
 *             sex:
 *               type: string
 *               description: The updated gender of the student
 *             currentSem:
 *               type: number
 *               description: The updated current semester of the student
 *             email:
 *               type: string
 *               description: The updated email of the student
 *             fatherName:
 *               type: string
 *               description: The updated name of the student's father
 *             motherName:
 *               type: string
 *               description: The updated name of the student's mother
 *             guardianPhoneNumber:
 *               type: string
 *               description: The updated phone number of the student's guardian
 *             department:
 *               type: string
 *               description: The updated department of the student
 *     responses:
 *       200:
 *         description: Successful response indicating the student has been updated
 *       400:
 *         description: Bad Request - Invalid input or missing required fields
 *       500:
 *          description: Internal Server Error - Failed to delete the student due to server issues
 */
updateStudent,

/**
 * @swagger
 * /admin-delete-student/{id}:
 *   delete:
 *     summary: Delete a student by ID
 *     description: Use this API to delete a student by its ID
 *     tags:
 *       - Student Management
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the student to delete
 *         type: string
 *         required: true
 *       - in: header
 *         name: Authorization
 *         description: Access token for Authentication.
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Successful response indicating the student has been deleted
 *       401:
 *         description: Unauthorized - Missing or invalid authentication token
 *       404:
 *         description: Student not found
 *       500:
 *         description: Internal Server Error - Failed to delete the student due to server issues
 */
deleteStudent,
  /**
   * @swagger
   * tags:
   *   name: News and Events
   *   description: APIs for managing News and Events
   *
   * /admin-add-event:
   *   post:
   *     summary: Save a new event
   *     description: Use this API to save a new event
   *     tags:
   *       - News and Events
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
   *         name: event
   *         description: The event object to save
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             image:
   *               type: string
   *               description: The image of the event
   *               example: url
   *             title:
   *               type: string
   *               description: The title of the event
   *               example: College Fest
   *             description:
   *               type: string
   *               description: The description of the event
   *               example: abcdefghijklmnop
   *             date:
   *               type: Date
   *               description: The date of the event
   *               example: 2024-04-05
   *           
   *     responses:
   *       200:
   *         description: Successful response indicating the event has been saved
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the event due to server issues
   */
 saveEvent,


  /**
   * @swagger
   * tags:
   *   name: News and Events
   *   description: APIs for managing News and Events
   *
   * /admin-view-event/{id}:
   *   get:
   *     summary: View the event
   *     description: Use this API to view an existing event
   *     tags:
   *       - News and Events
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
   *         description: ID of the event to view
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Successful response containing the event details
   *         schema:
   *           type: object
   *           properties:
   *             _id:
   *               type: string
   *               description: The unique identifier of the event
   *             image:
   *               type: string
   *               description: The image of the event
   *               example: url
   *             title:
   *               type: string
   *               description: The title of the event
   *               example: College Fest
   *             description:
   *               type: string
   *               description: The description of the event
   *               example: abcdefghijklmnop
   *             date:
   *               type: Date
   *               description: The date of the event
   *               example: 2024-04-05
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the event due to server issues
   */
 viewEvent,

 /**
   * @swagger
   * tags:
   *   name: News and Events
   *   description: APIs for managing News and Events
   *
   * /admin-view-all-events:
   *   get:
   *     summary: View all events
   *     description: Use this API to view details of all events
   *     tags:
   *       - News and Events
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
   *         description: Successful response containing details of all events
   *         schema:
   *           type: array
   *           items:
   *             type: object
   *             properties:
   *               _id:
   *                 type: string
   *                 description: The unique identifier of the event
   *               image:
   *                 type: string
   *                 description: The image of the event
   *               title:
   *                 type: string
   *                 description: The title of the event
   *               description:
   *                 type: string
   *                 description: The description of the event
   *               date:
   *                 type: Date
   *                 description: The date of the event
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to retrieve event details
   */
 viewAllEvents,

 /**
   * @swagger
   * tags:
   *   name: News and Events
   *   description: APIs for managing News and Events
   *
   * /admin-update-event/{id}:
   *   put:
   *     summary: Update an event by ID
   *     description: Use this API to update details of an event by its ID
   *     tags:
   *       - News and Events
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
   *         description: ID of the event to update
   *         type: string
   *         required: true
   *       - in: body
   *         name: event
   *         description: The updated event object
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             image:
   *               type: string
   *               description: The image of the event
   *               example: url
   *             title:
   *               type: string
   *               description: The title of the event
   *               example: College Fest
   *             description:
   *               type: string
   *               description: The description of the event
   *               example: abcdefghijklmnop
   *             date:
   *               type: Date
   *               description: The date of the event
   *               example: 2024-04-05
   *     responses:
   *       200:
   *         description: Successful response indicating the event has been updated
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Event not found
   *       500:
   *         description: Internal Server Error - Failed to update the event due to server issues
   */
 updateEvent,

 /**
   * @swagger
   * tags:
   *   name: News and Events
   *   description: APIs for managing events
   *
   * /admin-delete-event/{id}:
   *   delete:
   *     summary: Delete an event by ID
   *     description: Use this API to delete an event by its ID
   *     tags:
   *       - News and Events
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
   *         description: ID of the event to delete
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Successful response indicating the event has been deleted
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Event not found
   *       500:
   *         description: Internal Server Error - Failed to delete the event due to server issues
   */
 deleteEvent,

  /**
   * @swagger
   * tags:
   *   name: Course Management faculty
   *   description: APIs for managing faculty assigned
   *
   * /admin-assign-faculty:
   *   post:
   *     summary: Save a new faculty
   *     description: Use this API to save a new assigned Faculty
   *     tags:
   *       - Course Management faculty
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
   *         name: faculty
   *         description: The faculty object to save
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             facultyName:
   *               type: string
   *               description: The name of the course
   *               example: Nikshepa
   *             subject:
   *               type: string
   *               description: The subject of the faculty
   *               example: Maths
   *             batch:
   *               type: string
   *               description: The batch of the course she teaches
   *               example: 2020
   *
   *     responses:
   *       200:
   *         description: Successful response indicating the course has been saved
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the course due to server issues
   */
  saveAssignFaculty,
  /**
   * @swagger
   * tags:
   *   name: Course Management faculty
   *   description: APIs for managing faculty assigned
   *
   * /admin-view-assigned-faculty/{id}:
   *   get:
   *     summary: View assigned faculty details by ID
   *     description: Use this API to view details of an assigned faculty by its ID
   *     tags:
   *       - Course Management faculty
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
   *         description: ID of the faculty to view
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
   *               description: The unique identifier of the faculty
   *             facultyName:
   *               type: string
   *               description: The name of the faculty
   *             subject:
   *               type: string
   *               description: The subject of the faculty
   *             batch:
   *               type: string
   *               description: The batch of the faculty
   *
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Course not found
   *       500:
   *         description: Internal Server Error - Failed to retrieve course details
   */
  viewAssignedFaculty,
  /**
   * @swagger
   * tags:
   *   name: Course Management faculty
   *   description: APIs for managing faculty assigned
   *
   * /admin-view-all-assigned-faculty:
   *   get:
   *     summary: View all assigned faculty
   *     description: Use this API to view details of all assigned faculty
   *     tags:
   *       - Course Management faculty
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
   *                 description: The unique identifier of the assigned faculty
   *               facultyName:
   *                 type: string
   *                 description: The name of the assigned Faculty
   *               subject:
   *                 type: string
   *                 description: The subject of the faculty
   *               batch:
   *                 type: string
   *                 description: The batch handled by the faculty
   *
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to retrieve course details
   */
  viewAllAssignedFaculties,
  /**
   *  @swagger
   * tags:
   *   name: Course Management faculty
   *   description: APIs for managing faculty assigned
   *
   * /admin-update-assigned-faculty/{id}:
   *   put:
   *     summary: Update an assigned faculty by ID
   *     description: Use this API to update details of an assigned faculty by its ID
   *     tags:
   *       - Course Management faculty
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
   *         description: ID of the assigned faculty to update
   *         type: string
   *         required: true
   *       - in: body
   *         name: faculty
   *         description: The updated faculty object
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             facultyName:
   *               type: string
   *               description: The updated name of the faculty
   *               example: Spandana
   *             subject:
   *               type: string
   *               description: The updated subject of the faculty
   *               example: DBMS
   *             batch:
   *               type: string
   *               description: The updated batch of the faculty
   *               example: 2021
   *
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
   *         description: Internal Server Error - Failed to update the course due to server issues
   */
  updateAssignedFaculty,
  /**
   * @swagger
   * tags:
   *   name: Course Management faculty
   *   description: APIs for managing courses faculty
   *
   * /admin-delete-assigned-faculty/{id}:
   *   delete:
   *     summary: Delete an assigned faculty by ID
   *     description: Use this API to delete an assigned faculty by its ID
   *     tags:
   *       - Course Management faculty
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
   *         description: ID of the assigned faculty to delete
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Successful response indicating the course has been deleted
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Course not found
   *       500:
   *         description: Internal Server Error - Failed to delete the course due to server issues
   */
  deleteAssignedFaculty,
  /**
   *  @swagger
   * tags:
   *   name: Placement Management
   *   description: APIs for managing faculty 
   *
   * /admin-add-company:
   *   post:
   *     summary: Save a new company
   *     description: Use this API to save a new  Faculty
   *     tags:
   *       - Placement Management 
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
   *         name: company
   *         description: The company object to save
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             companyName:
   *               type: string
   *               description: The name of the company
   *               example: Hypersage
   *             companyEmail:
   *               type: string
   *               description: The email of the company
   *               example: sage@gmail.com
   *             companyWebsite:
   *               type: string
   *               description: The website of the company 
   *               example: hyper.com
   *
   *     responses:
   *       200:
   *         description: Successful response indicating the company has been saved
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the course due to server issues
   
   */
  saveCompany,
  /**
   *  @swagger
   * tags:
   *   name: Placement Management
   *   description: APIs for managing Placements
   *
   * /admin-view-company/{id}:
   *   get:
   *     summary: View company details by ID
   *     description: Use this API to view details of a company by its ID
   *     tags:
   *       - Placement Management 
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
   *         description: ID of the faculty to view
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
   *               description: The unique identifier of the faculty
   *             companyName:
   *               type: string
   *               description: The name of the copany
   *             companyEmail:
   *               type: string
   *               description: The email of the company
   *             companyWebsite:
   *               type: string
   *               description: The website of the company
   *
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Course not found
   *       500:
   *         description: Internal Server Error - Failed to retrieve course details
   */
  viewCompany,
  /**
   * @swagger
   * tags:
   *   name: Placement Management
   *   description: APIs for managing courses
   *
   * /admin-view-all-company:
   *   get:
   *     summary: View all company
   *     description: Use this API to view details of all company
   *     tags:
   *       - Placement Management
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
   *         description: Successful response containing details of all companies
   *         schema:
   *           type: array
   *           items:
   *             type: object
   *             properties:
   *               _id:
   *                 type: string
   *                 description: The unique identifier of all the companies
   *               companyName:
   *                 type: string
   *                 description: The name of the company
   *               companyEmail:
   *                 type: string
   *                 description: The email of the company
   *               companyWebsite:
   *                 type: string
   *                 description: The website of the company
   *
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to retrieve course details
   */
  viewAllCompany,
  /**
   *  @swagger
   * tags:
   *   name: Placement Management
   *   description: APIs for managing placements
   *
   * /admin-update-company/{id}:
   *   put:
   *     summary: Update a company by ID
   *     description: Use this API to update details of a company  by its ID
   *     tags:
   *       - Placement Management 
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
   *         description: ID of the company to update
   *         type: string
   *         required: true
   *       - in: body
   *         name: company
   *         description: The updated company object
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             companyName:
   *               type: string
   *               description: The updated name of the company
   *               example: AT&T
   *             companyEmail:
   *               type: string
   *               description: The updated email of the company
   *               example: at@gmail.com
   *             companyWebsite:
   *               type: string
   *               description: The updated website of the company
   *               example: att.org
   *
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
   *         description: Internal Server Error - Failed to update the course due to server issues
   */
   updateCompany,
   /**
    * @swagger
   * tags:
   *   name: Course Management
   *   description: APIs for managing courses faculty
   *
   * /admin-delete-company/{id}:
   *   delete:
   *     summary: Delete a company by ID
   *     description: Use this API to delete a company by its ID
   *     tags:
   *       - Placement Management
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
   *         description: ID of the company to delete
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Successful response indicating the course has been deleted
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Course not found
   *       500:
   *         description: Internal Server Error - Failed to delete the course due to server issues
    */
deleteCompany,
/**
 * 
   *  @swagger
   * tags:
   *   name: Media Management in Gallery
   *   description: APIs for managing gallery 
   *
   * /admin-add-image-in-gallery:
   *   post:
   *     summary: Save a new image in gallery
   *     description: Use this API to save a new  image in gallery
   *     tags:
   *       - Media Management in Gallery  
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
   *         name: image
   *         description: The image object to save
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             imgGallery:
   *               type: string
   *               description: The path of the image
   *               example: test_img
   *     responses:
   *       200:
   *         description: Successful response indicating the image has been saved
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the image due to server issues
   */
addImageInGallery,
 /**
  *  @swagger
   * tags:
   *   name: Media Management in Gallery
   *   description: APIs for managing images in Gallery
   *
   * /view-all-image-gallery:
   *   get:
   *     summary: View all image in gallery
   *     description: Use this API to view details of all image in gallery
   *     tags:
   *       - Media Management in Gallery 
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
   *         description: Successful response containing details of all images
   *         schema:
   *           type: array
   *           items:
   *             type: object
   *             properties:
   *               _id:
   *                 type: string
   *                 description: The unique identifier of all the images
   *               imgGallery:
   *                 type: string
   *                 description: The path  of the image
   *              
   *
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to retrieve course details
  * 
  */
 viewAllImagesinGallery,
 /**
  * 
   *  @swagger
   * tags:
   *   name: Media Management in Gallery
   *   description: APIs for managing gallery 
   *
   * /admin-add-image-in-management:
   *   post:
   *     summary: Save a new image in management
   *     description: Use this API to save a new  image in management
   *     tags:
   *       - Media Management in Gallery  
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
   *         name: image
   *         description: The image object to save
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             imgManagement:
   *               type: string
   *               description: The path of the image
   *               example: https://example.com/course_image.jpg
   *
   *     responses:
   *       200:
   *         description: Successful response indicating the company has been saved
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the course due to server issues
  */
 addImageInManagement,
  /**
   *  @swagger
   * tags:
   *   name: Media Management in Gallery
   *   description: APIs for managing images in Gallery
   *
   * /view-all-image-management:
   *   get:
   *     summary: View all image in management
   *     description: Use this API to view details of all image in management
   *     tags:
   *       - Media Management in Gallery 
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
   *         description: Successful response containing details of all images
   *         schema:
   *           type: array
   *           items:
   *             type: object
   *             properties:
   *               _id:
   *                 type: string
   *                 description: The unique identifier of all the images
   *               imgManagement:
   *                 type: string
   *                 description: The path  of the image
   *              
   *
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to retrieve course details
   * 
   */
  viewAllImagesinManagement,

    /**
   * @swagger
   * tags:
   *   name: Subject Management
   *   description: APIs for managing Subjects
   *
   * /admin-add-subject:
   *   post:
   *     summary: Save a new Subject
   *     description: Use this API to save a new Subject
   *     tags:
   *       - Subject Management
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
   *         name: Subject
   *         description: The subject object to save
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             subjectName:
   *               type: string
   *               description: The name of the subject
   *               example: MIS
   *             subjectCode:
   *               type: string
   *               description: The code of the subject
   *               example: MIS1245
   *             duration:
   *               type: string
   *               description: The duration of the subject
   *               example: 6 weeks
   *             batchName:
   *               type: string
   *               description: The batch Name
   *               example: BBA12           
   *     responses:
   *       200:
   *         description: Successful response indicating the subject has been saved
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the subject due to server issues
   */
   saveSubject,

     /**
   * @swagger
   * tags:
   *   name: Subject Management
   *   description: APIs for managing Subjects
   *
   * /admin-view-all-subject:
   *   get:
   *     summary: Get all subject
   *     description: Use this API to get all subject
   *     tags:
   *       - Subject Management
   *     produces:
   *        - application/json
   *     consumes:
   *       - application/json
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         description: Access token for Authentication.
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Successful response containing details of all subject
   *         schema:
   *           type: array
   *           items:
   *             type: object
   *             properties:
   *               _id:
   *                 type: string
   *                 description: The unique identifier of the subject
   *               subjectName:
   *                 type: string
   *                 description: The name of the course
   *               subjectCode:
   *                 type: string
   *                 description: The code of the course
   *               duration:
   *                 type: string
   *                 description: The duration of the course
   *               batchName:
   *                 type: string
   *                 description: The batch Name
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to retrieve course details
   */
   getAllSubject,

     /**
 * @swagger
 *  tags:
 *   name: Subject Management
 *   description: APIs for managing Subjects
 *
 * /admin-update-subject/{id}:
 *   put:
 *     summary: Update Subject by id
 *     description: Use this API to update Subject
 *     tags:
 *       - Subject Management
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
 *         description: ID of the subject to update
 *         type: string
 *         required: true
 *       - in: body
 *         name: course
 *         description: The updated course object
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *               subjectName:
 *                 type: string
 *                 description: The name of the course
 *               subjectCode:
 *                 type: string
 *                 description: The code of the course
 *               duration:
 *                 type: string
 *                 description: The duration of the course
 *               batchName:
 *                 type: string
 *                 description: The batch Name
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
 *         description: Internal Server Error - Failed to update the course due to server issues
 */
   updateSubject,

     /**
   * @swagger
   * tags:
   *   name: Subject Management
   *   description: APIs for managing Subjects
   *
   * /admin-delete-subject/{id}:
   *   delete:
   *     summary: Delete a  Subject by id
   *     description: Use this API to delete Subject
   *     tags:
   *       - Subject Management
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
   *         description: ID of the subject to delete
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Successful response indicating the course has been deleted
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Course not found
   *       500:
   *         description: Internal Server Error - Failed to delete the course due to server issues
   */
   deleteSubjectById,
    

    /**
   * @swagger
   * tags:
   *   name: Faculty Management
   *   description: APIs for Faculty Subjects
   *
   * /admin-add-faculty:
   *   post:
   *     summary: Save a new faculty
   *     description: Use this API to save a new Faculty
   *     tags:
   *       - Faculty Management
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
   *         name: Faculty
   *         description: The faculty object to save
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             facName:
   *               type: string
   *               description: The name of the faculty
   *               example: Bijay 
   *             facPhone:
   *               type: number
   *               description: Number of faculty
   *               example: 121213654
   *             sex:
   *               type: string
   *               description: Gender of faculty
   *               example: Male
   *             relationship:
   *               type: string
   *               example: Father
   *             facultyId   :
   *               type : number,
   *               description : id of faculty
   *               example: Bij123
   *             emailId   :
   *               type : string,
   *               description : Email id of faculty
   *               example: bijay12@gmail.com
   *             facFatherName   :
   *               type : string,
   *               description : father name 
   *               example: ajay kumar
   *             guardianPhoneNum   :
   *               type : number,
   *               description : guardian phone number
   *               example: 12356485
   *             facSpouseName : 
   *               type : string,
   *               description : spouse name
   *               example: anil kumar
   *             facDepartment   :
   *               type : string,
   *               description : department of this faculty
   *               example: BBA
   *             facImage   :
   *               type : string,
   *               description : image of faculty
   *               example: img1.jpg
   *             isActive : 
   *               type : boolean
   *               description : active / deactive
   *               example: true
   * 
   *     responses:
   *       200:
   *         description: Successful response indicating the subject has been saved
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the subject due to server issues
   */
   addFaculty,

    /**
   * @swagger
   * tags:
   *   name: Faculty Management
   *   description: APIs for Faculty Subjects
   *
   * /admin-view-faculty/{id}:
   *   get:
   *     summary: faculty by id
   *     description: Use this API to get faculty
   *     tags:
   *       - Faculty Management
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
   *         description: ID of the course to view
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
   *               description: The name of the faculty
   *             facPhone:
   *               type: number
   *               description: Number of faculty
   *             sex:
   *               type: string
   *               description: Gender of faculty
   *             relationship:
   *               type: string
   *             facultyId:
   *               type: number
   *               description: id of faculty
   *             emailId:
   *               type: string
   *               description: Email id of faculty
   *             facFatherName:
   *               type: string
   *               description: father name 
   *             guardianPhoneNum:
   *               type: number
   *               description: guardian phone number
   *             facSpouseName: 
   *               type: string
   *               description: spouse name
   *             facDepartment:
   *               type: string
   *               description: department of this faculty
   *             facImage:
   *               type: string
   *               description: image of faculty
   *             isActive: 
   *               type: boolean
   *               description: active / deactive
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Course not found
   *       500:
   *         description: Internal Server Error - Failed to retrieve course details
   */
   getFacultyById,

     /**
  * @swagger
  * tags:
  *   name: Faculty Management
  *   description: APIs for Managing Faculty
  *
  * /admin-view-All-faculty:
  *   get:
  *     summary: All faculty
  *     description: Use this API to get all faculty
  *     tags:
  *       - Faculty Management
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
  *     responses:
  *       200:
  *         description: Successful response containing details of all faculty
  *         schema:
  *           type: array
  *           items:
  *             type: object
  *             properties:
  *               _id:
  *                 type: string
  *                 description: The id of the faculty
  *               facName:
  *                 type: string
  *                 description: The name of the faculty
  *               facPhone:
  *                 type: number
  *                 description: Number of faculty
  *               sex:
  *                 type: string
  *                 description: Gender of faculty
  *               relationship:
  *                 type: string
  *               facultyId:
  *                 type: number
  *                 description: id of faculty
  *               emailId:
  *                 type: string
  *                 description: Email id of faculty
  *               facFatherName:
  *                 type: string
  *                 description: father name 
  *               guardianPhoneNum:
  *                 type: number
  *                 description: guardian phone number
  *               facSpouseName:
  *                 type: string
  *                 description: spouse name
  *               facDepartment:
  *                 type: string
  *                 description: department of this faculty
  *               facImage:
  *                 type: string
  *                 description: image of faculty
  *               isActive:
  *                 type: boolean
  *                 description: active / deactive
  *       401:
  *         description: Unauthorized - Missing or invalid authentication token
  *       500:
  *         description: Internal Server Error - Failed to retrieve faculty details
  */
   getAllFaculty,

     /**
   * @swagger
   * tags:
   *   name: Faculty Management
   *   description: APIs for finding total number of faculties Entered
   *
   * /admin-view-total-faculty:
   *   get:
   *     summary: View total Students
   *     description: Use this API to view total number of faculties entered
   *     tags:
   *       - Faculty Management
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
   *         description: Successful response containing total number of faculties
   *         schema:
   *           type: array
   *           items:
   *             type: object
   *             properties:
   *               _id:
   *                 type: string
   *                 description: The unique identifier of the faculty
   *               facName:
   *                 type: string
   *                 description: The faculty name
   *               facPhone:
   *                 type: number
   *                 description: true or false
   *               sex:
   *                 type: string
   *                 description: Gender
   *               relationship:
   *                 type: string
   *                 description: relationship 
   *               facultyId:
   *                 type: string
   *                 description: Id of faculty
   *               emailId:
   *                 type: string
   *                 description: emailid of faculty
   *               facFatherName:
   *                 type: string
   *                 description: faculty father's name
   *               facSpouseName:
   *                 type: string
   *                 description: faculty spouse's name
   *               guardianPhoneNum:
   *                 type: number
   *                 description: faculty mother's name
   *               facDepartment:
   *                 type: string
   *                 description: faculty's department
   *               facImage:
   *                 type: string
   *                 description: faculty image 
   *               isActive:
   *                 type: Boolean
   *                 description: true or false
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to retrieve students details
   */
   getTotalFaculty,

  /**
  * @swagger
  * /admin-update-faculty/{id}:
  *   put:
  *     summary: update Faculty
  *     description: Use this API to get all faculty
  *     tags:
  *       - Faculty Management
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
  *         description: ID of the faculty to update
  *         type: string
  *         required: true
  *       - in: body
  *         name: course
  *         description: The updated course object
  *         required: true
  *         schema:
  *           type: object
  *           properties:
  *             facName:
  *               type: string
  *               description: The name of the faculty
  *               example: Bijay 
  *             facPhone:
  *               type: number
  *               description: Number of faculty
  *               example: 121213654
  *             sex:
  *               type: string
  *               description: Gender of faculty
  *               example: Male
  *             relationship:
  *               type: string
  *               example: Father
  *             facultyId   :
  *               type : number,
  *               description : id of faculty
  *               example: Bij123
  *             emailId   :
  *               type : string,
  *               description : Email id of faculty
  *               example: bijay12@gmail.com
  *             facFatherName   :
  *               type : string,
  *               description : father name 
  *               example: ajay kumar
  *             guardianPhoneNum   :
  *               type : number,
  *               description : guardian phone number
  *               example: 12356485
  *             facSpouseName : 
  *               type : string,
  *               description : spouse name
  *               example: anil kumar
  *             facDepartment   :
  *               type : string,
  *               description : department of this faculty
  *               example: BBA
  *             facImage   :
  *               type : string,
  *               description : image of faculty
  *               example: img1.jpg
  *             isActive : 
  *               type : boolean
  *               description : active / deactive
  *               example: true
  *     responses:
  *       200:
  *         description: Successful response indicating the subject has been saved
  *       400:
  *         description: Bad Request - Invalid input or missing required fields
  *       401:
  *         description: Unauthorized - Missing or invalid authentication token
  *       500:
  *         description: Internal Server Error - Failed to save the subject due to server issues
  */
   updateFaculty,


 /**
   *@swagger
   * tags:
   *   name: Faculty Management
   *   description: APIs for Managing Faculty
   * /admin-delete-faculty/{id}:
   *   delete:
   *     summary: update Faculty
   *     description: Use this API to delete  faculty
   *     tags:
   *       - Faculty Management
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
   *         description: ID of the faculty to delete
   *         type: string
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             facName:
   *               type: string
   *               description: The name of the faculty
   *               example: Bijay 
   *             facPhone:
   *               type: number
   *               description: Number of faculty
   *               example: 121213654
   *             sex:
   *               type: string
   *               description: Gender of faculty
   *               example: Male
   *             relationship:
   *               type: string
   *               example: Father
   *             facultyId   :
   *               type : number,
   *               description : id of faculty
   *               example: Bij123
   *             emailId   :
   *               type : string,
   *               description : Email id of faculty
   *               example: bijay12@gmail.com
   *             facFatherName   :
   *               type : string,
   *               description : father name 
   *               example: ajay kumar
   *             guardianPhoneNum   :
   *               type : number,
   *               description : guardian phone number
   *               example: 12356485
   *             facSpouseName : 
   *               type : string,
   *               description : spouse name
   *               example: anil kumar
   *             facDepartment   :
   *               type : string,
   *               description : department of this faculty
   *               example: BBA
   *             facImage   :
   *               type : string,
   *               description : image of faculty
   *               example: img1.jpg
   *             isActive : 
   *               type : boolean
   *               description : active / deactive
   *               example: true
   *     responses:
   *       200:
   *         description: Successful response indicating the subject has been saved
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the subject due to server issues
   */
   deleteFaculty,
    
    /**
   * @swagger
   * tags:
   *   name: Announcement Management
   *   description: APIs for Announcement Subjects
   * /admin-add-announcement:
   *   post:
   *     summary: Save a new Announcement
   *     description: Use this API to save a new Announcement
   *     tags:
   *       - Announcement Management
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
   *         name: Announcement
   *         description: The announcement object to save
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             announcementTitle:
   *               type: string
   *               description: The title of the Announcement
   *               example: Annual Function
   *             announcementDesc:
   *               type: string
   *               description: The Description of the Announcement
   *               example: The annual college function is a highly anticipated event that celebrates the achievements, talents, and cultural diversity within our college community.
   *             announcementDate:
   *               type: string
   *               example: 2024-03-21
   *             announcementFor:
   *               type: string
   *               example: All
   *     responses:
   *       200:
   *         description: Successful response indicating the announcement has been saved
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the announcement due to server issues
   */
   addAnnouncement,

    /**
   * @swagger
   * tags:
   *   name: Announcement Management
   *   description: APIs for Announcement Subjects
   * /admin-get-announcements/{id}:
   *  get:
   *     summary: announcements by id
   *     description: Use this API to get announcements 
   *     tags:
   *       - Announcement Management
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
   *         description: ID of the announcement to view
   *         type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Successful response containing the Announcement details
   *         schema:
   *           type: object
   *           properties:
   *             _id :
   *               type: string
   *               description: The id of the faculty
   *             announcementTitle:
   *               type: string
   *               description: The title of the Announcement
   *             announcementDesc:
   *               type: string
   *               description: The Description of the Announcement
   *             announcementDate:
   *               type: string
   *             announcementFor:
   *               type: string
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       404:
   *         description: Announcement not found
   *       500:
   *         description: Internal Server Error - Failed to retrieve course details
   */
  getAnnouncementById,

   /**
   * @swagger
   * tags:
   *   name: Announcement Management
   *   description: APIs for Announcement Subjects
   * 
   * /admin-get-all-announcements:
   *   get:
   *     summary: Get all Announcements
   *     description: Use this API to get all announcements
   *     tags:
   *       - Announcement Management
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
   *         description: Successful response containing details of all announcements
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to retrieve announcements due to server issues
   */
   getAllAnnouncement,

   /**
   * @swagger
   * tags:
   *   name: Announcement Management
   *   description: APIs for Announcement Subjects
   * /admin-update-announcements/{id}:
   *   put:
   *     summary: update all Announcements
   *     description: Use this API to update announcements
   *     tags:
   *       - Announcement Management
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
   *         description: ID of the Announcement
   *         type: string
   *         required: true
   *       - in: body
   *         name: Announcement
   *         description: The announcement object to update
   *         required: true
   *         schema:
  *           type: object
  *           properties:
  *             announcementTitle:
   *               type: string
   *               description: The title of the Announcement
   *               example: Fresher PARTY
   *             announcementDesc:
   *               type: string
   *               description: The Description of the Announcement
   *               example: fresher party for fresher student
   *             announcementDate:
   *               type: string
   *               example: 2024-03-28
   *             announcementFor:
   *               type: string
   *               example: All
   *     responses:
   *       200:
   *         description: Successful response indicating the announcement has been saved
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the announcement due to server issues
   */
   updateAnnouncement,
     /**
   * @swagger
   * tags:
   *   name: Announcement Management
   *   description: APIs for Announcement Subjects
   * /admin-delete-announcements/{id}:
   *   delete:
   *     summary: delete Announcements
   *     description: Use this API to Delete announcements
   *     tags:
   *       - Announcement Management
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
   *         description: ID of the Announcement
   *         type: string
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             announcementTitle:
   *               type: string
   *               description: The title of the Announcement
   *               example: Fresher PARTY
   *             announcementDesc:
   *               type: string
   *               description: The Description of the Announcement
   *               example: fresher party for fresher student
   *             announcementDate:
   *               type: string
   *               example: 2024-03-28
   *             announcementFor:
   *               type: string
   *               example: All
   *     responses:
   *       200:
   *         description: Successful response indicating the announcement has been saved
   *       400:
   *         description: Bad Request - Invalid input or missing required fields
   *       401:
   *         description: Unauthorized - Missing or invalid authentication token
   *       500:
   *         description: Internal Server Error - Failed to save the announcement due to server issues
   *  
   */
   deleteAnnouncement
};
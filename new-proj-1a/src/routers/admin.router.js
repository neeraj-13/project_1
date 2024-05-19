const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const { validateCourse,
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
 }=require("../validators/admin.validator");
const auth = require("../middleware/auth");

router.post("/add-admin", adminController.addAdmin);

router.post("/login",adminController.login); 
 
router.post("/admin-add-course",auth,validateCourse,adminController.saveCourse);
router.get("/admin-view-course/:id",auth, adminController.viewCourse);
router.get("/admin-view-all-courses",auth, adminController.viewAllCourses);
router.get("/admin-view-total-students",auth,adminController.viewTotalstudents);
router.get("/admin-view-total-batches",auth,adminController.viewTotalBatches);
router.get("/admin-view-total-subjects",auth,adminController.viewTotalSubjects);
router.put("/admin-update-course/:id",auth, adminController.updateCourse);
router.delete("/admin-delete-course/:id",auth, adminController.deleteCourse);

router.post("/admin-add-batch",auth, validateBatch, adminController.saveBatches);
router.get("/admin-view-batch/:id",auth, adminController.viewBatch);
router.get("/admin-view-all-batches",auth, adminController.viewAllBatches);
router.put("/admin-update-batch/:id",auth, adminController.updateBatch);
router.delete("/admin-delete-batch/:id",auth, adminController.deleteBatch);

router.post("/admin-add-student",auth, validateStudent, adminController.saveStudent);
router.get("/admin-view-student/:id",auth, adminController.viewStudent);
router.get("/admin-view-all-students",auth, adminController.viewAllStudents);
router.put("/admin-update-student/:id",auth, adminController.updateStudent);
router.delete("/admin-delete-student/:id",auth, adminController.deleteStudent);

router.post("/admin-add-event",auth, validateEvent, adminController.saveEvent);
router.get("/admin-view-event/:id",auth, adminController.viewEvent);
router.get("/admin-view-all-events",auth, adminController.viewAllEvents);
router.put("/admin-update-event/:id",auth, adminController.updateEvent);
router.delete("/admin-delete-event/:id",auth, adminController.deleteEvent);

router.post("/admin-assign-faculty",auth,validateFaculty,adminController.saveAssignFaculty)
router.get("/admin-view-assigned-faculty/:id",auth,adminController.viewAssignedFaculty)
router.get("/admin-view-all-assigned-faculty",auth,adminController.viewAllAssignedFaculties);
router.put("/admin-update-assigned-faculty/:id",auth,adminController.updateAssignedFaculty);
router.delete("/admin-delete-assigned-faculty/:id",auth,adminController.deleteAssignedFaculty);

router.post("/admin-add-company",auth,validatePlacemnt,adminController.saveCompany);
router.get("/admin-view-company/:id",auth,adminController.viewCompany);
router.get("/admin-view-all-company",auth,adminController.viewAllCompany);
router.put("/admin-update-company/:id",auth,adminController.updateCompany);
router.delete("/admin-delete-company/:id",auth,adminController.deleteCompany);

router.post("/admin-add-subject",auth,validateSubject, adminController.saveSubject)
router.get("/admin-view-all-subject", auth, adminController.getAllSubject)
router.put("/admin-update-subject/:id", auth, adminController.updateSubject)
router.delete("/admin-delete-subject/:id", auth, adminController.deleteSubjectById)

router.post("/admin-add-announcement",auth,validateAnnouncement, adminController.addAnnouncement)
router.get("/admin-get-all-announcements", auth, adminController.getAllAnnouncement)
router.get("/admin-get-announcements/:id", auth, adminController.getAnnouncementById)
router.put("/admin-update-announcements/:id", auth, adminController.updateAnnouncement)
router.delete("/admin-delete-announcements/:id", auth, adminController.deleteAnnouncement)

router.post("/admin-add-image-in-gallery",auth,validateMediaGallery,adminController.addImageInGallery);
router.get("/view-all-image-gallery",auth,adminController.viewAllImagesinGallery);

router.post("/admin-add-image-in-management",auth,validateMediaManagement,adminController.addImageInManagement);
router.get("/view-all-image-management",auth,adminController.viewAllImagesinManagement);

router.post("/admin-add-faculty",auth,validateFacultySeperate, adminController.addFaculty)
router.get("/admin-view-faculty/:id", auth, adminController.getFacultyById)
router.get("/admin-view-All-faculty", auth, adminController.getAllFaculty)
router.get("/admin-view-total-faculty", auth, adminController.getTotalFaculty)
router.put("/admin-update-faculty/:id", auth, adminController.updateFaculty)
router.delete("/admin-delete-faculty/:id", auth, adminController.deleteFaculty)

module.exports = router;

const express = require("express");
const router = express.Router();
const facultyController = require("../controllers/faculty.controller");
const { validateUploadMarks, validateFacultyLeave, validateFeedback  } = require("../validators/faculty.validator");
const auth = require("../middleware/auth");

router.post("/login",facultyController.login); 
 
router.post("/faculty-add-update-marks",validateUploadMarks,auth,facultyController.saveUploadMarks)
router.get("/faculty-view-update-marks/:id",auth,facultyController.viewUploadMarks)
router.get("/faculty-view-all-update-marks",auth,facultyController.viewAllUploadMarks);
router.put("/faculty-update-update-marks/:id",auth,facultyController.updateUploadMarks);
 
router.post("/faculty-add-faculty-leave",validateFacultyLeave,auth,facultyController.saveLeave)
router.get("/faculty-view-faculty-leave/:id",auth,facultyController.viewLeave)
router.get("/faculty-view-all-faculty-leaves",auth,facultyController.viewAllLeaves);
router.put("/faculty-update-faculty-leave/:id",auth,facultyController.updateFacultyLeaveStatus);

router.post("/faculty-add-feedback",validateFeedback,auth,facultyController.saveFeedback);

router.get("/faculty-view-faculty-details",facultyController.viewFacultyDetails);
router.get("/faculty-view-announcement",facultyController.viewAnnouncement);



module.exports = router;

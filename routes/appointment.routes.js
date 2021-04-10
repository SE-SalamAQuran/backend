const router = require("express").Router({ mergeParams: true });

var appointmentsController = require("../controllers/appointments.controller");

router.get("/userAppointment/:id", appointmentsController.getUserAppointment);
router.get("/AllAppointment", appointmentsController.getAllAppointment);


module.exports = router;

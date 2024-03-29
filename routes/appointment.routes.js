const router = require("express").Router({ mergeParams: true });

var appointmentsController = require("../controllers/appointments.controller");

router.get("/userAppointment/:id", appointmentsController.getUserAppointment);
router.get("/AllAppointment", appointmentsController.getAllAppointment);
router.delete("/deleteAppointment/:id", appointmentsController.deleteAppointment);
router.post("/new/:id/:prop", appointmentsController.addAppointment);

module.exports = router;

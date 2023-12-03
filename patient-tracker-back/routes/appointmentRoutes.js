const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');


router.get('/', appointmentController.getAllAppointments);
router.post('/', appointmentController.scheduleAppointment);


module.exports = router;
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');


router.post('/register', doctorController.registerDoctor);
router.post('/login', doctorController.loginDoctor);
router.get('/patients/:doctorId', doctorController.getPatientDetailsForDoctor);

module.exports = router;
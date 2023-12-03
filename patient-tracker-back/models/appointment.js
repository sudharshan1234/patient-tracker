const mongoose = require('mongoose');


const appointmentSchema = new mongoose.Schema({
   patientId: mongoose.Schema.Types.ObjectId, // Reference to the Patient
   date: String,
   purpose: String,
   attendingPhysician: String
});


module.exports = mongoose.model('Appointment', appointmentSchema);
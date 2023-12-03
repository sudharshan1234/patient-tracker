const Appointment = require('../models/appointment'); // Adjust path as necessary


getAllAppointments = async (req, res) => {
   try {
       const appointments = await Appointment.find();
       res.json(appointments);
   } catch (err) {
       res.status(500).json({ message: err.message });
   }
};


scheduleAppointment = async (req, res) => {
   const appointment = new Appointment({
       patientId: req.body.patientId,
       date: req.body.date,
       purpose: req.body.purpose,
       attendingPhysician: req.body.attendingPhysician
   });


   try {
       const newAppointment = await appointment.save();
       res.status(201).json(newAppointment);
   } catch (err) {
       res.status(400).json({ message: err.message });
   }
};


module.exports = { getAllAppointments, scheduleAppointment };
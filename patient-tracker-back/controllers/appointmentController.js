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
      patient: req.body.patient,
      date: req.body.date,
      purpose: req.body.purpose,
      doctor: req.body.doctor
  });


  try {
      const newAppointment = await appointment.save();
      res.status(201).json(newAppointment);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};


getAppointmentsByDoctor = async (req, res) => {
   try {
     const { doctorId } = req.params;
     const appointmentsWithPatients = await Appointment.find({ doctor: doctorId })
     .populate('patient', 'name dateOfBirth contact') // Adjust fields as per requirement
     .exec();


     res.status(200).json(appointmentsWithPatients);
   } catch (error) {
     console.error('Error fetching appointments:', error);
     res.status(500).json({ message: 'Error fetching appointments' });
   }
 }

module.exports = { getAllAppointments, scheduleAppointment, getAppointmentsByDoctor };
const Doctor = require('../models/doctor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


registerDoctor = async (req, res) => {
   try {
       console.log(req.body);
       const doctor = new Doctor(req.body);
       await doctor.save();
       res.status(201).send({ message: "Doctor registered successfully" });
   } catch (error) {
       res.status(400).send(error);
   }
};


loginDoctor = async (req, res) => {
   try {
       const { email, password } = req.body;
       const doctor = await Doctor.findOne({ email });
       if (!doctor) {
           return res.status(404).send({ message: "Doctor not found" });
       }


       const isPasswordMatch = await bcrypt.compare(password, doctor.password);
       if (!isPasswordMatch) {
           return res.status(400).send({ message: "Invalid credentials" });
       }


       const token = jwt.sign({ _id: doctor._id }, process.env.JWT_SECRET);
       const doctorData = doctor.toObject();
       delete doctorData.password;
       res.send({ doctor: doctorData, token });
   } catch (error) {
       res.status(500).send(error);
   }
};


module.exports = { registerDoctor, loginDoctor };
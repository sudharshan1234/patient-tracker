const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes')
const appointmentRoutes = require('./routes/appointmentRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const { verifyToken } = require('./jwt-middleware');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173' })); // Allow only http://localhost:5173


// MongoDB Connection
mongoose.connect(`mongodb+srv://sudharshan:${process.env.MONGO_PWD}@patient-tracker-codecel.5vzdhw8.mongodb.net/patient_data?retryWrites=true&w=majority`);
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));
mongoose.connection.on('error', (err) => console.log('Error connecting to MongoDB:', err));

app.use('/api/doctors', doctorRoutes);
app.use(verifyToken)
app.use('/api/patients', patientRoutes);
app.use('/api/appointments', appointmentRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
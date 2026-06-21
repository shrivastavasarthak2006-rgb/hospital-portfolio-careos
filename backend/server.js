const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_NAME = process.env.MONGO_DB_NAME || "careos";

const patientRoutes = require("./routes/patientRoutes");
const hospitalRoutes = require("./routes/hospitalRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const Patient = require("./models/Patient");
const Hospital = require("./models/Hospital");
const Appointment = require("./models/Appointment"); 
const adminRoutes = require("./routes/adminRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/api/patients", patientRoutes);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/appointments", appointmentRoutes);

async function start() {
  try {
    if (!process.env.MONGO_URI) {
      console.warn(
        "MONGO_URI is not set. Create backend/.env with a Mongo connection string to enable form saving."
      );
    } else {
      await mongoose.connect(process.env.MONGO_URI, { dbName: DB_NAME });
      console.log(`MongoDB connected to database: ${mongoose.connection.name}`);
    }

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Mongo connection error:", err);
    process.exit(1);
  }
}

app.get("/api/dashboard-stats", async (req, res) => {
  const hospitalCount = await Hospital.countDocuments();
  const appointmentCount = await Appointment.countDocuments();
  const patientCount = await Patient.countDocuments();

  res.json({
    hospitals: hospitalCount,
    appointments: appointmentCount,
    patients: patientCount,
  });
});


start();
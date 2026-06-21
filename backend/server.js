// Import required libraries
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Get settings from .env file
const PORT = process.env.PORT || 5000;  // Which port to run on
const DB_NAME = process.env.MONGO_DB_NAME || "careos";  // Database name
const ENVIRONMENT = process.env.NODE_ENV || "development";  // Dev or Production

// Import route files (where API endpoints are defined)
const adminRoutes = require("./routes/adminRoutes");
const patientRoutes = require("./routes/patientRoutes");
const hospitalRoutes = require("./routes/hospitalRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

// Import database models (how data is structured)
const Patient = require("./models/Patient");
const Hospital = require("./models/Hospital");
const Appointment = require("./models/Appointment");

// ============================================
// SETUP CORS (allow requests from frontend)
// ============================================
const corsSettings = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200
};

// ============================================
// MIDDLEWARE (processes every request)
// ============================================
app.use(cors(corsSettings));  // Allow cross-origin requests
app.use(express.json());  // Understand JSON in requests
app.use(express.urlencoded({ extended: true }));  // Understand form data

// ============================================
// SIMPLE TEST ROUTE (check if server is alive)
// ============================================
app.get("/", (req, res) => {
  res.json({ 
    message: "Backend is running",
    environment: ENVIRONMENT,
    status: "Online"
  });
});

// ============================================
// API ROUTES (where requests go)
// ============================================
app.use("/api/admin", adminRoutes);  // Admin login endpoints
app.use("/api/patients", patientRoutes);  // Patient endpoints
app.use("/api/hospitals", hospitalRoutes);  // Hospital endpoints
app.use("/api/appointments", appointmentRoutes);  // Appointment endpoints

// ============================================
// DASHBOARD STATS ENDPOINT
// ============================================
app.get("/api/dashboard-stats", async (req, res) => {
  try {
    // Count total hospitals in database
    const totalHospitals = await Hospital.countDocuments();
    
    // Count total appointments in database
    const totalAppointments = await Appointment.countDocuments();
    
    // Count total patients in database
    const totalPatients = await Patient.countDocuments();

    // Send back the numbers
    res.json({
      hospitals: totalHospitals,
      appointments: totalAppointments,
      patients: totalPatients,
    });
  } catch (error) {
    console.log("Error getting stats:", error);
    res.status(500).json({ message: "Could not get stats" });
  }
});

// ============================================
// HANDLE 404 (when user requests wrong URL)
// ============================================
app.use((req, res) => {
  res.status(404).json({ message: "This endpoint does not exist" });
});

// ============================================
// ERROR HANDLER (when something goes wrong)
// ============================================
app.use((error, req, res, next) => {
  console.log("Error happened:", error);
  res.status(500).json({ message: "Something went wrong on the server" });
});

// ============================================
// START THE SERVER
// ============================================
async function startServer() {
  try {
    // Check if MongoDB connection string exists
    if (!process.env.MONGO_URI) {
      console.log("WARNING: No MongoDB connection string found");
      console.log("Database saving will not work");
    } else {
      // Connect to MongoDB database
      await mongoose.connect(process.env.MONGO_URI, { dbName: DB_NAME });
      console.log("✓ Connected to MongoDB database");
    }

    // Start listening for requests on the specified port
    app.listen(PORT, () => {
      console.log("================================");
      console.log("🏥 CAREOS Backend Server Started");
      console.log("================================");
      console.log("Environment: " + ENVIRONMENT);
      console.log("Running on port: " + PORT);
      console.log("CORS allowed from: " + (process.env.CORS_ORIGIN || "localhost:3000"));
      console.log("================================");
    });
  } catch (error) {
    console.log("ERROR: Could not start server");
    console.log(error.message);
    process.exit(1);  // Stop the program if startup fails
  }
}

// ============================================
// HANDLE UNEXPECTED ERRORS
// ============================================
process.on("unhandledRejection", (error) => {
  console.log("Unexpected error:", error);
  process.exit(1);  // Stop the program
});

// ============================================
// RUN THE SERVER
// ============================================
startServer();
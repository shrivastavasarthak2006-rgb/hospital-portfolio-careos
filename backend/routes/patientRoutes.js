const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Patient = require("../models/Patient");

router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: patients.length,
      database: mongoose.connection.name,
      patients,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const patient = new Patient(req.body);

    await patient.save();

    res.status(201).json({
      success: true,
      message: "Patient submitted successfully",
      patient,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.put("/:id/resolve", async (req, res) => {

  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, { status: "Resolved" }, { new: true });

    res.json({
      success: true,
      patient,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Patient deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/hospitals", async (req, res) => {
  const data = await Hospital.find();
  res.json({ hospitals: data });
});

router.get("/appointments", async (req, res) => {
  const data = await Appointment.find();
  res.json({ appointments: data });
});

module.exports = router;
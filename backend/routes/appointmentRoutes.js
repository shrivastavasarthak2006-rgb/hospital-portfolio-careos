const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();

    res.status(201).json({
      success: true,
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Appointment deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
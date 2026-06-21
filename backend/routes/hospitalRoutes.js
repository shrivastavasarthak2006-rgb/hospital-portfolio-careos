const express = require("express");
const router = express.Router();
const Hospital = require("../models/Hospital");

// GET ALL
router.get("/", async (req, res) => {
  try {
    const hospitals = await Hospital.find().sort({ createdAt: -1 });

    res.json({
      hospitals,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ADD HOSPITAL
router.post("/", async (req, res) => {
  try {
    const hospital = new Hospital(req.body);

    await hospital.save();

    res.status(201).json(hospital);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Hospital.findByIdAndDelete(req.params.id);

    res.json({
      message: "Hospital deleted",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
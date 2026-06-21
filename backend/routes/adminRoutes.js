const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "kamal@careos.ai" && password === "qureo@2025") {
    return res.json({ token: "dummy-token" });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
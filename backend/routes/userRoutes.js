const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");

// Registration Route
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let user = new User({ username, email, password });
    await user.save();
    req.login(user, (err) => {
      if (err)
        return res
          .status(400)
          .json({ msg: "Login failed after registration." });
      return res.status(200).json({ msg: "Registration successful" });
    });
  } catch (err) {
    return res.status(400).json({ msg: "Registration failed." });
  }
});

// Login Route
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({ msg: "Login successful", user: req.user });
});

// Logout Route
router.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(400).json({ msg: "Logout failed." });
    return res.status(200).json({ msg: "Logged out successfully" });
  });
});

module.exports = router;

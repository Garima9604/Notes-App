const express = require("express");
const router = express();
const User = require("../models/User");
const passport = require("passport");

router.post("/register", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    console.log("Backend Register Page Details : ", {
      username,
      email,
      password,
    });
    let existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "Email already exists." });
    } else {
      let user = new User({ username, email });
      let newUser = await User.register(user, password);
      await newUser.save();
      req.login(newUser, function (err) {
        if (err) {
          return next(err);
        }
        return res.status(200).json({ msg: "account has been created" });
      });
    }
  } catch (error) {
    return res.status(400).json({ msg: "something went wrong" });
  }
});

module.exports = router;

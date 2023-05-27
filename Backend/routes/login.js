const path = require("path");
const User = require("../models/register");

const express = require("express");
const router = express.Router();
router.post("/login", async(req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
//   console.log(email, password);

  try {
    const user = await User.findOne({ where: { email } });
    // console.log("user",user)
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    return res.status(200).json({ message: 'Logged in successfully' });
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;

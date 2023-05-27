const path = require("path");
const User = require("../models/register");

const express = require("express");
const router = express.Router();

router.post("/register", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  
  console.log(email, password, phone);
  console.log("user",User)
  User.create({
    email: email,
    phone: phone,
    password: password
  })
    .then(result=>{
        console.log(result);
    })
    .catch((e) => {
      console.log(error);
    });
  // Do something with the data (e.g. store it in a database)

  res.send("Data received!");
});

module.exports = router;

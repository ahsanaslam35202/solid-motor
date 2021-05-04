const express = require("express");
const router = express.Router();
var bcrypt = require("bcryptjs");

const { Admin } = require("../models/Admin");

// router.post("/register", async (req, res) => {
//   let admin = await Admin.findOne({ email: req.body.email });
//   if (admin != null) {
//     return res.status(400).send("Sorry, Admin already exists.");
//   }
//   admin = new Admin();
//   admin.firstName = req.body.firstName;
//   admin.lastName = req.body.lastName;
//   admin.email = req.body.email;
//   admin.password = req.body.password;
//   let salt = await bcrypt.genSalt(10);
//   admin.password = await bcrypt.hash(admin.password, salt);
//   await admin.save();
//   return res.send();
// });

module.exports = router;

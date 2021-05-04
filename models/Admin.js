const mongoose = require("mongoose");
const Joi = require("joi");

var admin = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

var Admin = mongoose.model("Admin", admin);
module.exports.Admin = Admin;

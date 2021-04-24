const mongoose = require("mongoose");
const Joi = require("joi");

var userSchema = mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  suffix: String,
  dateOfBirth: Date,
  annualIncome: Number,
  homeAddress: String,
  email: String,
  password: String,
  phoneNumber: String,
});
var User = mongoose.model("User", userSchema);

function validateUser(data) {
  const schema = Joi.object({
    firstName: Joi.string().min(3).required(),
    middleName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    suffix: Joi.string().min(2).required(),
    dateOfBirth: Joi.date().required(),
    annualIncome: Joi.number().required(),
    homeAddress: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    phoneNumber: Joi.string().min(11).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
function validateUserLogin(data) {
  const schema = Joi.object({
    email: Joi.string().email().min(3).required(),
    password: Joi.required(),
  });
  return schema.validate(data, { abortEarly: false });
}

module.exports.User = User;
module.exports.validateUser = validateUser;
module.exports.validateUserLogin = validateUserLogin;

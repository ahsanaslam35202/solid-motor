const mongoose = require("mongoose");
const Joi = require("joi");

var buyRequestSchema = mongoose.Schema({
  carId: mongoose.Types.ObjectId,
  userId: mongoose.Types.ObjectId,
  downPayment: Number,
  monthlyPayment: Number,
  numberOfMonths: Number,
  creditScore: Number,
  annualIncome: Number,
});

var BuyRequest = mongoose.model("BuyRequest", buyRequestSchema);
module.exports.BuyRequest = BuyRequest;

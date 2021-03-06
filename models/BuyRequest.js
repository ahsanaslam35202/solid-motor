const mongoose = require("mongoose");
const Joi = require("joi");

var buyRequestSchema = mongoose.Schema({
  buyType: String,
  userName: String,
  phoneNo: String,
  carId: mongoose.Types.ObjectId,
  downPayment: Number,
  monthlyPayment: Number,
  numberOfMonths: Number,
  creditScore: Number,
  annualIncome: Number,
  carPrice: String,
  carFinancedPrice: String,
});

var BuyRequest = mongoose.model("BuyRequest", buyRequestSchema);
module.exports.BuyRequest = BuyRequest;

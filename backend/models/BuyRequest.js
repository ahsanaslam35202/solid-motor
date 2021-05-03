const mongoose = require("mongoose");
const Joi = require("joi");

var sellTradeSchema = mongoose.Schema({
  carId: mongoose.Types.ObjectId,
  userId: mongoose.Types.ObjectId,
  downPayment: Number,
  monthlyPayment: Number,
  numberOfMonths: Number,
  creditScore: Number,
  annualIncome: Number,
});

var SellTrade = mongoose.model("SellTrade", sellTradeSchema);
module.exports.SellTrade = SellTrade;

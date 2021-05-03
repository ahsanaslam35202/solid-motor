const mongoose = require("mongoose");
const Joi = require("joi");

var sellTradeSchema = mongoose.Schema({
  sellOrTrade: String,
  vinNumber: String,
  carMakeModel: String,
  carModelYear: String,
  drivenMiles: Number,
  fuelType: String,
  engineType: String,
  transmission: String,
  driveTrain: String,
  extendedFeatures: String,
  carHistory: String,
  estimatedPrice: Number,
  userId: mongoose.Types.ObjectId,
});

var SellTrade = mongoose.model("SellTrade", sellTradeSchema);
module.exports.SellTrade = SellTrade;

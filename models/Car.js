const mongoose = require("mongoose");
const Joi = require("joi");

// var features = mongoose.Schema({
//   cooledSeats: Boolean,
//   heatedSeats: Boolean,
//   leatherInterior: Boolean,
//   sunRoof: Boolean,
//   blindSpotSensor: Boolean,
//   laneKeepingAssist: Boolean,
//   parkingAssist: Boolean,
//   rearCameraView: Boolean,
//   gpsNavigation: Boolean,
// });

var carSchema = mongoose.Schema({
  make: String,
  name: String,
  model: String,
  images: [String],
  fuel: String,
  milesDriven: Number,
  body: String,
  modelYear: Number,
  exteriorColor: String,
  interiorColor: String,
  engineType: String,
  engineCapacity: String,
  transmission: String,
  driveTrain: String,
  doors: Number,
  numberOfKeys: Number,
  vin: Number,
  stock: Number,
  vehicleId: Number,
  mpg: Number,
  extendedFeatures: [String],
  downPayment: Number,
  monthlyPayment: Number,
  numberOfMonths: Number,
  price: Number,
  shippingCharges: Number,
  taxAndRegistrationCharges: Number,
  dealerFees: Number,
});
var Car = mongoose.model("Car", carSchema);

// function validateCar(data) {
//   const schema = Joi.object({
//     firstName: Joi.string().min(3).required(),
//     middleName: Joi.string().min(3).required(),
//     lastName: Joi.string().min(3).required(),
//     suffix: Joi.string().min(2).required(),
//     dateOfBirth: Joi.date().required(),
//     annualIncome: Joi.number().required(),
//     homeAddress: Joi.string().required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().min(5).required(),
//     phoneNumber: Joi.string().min(11).required(),
//   });
//   return schema.validate(data, { abortEarly: false });
// }

module.exports.Car = Car;
// module.exports.validateCar = validateCar;

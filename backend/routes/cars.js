const express = require("express");
const router = express.Router();

const { Car } = require("../models/Car");

router.get("/", async (req, res) => {
  const cars = await Car.find();
  res.send(cars);
});

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const cars = await Car.findOne({ _id: req.params.id });
  console.log(cars);
  res.send(cars);
});

router.post("/", async (req, res) => {
  let car = new Car({
    make: req.body.make,
    name: req.body.name,
    model: req.body.model,
    images: req.body.images,
    fuel: req.body.fuel,
    milesDriven: req.body.milesDriven,
    body: req.body.body,
    modelYear: req.body.modelYear,
    exteriorColor: req.body.exteriorColor,
    interiorColor: req.body.interiorColor,
    engineType: req.body.engineType,
    engineCapacity: req.body.engineCapacity,
    transmission: req.body.transmission,
    driveTrains: req.body.driveTrains,
    doors: req.body.doors,
    numberOfKeys: req.body.numberOfKeys,
    vin: req.body.vin,
    stock: req.body.stock,
    vehicleId: req.body.vehicleId,
    mpg: req.body.mpg,
    extendedFeatures: req.body.extendedFeatures,
    downPayment: req.body.downPayment,
    monthlyPayment: req.body.monthlyPayment,
    price: req.body.price,
    shippingCharges: req.body.shippingCharges,
    taxAndRegistrationCharges: req.body.taxAndRegistrationCharges,
    dealerFees: req.body.dealerFees,
  });

  car = await car
    .save()
    .then(() => {
      res.send(car);
    })
    .catch((err) => {
      console.log("error occured " + err);
    });
});

router.put("/:id", async (req, res) => {
  const car = await Car.updateOne(
    { _id: req.params.id },
    {
      make: req.body.make,
      name: req.body.name,
      model: req.body.model,
      images: req.body.images,
      fuel: req.body.fuel,
      milesDriven: req.body.milesDriven,
      body: req.body.body,
      modelYear: req.body.modelYear,
      exteriorColor: req.body.exteriorColor,
      interiorColor: req.body.interiorColor,
      engineType: req.body.engineType,
      engineCapacity: req.body.engineCapacity,
      transmission: req.body.transmission,
      driveTrains: req.body.driveTrains,
      doors: req.body.doors,
      numberOfKeys: req.body.numberOfKeys,
      vin: req.body.vin,
      stock: req.body.stock,
      vehicleId: req.body.vehicleId,
      mpg: req.body.mpg,
      extendedFeatures: req.body.extendedFeatures,
      downPayment: req.body.downPayment,
      monthlyPayment: req.body.monthlyPayment,
      price: req.body.price,
      shippingCharges: req.body.shippingCharges,
      taxAndRegistrationCharges: req.body.taxAndRegistrationCharges,
      dealerFees: req.body.dealerFees,
    },
    { new: true }
  );
  if (!car) return res.status(404).send("Car not found");
  res.send(car);
});

router.delete("/:id", async (req, res) => {
  const car = await Car.findByIdAndDelete(req.params.id);

  if (!car) return res.status(404).send("Car not found");

  res.send(car);
});

module.exports = router;

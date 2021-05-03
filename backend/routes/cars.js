const express = require("express");
const router = express.Router();
const multer = require("multer");

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
  console.log(req.body.car);
  // var storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, "public");
  //   },
  //   filename: function (req, file, cb) {
  //     cb(null, Date.now() + "-" + file.originalname);
  //   },
  // });
  // var upload = multer({ storage: storage }).array("file");
  // upload(req, res, function (err) {
  //   if (err instanceof multer.MulterError) {
  //     return res.status(500).json(err);
  //   } else if (err) {
  //     return res.status(500).json(err);
  //   }
  //   return res.status(200).send(req.file);
  // });
  const monthlyPayment =
    (req.body.price.value - req.body.downPayment.value) /
    req.body.numberOfMonths.value;
  console.log(monthlyPayment);
  let car = new Car({
    make: req.body.make.value,
    name: req.body.name.value,
    model: req.body.model.value,
    // images: req.body.images.value,
    fuel: req.body.fuel.value,
    milesDriven: req.body.milesDriven.value,
    body: req.body.body.value,
    modelYear: req.body.modelYear.value,
    exteriorColor: req.body.exteriorColor.value,
    interiorColor: req.body.interiorColor.value,
    engineType: req.body.engineType.value,
    engineCapacity: req.body.engineCapacity.value,
    transmission: req.body.transmission.value,
    driveTrains: req.body.driveTrain.value,
    doors: req.body.doors.value,
    numberOfKeys: req.body.numberOfKeys.value,
    vin: req.body.vin.value,
    stock: req.body.stock.value,
    vehicleId: req.body.vehicleId.value,
    mpg: req.body.mpg.value,
    extendedFeatures: req.body.extendedFeatures,
    downPayment: req.body.downPayment.value,
    monthlyPayment: monthlyPayment,
    price: req.body.price.value,
    shippingCharges: req.body.shippingCharges.value,
    taxAndRegistrationCharges: req.body.taxAndRegistrationCharges.value,
    dealerFees: req.body.dealerFees.value,
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

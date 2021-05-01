const express = require("express");
const router = express.Router();

const { SellTrade } = require("../models/SellTrade");

router.get("/", async (req, res) => {
  const sellTrade = await SellTrade.find();
  res.send(sellTrade);
});

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const sellTrade = await SellTrade.findOne({ _id: req.params.id });
  console.log(sellTrade);
  res.send(sellTrade);
});

router.post("/", async (req, res) => {
  let sellTrade = new SellTrade({
    vinNumber: req.body.vinNumber,
    carMakeModel: req.body.carMakeModel,
    carModelYear: req.body.carModelYear,
    drivenMiles: req.body.drivenMiles,
    fuelType: req.body.fuelType,
    engineType: req.body.engineType,
    transmission: req.body.transmission,
    driveTrain: req.body.driveTrain,
    extendedFeatures: req.body.extendedFeatures,
    carHistory: req.body.carHistory,
  });

  sellTrade = await sellTrade
    .save()
    .then(() => {
      res.send(sellTrade);
    })
    .catch((err) => {
      console.log("error occured " + err);
    });
});

router.put("/:id", async (req, res) => {
  const car = await Car.updateOne(
    { _id: req.params.id },
    {
      vinNumber: req.body.vinNumber,
      carMakeModel: req.body.carMakeModel,
      carModelYear: req.body.carModelYear,
      drivenMiles: req.body.drivenMiles,
      fuelType: req.body.fuelType,
      engineType: req.body.engineType,
      transmission: req.body.transmission,
      driveTrain: req.body.driveTrain,
      extendedFeatures: req.body.extendedFeatures,
      carHistory: req.body.carHistory,
    },
    { new: true }
  );
  if (!sellTrade) return res.status(404).send("Car not found");
  res.send(sellTrade);
});

module.exports = router;

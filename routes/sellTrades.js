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

router.get("/getTradeIn/:id", async (req, res) => {
  const tradeIn = await SellTrade.findOne({ userId: req.params.id }).select({
    estimatedPrice: 1,
  });
  res.send(tradeIn);
});

router.post("/", async (req, res) => {
  let sellTrade = new SellTrade({
    sellOrTrade: req.body.sellOrTrade,
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
    estimatedPrice: req.body.estimatedPrice,
    userId: req.body.userId,
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
  const sellTrade = await SellTrade.updateOne(
    { _id: req.params.id },
    {
      estimatedPrice: req.body.estimatedPrice,
    },
    { new: true }
  );
  if (!sellTrade) return res.status(404).send("Car not found");
  res.send(sellTrade);
});

module.exports = router;

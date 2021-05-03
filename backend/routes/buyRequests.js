const express = require("express");
const router = express.Router();

const { BuyRequest } = require("../models/BuyRequest");

router.get("/", async (req, res) => {
  let buyRequests = await BuyRequest.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $lookup: {
        from: "cars",
        localField: "carId",
        foreignField: "_id",
        as: "car",
      },
    },
  ]);
  console.log(buyRequests);
  res.send(buyRequests);
});

// router.get("/:id", async (req, res) => {
//   const sellTrade = await SellTrade.findOne({ _id: req.params.id });
//   console.log(sellTrade);
//   res.send(sellTrade);
// });

// router.get("/getTradeIn/:id", async (req, res) => {
//   const tradeIn = await SellTrade.findOne({ userId: req.params.id }).select({
//     estimatedPrice: 1,
//   });
//   res.send(tradeIn);
// });

router.post("/", async (req, res) => {
  let buyRequest = new BuyRequest({
    carId: req.body.carId,
    userId: req.body.userId,
    downPayment: req.body.downPayment,
    monthlyPayment: req.body.monthlyPayment,
    numberOfMonths: req.body.numberOfMonths,
    creditScore: req.body.creditScore,
    annualIncome: req.body.annualIncome,
  });

  buyRequest = await buyRequest
    .save()
    .then(() => {
      res.send(buyRequest);
    })
    .catch((err) => {
      console.log("error occured " + err);
    });
});

// router.put("/:id", async (req, res) => {
//   const sellTrade = await SellTrade.updateOne(
//     { _id: req.params.id },
//     {
//       estimatedPrice: req.body.estimatedPrice,
//     },
//     { new: true }
//   );
//   if (!sellTrade) return res.status(404).send("Car not found");
//   res.send(sellTrade);
// });

module.exports = router;

const express = require("express");
const router = express.Router();

const { BuyRequest } = require("../models/BuyRequest");

router.get("/", async (req, res) => {
  let buyRequests = await BuyRequest.aggregate([
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

router.post("/", async (req, res) => {
  let buyRequest = new BuyRequest({
    buyType: req.body.buyType,
    carId: req.body.carId,
    userName: req.body.userName,
    phoneNo: req.body.phoneNo,
    // userId: req.body.userId,
    downPayment: req.body.downPayment,
    monthlyPayment: req.body.monthlyPayment,
    numberOfMonths: req.body.numberOfMonths,
    creditScore: req.body.creditScore,
    annualIncome: req.body.annualIncome,
    carPrice: req.body.carPrice,
    carFinancedPrice: req.body.carFinancedPrice,
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

module.exports = router;

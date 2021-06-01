var express = require("express");
var router = express.Router();
var { User } = require("../models/User");
var bcrypt = require("bcryptjs");
var config = require("config");
var jwt = require("jsonwebtoken");
var validateUserRegMW = require("../middlewares/authUserReg");
var validateUserLoginMW = require("../middlewares/authUserLog");
const { Car } = require("../models/Car");

router.get("/", async (req, res, next) => {
  let user = await User.find();
  res.send(user[0]._id);
});

router.post("/register", async (req, res) => {
  console.log(req.body);
  let newuser = await User.findOne({ email: req.body.email.value });
  if (newuser != null) {
    return res.status(400).send("Sorry, user already exists.");
  }
  newuser = new User();
  newuser.firstName = req.body.firstName.value;
  newuser.middleName = req.body.middleName.value;
  newuser.lastName = req.body.lastName.value;
  newuser.suffix = req.body.suffix.value;
  newuser.dateOfBirth = req.body.dateOfBirth.value;
  newuser.annualIncome = req.body.annualIncome.value;
  newuser.homeAddress = req.body.address.value;
  newuser.email = req.body.email.value;
  newuser.phoneNumber = req.body.phoneNumber.value;
  newuser.password = req.body.password.value;
  newuser.likedCars = [];
  let salt = await bcrypt.genSalt(10);
  newuser.password = await bcrypt.hash(newuser.password, salt);
  await newuser.save();
  return res.send();
  //   return res.send(_.pick(user, ["email", "name"]));
});

router.post("/login", validateUserLoginMW, async (req, res) => {
  console.log(req.body);
  let userData = await User.findOne({
    email: req.body.email,
  });
  if (!userData)
    return res.status(400).send("Sorry, user with this email not found.");

  let likedCars = userData.likedCars;

  let password = await bcrypt.compare(req.body.password, userData.password);
  if (!password) return res.status(400).send("Wrong password");
  console.log(userData.firstName);

  let token = jwt.sign(
    { _id: userData._id, name: userData.firstName },
    config.get("jwt")
  );

  let user2 = jwt.verify(token, config.get("jwt"));
  return res.send({ ok: "login successfull", token, user2 });
});

module.exports = router;

router.put("/likeCar/:id", async (req, res) => {
  console.log(req.body);
  const user = await User.updateOne(
    { _id: req.params.id },
    {
      likedCars: req.body.likedCars,
    },
    { new: true }
  );
  if (!user) return res.status(404).send("User not found");
  res.send(user);
});

router.get("/likedCars/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  var cars = [];

  await Promise.all(
    user.likedCars.map(async (carId) => {
      console.log(carId);
      const car = await Car.findOne({ _id: carId });
      cars.push(car);
      console.log(cars);
    })
  ).then(() => {
    res.send(cars);
  });
  console.log(cars);
  console.log("Outside");
});

router.get("/likedCarsArray/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  console.log(user.likedCars);
  res.send(user.likedCars);
});

// router.get("/likedCars/:id", async (req, res) => {
//   const user = await User.findOne({ _id: req.params.id });
//   var cars = [];

//   user.likedCars.forEach(async (carId) => {
//     console.log(carId);
//     const car = await Car.findOne({ _id: carId });
//     cars.push(car);
//     console.log(cars);
//   });
//   const results = await car;
//   res.send(results);

//   console.log(cars);
//   console.log("Outside");
// });

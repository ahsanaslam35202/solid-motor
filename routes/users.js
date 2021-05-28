var express = require("express");
var router = express.Router();
var { User } = require("../models/User");
var bcrypt = require("bcryptjs");
var config = require("config");
var jwt = require("jsonwebtoken");
var validateUserRegMW = require("../middlewares/authUserReg");
var validateUserLoginMW = require("../middlewares/authUserLog");

router.get("/", async (req, res, next) => {
  let user = await User.find();
  res.send(user[0]._id);
});

router.post("/register", async (req, res) => {
  console.log(req.body);
  let newuser = await User.findOne({ email: req.body.email.value });
  console.log("a");
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
  let salt = await bcrypt.genSalt(10);
  newuser.password = await bcrypt.hash(newuser.password, salt);
  await newuser.save();
  return res.send();
  //   return res.send(_.pick(user, ["email", "name"]));
});

router.post("/login", validateUserLoginMW, async (req, res) => {
  console.log(req.body.email);
  let userData = await User.findOne(
    {
      email: req.body.email,
    },
    (err, estab) => {
      if (err) {
        return res.send(err);
      }
      console.log("inside the function: " + estab.name);
      // what ever proccing you need to do with result do here and finally return res
      res.json(estab);
    }
  );
  console.log(userData);
  if (!userData)
    return res.status(400).send("Sorry, user with this email not found.");
  console.log("Bcrypt done");

  let password = await bcrypt.compare(req.body.password, userData.password);
  if (!password) return res.status(400).send("Wrong password");
  console.log(userData.firstName);

  let token = jwt.sign(
    { _id: userData._id, name: userData.firstName },
    config.get("jwt")
  );

  console.log(token);

  let user2 = jwt.verify(token, config.get("jwt"));
  return res.send({ ok: "login successfull", token, user2 });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const ObjectsToCsv = require("objects-to-csv");
const jsftp = require("jsftp");

const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

const { Car } = require("../models/Car");

router.get("/", async (req, res) => {
  const cars = await Car.find();
  console.log(cars);
  res.send(cars);
});

router.get("/csv/", async (req, res) => {
  let csvContent = [];
  const cars = await Car.find();

  cars.forEach((item) => {
    let row = {};
    let carImages = "";
    row.vinNumber = item.vin;
    row.stock = item.stock;
    row.make = item.make;
    row.model = item.name;
    row.status = "Used";
    item.sendImages.forEach((item2) => {
      carImages =
        carImages +
        "http://solidmotors.com/api/cars/images/" +
        item.vin +
        "/sendImages/" +
        item2 +
        "|";
    });
    row.images = carImages;
    csvContent.push(row);
  });
  const csv = new ObjectsToCsv(csvContent);
  await csv.toDisk("./solidmotorsllc.csv").then(() => {
    console.log("Done save csv");
    let Client = require("ssh2-sftp-client");
    let client = new Client();
    let data = fs.createReadStream("./solidmotorsllc.csv");
    let remote = "/solidmotorsllc.csv";

    client
      .connect({
        host: "swipetospin.exavault.com",
        port: "22",
        username: "stssftp_solidmotorsllc",
        password: "HySfQ8QO",
      })
      .then(() => {
        console.log("Connected");
        return client.put(data, remote);
      })
      .then(() => {
        console.log("Done");
        return client.end();
      })
      .catch((err) => {
        console.log("err");
        console.error(err.message);
      });
  });
  console.log(csvContent);
});

router.get("/related/:make", async (req, res) => {
  const cars = await Car.find({ make: req.params.make });
  console.log(cars);
  res.send(cars);
});

router.get("/:id", async (req, res) => {
  const cars = await Car.findOne({ vin: req.params.id });
  res.send(cars);
});

router.get("/images/:vin/displayImage/:img", (req, res) => {
  const vin = req.params.vin;
  const img = req.params.img;
  res.sendFile(
    path.join(__dirname + "/../public/" + vin + "/displayImage/" + img)
  );
});

router.get("/images/:vin/otherImages/:img", (req, res) => {
  const vin = req.params.vin;
  const img = req.params.img;
  res.sendFile(
    path.join(__dirname + "/../public/" + vin + "/otherImages/" + img)
  );
});

router.get("/images/:vin/sendImages/:img", (req, res) => {
  const vin = req.params.vin;
  const img = req.params.img;
  res.sendFile(
    path.join(__dirname + "/../public/" + vin + "/sendImages/" + img)
  );
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    const vin = req.body.vin;
    const type = file.fieldname;
    if (!fs.existsSync("./public/" + vin)) {
      fs.mkdirSync("./public/" + vin);
      fs.mkdirSync("./public/" + vin + "/displayImage");
      fs.mkdirSync("./public/" + vin + "/otherImages");
      fs.mkdirSync("./public/" + vin + "/sendImages");
    }
    cb(null, "public/" + vin + "/" + type);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post(
  "/",
  upload.fields([
    { name: "displayImage" },
    { name: "otherImages" },
    { name: "sendImages" },
  ]),
  async (req, res) => {
    var otherImages = [];
    var sendImages = [];

    // const { files } = req;
    // for (let x = 0; x < files.otherImages.length; x++) {
    //   otherImages.push(files.otherImages[x].originalname);
    // }
    // for (let x = 0; x < files.sendImages.length; x++) {
    //   sendImages.push(files.sendImages[x].originalname);
    // }
    const monthlyPayment =
      (parseInt(req.body.price) - parseInt(req.body.downPayment)) /
      parseInt(req.body.numberOfMonths);
    let car = new Car({
      make: req.body.make,
      name: req.body.name,
      model: req.body.model,
      displayImage: req.files.displayImage[0].originalname,
      otherImages: otherImages,
      sendImages: sendImages,
      fuel: req.body.fuel,
      milesDriven: req.body.milesDriven,
      body: req.body.body,
      modelYear: req.body.modelYear,
      exteriorColor: req.body.exteriorColor,
      interiorColor: req.body.interiorColor,
      engineType: req.body.engineType,
      engineCapacity: req.body.engineCapacity,
      transmission: req.body.transmission,
      driveTrain: req.body.driveTrain,
      doors: req.body.doors,
      numberOfKeys: req.body.numberOfKeys,
      vin: req.body.vin,
      stock: req.body.stock,
      vehicleId: req.body.vehicleId,
      mpg: req.body.mpg,
      mpgHW: req.body.mpgHW,
      extendedFeatures: req.body.extendedFeatures,
      downPayment: req.body.downPayment,
      monthlyPayment: monthlyPayment,
      numberOfMonths: req.body.numberOfMonths,
      price: req.body.price,
      shippingCharges: req.body.shippingCharges,
      taxAndRegistrationCharges: req.body.taxAndRegistrationCharges,
      dealerFees: req.body.dealerFees,
      views: 0,
      likes: 0,
      brochureLink: req.body.brochureLink,
      reportLink: req.body.reportLink,
    });

    car = await car
      .save()
      .then(() => {
        res.send(car);
      })
      .catch((err) => {
        console.log("error occured " + err);
      });
  }
);

router.put("/:id", async (req, res) => {
  console.log(req.body);
  // const monthlyPayment =
  //   (parseInt(req.body.price) - parseInt(req.body.downPayment)) /
  //   parseInt(req.body.numberOfMonths);
  // const car = await Car.updateOne(
  //   { _id: req.params.id },
  //   {
  //     make: req.body.make,
  //     name: req.body.name,
  //     model: req.body.model,
  //     fuel: req.body.fuel,
  //     milesDriven: req.body.milesDriven,
  //     body: req.body.body,
  //     modelYear: req.body.modelYear,
  //     exteriorColor: req.body.exteriorColor,
  //     interiorColor: req.body.interiorColor,
  //     engineType: req.body.engineType,
  //     engineCapacity: req.body.engineCapacity,
  //     transmission: req.body.transmission,
  //     driveTrain: req.body.driveTrain,
  //     doors: req.body.doors,
  //     numberOfKeys: req.body.numberOfKeys,
  //     vin: req.body.vin,
  //     stock: req.body.stock,
  //     vehicleId: req.body.vehicleId,
  //     mpg: req.body.mpg,
  //     extendedFeatures: req.body.extendedFeatures,
  //     downPayment: req.body.downPayment,
  //     monthlyPayment: monthlyPayment,
  //     numberOfMonths: req.body.numberOfMonths,
  //     price: req.body.price,
  //     shippingCharges: req.body.shippingCharges,
  //     taxAndRegistrationCharges: req.body.taxAndRegistrationCharges,
  //     dealerFees: req.body.dealerFees,
  //     brochureLink: req.body.brochureLink,
  //     reportLink: req.body.reportLink,
  //   },
  //   { new: true }
  // );
  // if (!car) return res.status(404).send("Car not found");
  // console.log("Done");
  // res.send(car);
});

router.delete("/:id", async (req, res) => {
  const car = await Car.findByIdAndDelete(req.params.id);
  if (!car) return res.status(404).send("Car not found");
  res.send(car);
});

router.put("/views/:id", async (req, res) => {
  const car = await Car.updateOne(
    { _id: req.params.id },
    {
      views: req.body.views,
    },
    { new: true }
  );
  if (!car) return res.status(404).send("Car not found");
  res.send(car);
});

router.put("/likes/:id", async (req, res) => {
  const car = await Car.updateOne(
    { _id: req.params.id },
    {
      likes: req.body.likes,
    },
    { new: true }
  );
  if (!car) return res.status(404).send("Car not found");
  res.send(car);
});
module.exports = router;

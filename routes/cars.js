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
  // let sftp = new Client();

  // sftp
  //   .connect({
  //     host: "swipetospin.exavault.com",
  //     port: "22",
  //     username: "stssftp_solidmotorsllc",
  //     password: "HySfQ8QO",
  //   })
  //   .then(() => {
  //     client.put("./cars.csv", "/");
  //   });
  // .then((data) => {
  //   console.log(data, "the data info");
  // })
  // .catch((err) => {
  //   console.log(err, "catch error");
  // });

  // var SftpUpload = require("sftp-upload"),
  //   fs = require("fs");

  // var options = {
  //     host: "swipetospin.exavault.com",
  //     username: "stssftp_solidmotorsllc",
  //     password: "HySfQ8QO",
  //     path: "./cars.csv",
  //     remoteDir: "/",
  //     // excludedFolders: ["**/.git", "node_modules"],
  //     // exclude: [".gitignore", ".vscode/tasks.json"],
  //     privateKey: fs.readFileSync("key"),
  //     // passphrase: fs.readFileSync("privateKey_rsa.passphrase"),
  //     // dryRun: false,
  //   },
  //   sftp = new SftpUpload(options);

  // sftp
  //   .on("error", function (err) {
  //     throw err;
  //   })
  //   .on("uploading", function (progress) {
  //     console.log("Uploading", progress.file);
  //     console.log(progress.percent + "% completed");
  //   })
  //   .on("completed", function () {
  //     console.log("Upload Completed");
  //   })
  //   .upload();

  // ++++++++++++++++++++++++++++++++++
  // var FTPS = require("ftps");
  // var ftps = new FTPS({
  //   host: "swipetospin.exavault.com", // required
  //   username: "stssftp_solidmotorsllc", // Optional. Use empty username for anonymous access.
  //   password: "HySfQ8QO", // Required if username is not empty, except when requiresPassword: false
  //   protocol: "sftp", // Optional, values : 'ftp', 'sftp', 'ftps', ... default: 'ftp'
  //   port: 22, // Optional

  //   // Additional commands to pass to lftp, splitted by ';'y
  //   escape: true, // optional, used for escaping shell characters (space, $, etc.), default: true
  //   retries: 2, // Optional, defaults to 1 (1 = no retries, 0 = unlimited retries)
  //   timeout: 10, // Optional, Time before failing a connection attempt. Defaults to 10
  //   retryInterval: 5, // Optional, Time in seconds between attempts. Defaults to 5
  //   retryMultiplier: 1, // Optional, Multiplier by which retryInterval is multiplied each time new attempt fails. Defaults to 1
  //   requiresPassword: true, // Optional, defaults to true
  //   autoConfirm: true, // Optional, is used to auto confirm ssl questions on sftp or fish protocols, defaults to false
  //   cwd: "", // Optional, defaults to the directory from where the script is executed
  //   additionalLftpCommands:
  //     'set sftp:connect-program "ssh -a -x -o KexAlgorithms=diffie-hellman-group16-sha512"',

  //   requireSSHKey: false,
  // });
  // console.log("hit");
  // console.log(ftps.cd("/"));
  // ftps.cd("/").addFile("./cars.csv").exec(console.log);

  // ftps.put("./cars.csv", ["/"]); // alias: addFile
  // ftps.get("/list.csv", ["./hello.csv"]); // download remote file and save to local path (if not given, use same name as remote file), alias: getFile

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // var PromiseFtp = require("promise-ftp");
  // var ftp = new PromiseFtp();

  // ftp
  //   .connect({
  //     host: "sftp.swipetospin.exavault.com",
  //     // protocol: "sftp",
  //     user: "stssftp_solidmotorsllc",
  //     password: "HySfQ8QO",
  //     port: "22",
  //   })
  //   .then(function (serverMessage) {
  //     console.log("Server message: " + serverMessage);
  //     // return ftp.list("/");
  //     return ftp.put("./list.csv", "Cars_List.csv");
  //   })
  //   .then(function (list) {
  //     console.log("Directory listing:");
  //     console.dir(list);
  //     return ftp.end();
  //   });

  // async function uploadImageToFtp(fileName, path) {
  //   const client = new ftp.Client();
  //   client.ftp.verbose = true;

  //   FTP_HOST = "sftp.swipetospin.exavault.com";
  //   FTP_USER = "stssftp_solidmotorsllc";
  //   FTP_PASSWORD = "HySfQ8QO";
  //   FTP_PORT = 22;

  //   try {
  //     await client.access({
  //       host: process.env.FTP_HOST,
  //       user: process.env.FTP_USER,
  //       password: process.env.FTP_PASSWORD,
  //       port: process.env.FTP_PORT,
  //       secure: false,
  //     });
  //     await client.uploadFrom("./list.csv", "/" + cars.csv);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   client.close();
  // }

  // uploadImageToFtp();

  // let csvContent = "data:text/csv;charset=utf-8,";
  let csvContent = [];
  let header = "Vin Number, Stock, Make, Model, Images";
  csvContent.push(header);

  const cars = await Car.find();

  cars.forEach((item) => {
    let row = {};
    let carImages = "";
    row.vinNumber = item.vin;
    row.stock = item.stock;
    row.make = item.make;
    row.model = item.name;
    item.sendImages.forEach((item2) => {
      carImages =
        carImages +
        "http://solid-motor-app.herokuapp.com/api/cars/images/" +
        item.vin +
        "/sendImages/" +
        item2 +
        "|";
    });
    row.images = carImages;
    csvContent.push(row);
  });
  const csv = new ObjectsToCsv(csvContent);
  await csv.toDisk("./cars.csv").then(() => {
    console.log("Done save csv");
  });
  console.log(csvContent);

  let Client = require("ssh2-sftp-client");
  let client = new Client();
  let data = fs.createReadStream("./cars.csv");
  let remote = "/cars.csv";

  client
    .connect({
      host: "swipetospin.exavault.com",
      port: "22",
      username: "stssftp_solidmotorsllc",
      password: "HySfQ8QO",
    })
    .then(() => {
      return client.put(data, remote);
    })
    .then(() => {
      return client.end();
    })
    .catch((err) => {
      console.error(err.message);
    });

  // const Ftp = new jsftp({
  //   host: "sftp:swipetospin.exavault.com",
  //   // protocol: "sftp",
  //   port: "22", // defaults to 21
  //   user: "stssftp_solidmotorsllc", // defaults to "anonymous"
  //   pass: "HySfQ8QO", // defaults to "@anonymous"
  //   debugMode: true, // defaults to "@anonymous"
  // });

  // console.log(csvContent);

  // Ftp.put("./list.csv", "/cars.csv", function (err) {
  //   if (!err) res.send(200);
  //   else res.send(err);
  // });
});

router.get("/related/:make", async (req, res) => {
  const cars = await Car.find({ make: req.params.make });
  console.log(cars);
  res.send(cars);
});

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const cars = await Car.findOne({ _id: req.params.id });
  console.log(cars);
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
    console.log(req.body);
    console.log(req.files);

    const { files } = req;
    for (let x = 0; x < files.otherImages.length; x++) {
      otherImages.push(files.otherImages[x].originalname);
    }
    for (let x = 0; x < files.sendImages.length; x++) {
      sendImages.push(files.sendImages[x].originalname);
    }
    const monthlyPayment =
      (parseInt(req.body.price) - parseInt(req.body.downPayment)) /
      parseInt(req.body.numberOfMonths);
    console.log(monthlyPayment);
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
      extendedFeatures: req.body.extendedFeatures,
      downPayment: req.body.downPayment,
      monthlyPayment: monthlyPayment,
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
      brochureLink: req.body.brochureLink,
      reportLink: req.body.reportLink,
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

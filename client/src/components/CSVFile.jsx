import { Slider, Typography } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { sendCSV } from "../services/carsService";
import { isLoggedin, logout } from "../services/userService";
import CarCard from "./CarCard";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import CallBar from "./CallBar";

const CSVFile = (props) => {
  const sendFile = async () => {
    await sendCSV()
      .then(() => {
        console.log("Done");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // import initFTPService from "ftp-service";
  // import { initDelayService } from "common-services";

  // const delay = await initDelayService({
  //   log: console.log.bind(console),
  // });
  // const jwt = await initFTPService({
  //   FTP: {
  //     host: "localhost",
  //     user: "user",
  //     pasword: "pwd",
  //   },
  //   FTP_CONFIG: { base: "" },
  //   delay,
  //   log: console.log.bind(console),
  // });

  // const files = await ftp.list("/");

  // const ftp = require("basic-ftp");

  // async function example() {
  //   const client = ftp.Client();
  //   client.ftp.verbose = true;
  //   try {
  //     await client.access({
  //       host: "files.000webhost.com",
  //       user: "temp-site321",
  //       password: "321987654",
  //       port: "21",
  //       secure: true,
  //     });
  //     console.log(await client.list());
  //     // await client.uploadFrom("README.md", "README_FTP.md");
  //     // await client.downloadTo("README_COPY.md", "README_FTP.md");
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   client.close();
  // }

  // example();

  // let csvContent = "data:text/csv;charset=utf-8,";
  // let header = "Vin Number, Stock, Make, Model, Images";
  // csvContent = csvContent + header;

  // cars.forEach((item) => {
  //   let row = [];
  //   let carImages = "";
  //   row.push(item.vin);
  //   row.push(item.stock);
  //   row.push(item.make);
  //   row.push(item.name);
  //   item.sendImages.forEach((item2) => {
  //     carImages =
  //       carImages +
  //       "http://solid-motor-app.herokuapp.com/api/cars/images/" +
  //       item.vin +
  //       "/sendImages/" +
  //       item2 +
  //       "|";
  //   });

  //   row.push(carImages);

  //   csvContent += row + "\r\n";
  // });

  // var encodedUri = encodeURI(csvContent);
  // var link = document.createElement("a");
  // link.setAttribute("href", encodedUri);
  // link.setAttribute("download", "my.csv");
  // document.body.appendChild(link); // Required for FF

  // link.click();
  // const jsftp = require("jsftp");
  // const Ftp = new jsftp({
  //   host: "swipetospin.exavault.com",
  //   port: 22, // defaults to 21
  //   user: "ustssftp_solidmotorsllcser", // defaults to "anonymous"
  //   pass: "HySfQ8QO", // defaults to "@anonymous"
  //   debugMode: true, // defaults to "@anonymous"
  // });

  //   var fs = require('fs');
  // var Ftp = new JSFtp({
  //     host: "ftp.some.net",
  //     port: 21, // defaults to 21
  //     user: "username", // defaults to "anonymous"
  //     pass: "pass",
  //     debugMode: true // defaults to "@anonymous"
  // });

  // function uploadBegin() {
  //   exports.UploadToFtP = function (req, res) {
  //     Ftp.put(encodedUri, "/CSVFile", function (err) {
  //       if (!err) res.send(200);
  //       else res.send(err);
  //     });
  //   };
  // }

  return (
    <>
      <div className="cars-row-container mobile-mt50">
        <div id="car-row" className="row mt-0"></div>
        <button
          onClick={() => {
            sendFile();
          }}
        >
          Download
        </button>
        {/* <button
          onClick={() => {
            uploadBegin();
          }}
        >
          UploadFile
        </button> */}
      </div>
    </>
  );
};

export default CSVFile;

import { Slider, Typography } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { getCars } from "../services/carsService";
import { isLoggedin, logout } from "../services/userService";
import CarCard from "./CarCard";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import CallBar from "./CallBar";

const CSVFile = (props) => {
  const [cars, setCars] = React.useState([]);

  const getCarsData = async () => {
    var { data } = await getCars();
    const cars = [...data];
    cars.forEach((car) => {
      const carName = car.make + " " + car.name;
      car.carName = carName;
    });
    setCars(cars);
    var { data } = await axios.get("http://localhost:3000/api/cars/images/a");
    console.log(cars);
  };

  React.useEffect(() => {
    getCarsData();
  }, []);

  let csvContent = "data:text/csv;charset=utf-8,";
  let header = "Vin Number, Stock, Make, Model, Images";
  csvContent = csvContent + header;

  cars.forEach((item) => {
    let row = [];
    let carImages = "";
    row.push(item.vin);
    row.push(item.stock);
    row.push(item.make);
    row.push(item.name);
    item.sendImages.forEach((item2) => {
      carImages =
        carImages +
        "http://solid-motor-app.herokuapp.com/api/cars/images/" +
        item.vin +
        "/sendImages/" +
        item2 +
        "|";
    });

    row.push(carImages);

    csvContent += row + "\r\n";
  });

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", encodedUri);
  document.body.appendChild(link); // Required for FF

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
      {console.log("HElloo ji")}
      <div className="cars-row-container mobile-mt50">
        <div id="car-row" className="row mt-0">
          {cars.map((item, index) => console.log(item.vin))}
        </div>
        <button
          onClick={() => {
            link.click();
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

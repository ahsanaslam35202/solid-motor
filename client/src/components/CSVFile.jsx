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
    console.log(data);
    console.log(cars);
    // setDisplayImage(data);
  };

  React.useEffect(() => {
    getCarsData();
  }, []);

  const rows = [
    ["name1", "city1", "some other info"],
    ["name2", "city2", "more info"],
  ];

  let arrayData = [];
  arrayData[0] = {
    name: "Sigit",
    country: "Indonesia",
    email: "sigit@gmail.com",
  };
  arrayData[1] = { name: "Joana", country: "Brazil", email: "Joana@gmail.com" };
  arrayData[2] = {
    name: "Albert",
    country: "Mexico",
    email: "albert@gmail.com",
  };
  arrayData[3] = {
    name: "Nuuna",
    country: "South Korea",
    email: "Nuuna@gmail.com",
  };
  arrayData[4] = {
    name: "Aroon",
    country: "Irlandia",
    email: "aroon@gmail.com",
  };

  let csvContent = "data:text/csv;charset=utf-8,";

  //   rows.forEach(function (rowArray) {
  //     let row = rowArray.join(",");
  //     csvContent += row + "\r\n";
  //   });

  //   arrayData.forEach((obj) => {
  //     let row = [];
  //     for (key in obj) {
  //       if (obj.hasOwnProperty(key)) {
  //         row.push(obj[key]);
  //       }
  //     }
  //     csvContent += row.join(delimiter) + "\n";
  //   });

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
  link.setAttribute("download", "my_data.csv");
  document.body.appendChild(link); // Required for FF

  // link.click();

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
      </div>
    </>
  );
};

export default CSVFile;

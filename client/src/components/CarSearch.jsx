import { Slider, Typography } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { getCars } from "../services/carsService";
import { isLoggedin, logout } from "../services/userService";
import CarCard from "./CarCard";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const CarSearch = () => {
  const forceUpdate = useForceUpdate();
  const handleLogout = async (e) => {
    await logout();
    forceUpdate();
  };

  const [cars, setCars] = React.useState([]);
  const [updatedCars, setUpdatedCars] = React.useState([]);
  const [displayImage, setDisplayImage] = React.useState([]);
  const [makes, setMakes] = React.useState([]);
  const [bodyTypes, setBodyTypes] = React.useState([]);
  const [transmissions, setTransmissions] = React.useState([]);
  const [driveTrains, setDriveTrains] = React.useState([]);
  const [engineTypes, setEngineTypes] = React.useState([]);
  const [colors, setColors] = React.useState([]);
  const [fuelTypes, setFuelTypes] = React.useState([]);
  const [maxDownPayment, setMaxDownPayment] = React.useState(100000);
  const [maxPrice, setMaxPrice] = React.useState(100000);
  const [minYear, setMinYear] = React.useState(
    parseInt(new Date().getFullYear()) - 15
  );
  const [maxMiles, setMaxMiles] = React.useState(500000);
  const [filterFn, setFilterFn] = React.useState({
    fn: (items) => {
      return items;
    },
  });

  const getCarsData = async () => {
    var { data } = await getCars();
    const cars = [...data];
    setCars(cars);
    setUpdatedCars(cars);
    var { data } = await axios.get("http://localhost:3000/api/cars/images/a");
    console.log(data);
    setDisplayImage(data);
  };

  // const handleMakeFilter = () => {
  //   console.log("Handle Make");
  //   if (makes.length > 0) {
  //     var results = cars.filter((obj) => {
  //       return makes.includes(obj.make);
  //     });
  //     const data = [...results];
  //     console.log(data);
  //     setUpdatedCars(data);
  //     handleBodyTypeFilter(data);
  //   } else {
  //     setUpdatedCars(cars);
  //   }
  // };

  // const handleBodyTypeFilter = (data) => {
  //   var results = data.filter((obj) => {
  //     return bodyTypes.includes(obj.body);
  //   });

  //   console.log(results);

  //   const data2 = [...results];
  //   console.log(data2);
  //   setUpdatedCars(data2);
  // };

  // const handleTransmissionFilter = () => {
  //   if (
  //     makes.length == 0 &&
  //     bodyTypes.length == 0 &&
  //     driveTrains.length == 0 &&
  //     engineTypes.length == 0 &&
  //     colors.length == 0 &&
  //     fuelTypes.length == 0
  //   ) {
  //     var results = cars.filter((obj) => {
  //       return transmissions.includes(obj.transmission);
  //     });
  //   } else {
  //     var results = updatedCars.filter((obj) => {
  //       return transmissions.includes(obj.transmission);
  //     });
  //   }

  //   const data = [...results];
  //   setUpdatedCars(data);
  // };

  // const handleDriveTrainFilter = () => {
  //   if (
  //     makes.length == 0 &&
  //     bodyTypes.length == 0 &&
  //     transmissions.length == 0 &&
  //     engineTypes.length == 0 &&
  //     colors.length == 0 &&
  //     fuelTypes.length == 0
  //   ) {
  //     var results = cars.filter((obj) => {
  //       return driveTrains.includes(obj.driveTrain);
  //     });
  //   } else {
  //     var results = updatedCars.filter((obj) => {
  //       return driveTrains.includes(obj.driveTrain);
  //     });
  //   }

  //   const data = [...results];
  //   setUpdatedCars(data);
  // };

  // const handleEngineTypeFilter = () => {
  //   console.log(engineTypes);
  //   if (
  //     makes.length == 0 &&
  //     bodyTypes.length == 0 &&
  //     transmissions.length == 0 &&
  //     driveTrains.length == 0 &&
  //     colors.length == 0 &&
  //     fuelTypes.length == 0
  //   ) {
  //     var results = cars.filter((obj) => {
  //       return engineTypes.includes(obj.engineType);
  //     });
  //   } else {
  //     var results = updatedCars.filter((obj) => {
  //       return engineTypes.includes(obj.engineType);
  //     });
  //   }
  //   const data = [...results];
  //   setUpdatedCars(data);
  // };

  // const handleColorFilter = () => {
  //   if (
  //     makes.length == 0 &&
  //     transmissions.length == 0 &&
  //     driveTrains.length == 0 &&
  //     engineTypes.length == 0 &&
  //     colors.length == 0 &&
  //     fuelTypes.length == 0
  //   ) {
  //     var results = updatedCars.filter((obj) => {
  //       return colors.includes(obj.exteriorColor);
  //     });
  //   } else {
  //     var results = cars.filter((obj) => {
  //       return colors.includes(obj.exteriorColor);
  //     });
  //   }

  //   const data = [...results];
  //   setUpdatedCars(data);
  // };

  // const handleFuelTypeFilter = () => {
  //   if (
  //     makes.length == 0 &&
  //     bodyTypes.length == 0 &&
  //     transmissions.length == 0 &&
  //     driveTrains.length == 0 &&
  //     engineTypes.length == 0 &&
  //     colors.length == 0
  //   ) {
  //     var results = updatedCars.filter((obj) => {
  //       return fuelTypes.includes(obj.body);
  //     });
  //   } else {
  //     var results = cars.filter((obj) => {
  //       return fuelTypes.includes(obj.body);
  //     });
  //   }

  //   const data = [...results];
  //   setUpdatedCars(data);
  // };

  const handleFilters = () => {
    console.log(fuelTypes);
    if (
      makes.length > 0 ||
      bodyTypes.length > 0 ||
      transmissions.length > 0 ||
      driveTrains.length > 0 ||
      engineTypes.length > 0 ||
      colors.length > 0 ||
      fuelTypes.length > 0 ||
      minYear
    ) {
      let data = [...cars];
      if (makes.length > 0) {
        var results = cars.filter((obj) => {
          return makes.includes(obj.make);
        });
        data = [...results];
      }

      if (bodyTypes.length > 0) {
        var results = data.filter((obj) => {
          return bodyTypes.includes(obj.body);
        });
        data = [...results];
      }

      if (transmissions.length > 0) {
        var results = data.filter((obj) => {
          return transmissions.includes(obj.transmission);
        });
        data = [...results];
      }

      if (driveTrains.length > 0) {
        var results = data.filter((obj) => {
          return driveTrains.includes(obj.driveTrain);
        });
        data = [...results];
      }

      if (engineTypes.length > 0) {
        var results = data.filter((obj) => {
          return engineTypes.includes(obj.engineType);
        });
        data = [...results];
      }

      if (colors.length > 0) {
        var results = data.filter((obj) => {
          return colors.includes(obj.exteriorColor);
        });
        data = [...results];
      }

      if (fuelTypes.length > 0) {
        var results = data.filter((obj) => {
          return fuelTypes.includes(obj.fuelType);
        });
        data = [...results];
      }

      var results = data.filter(function (el) {
        return el.modelYear >= minYear;
      });
      data = [...results];

      var results = data.filter((obj) => {
        return obj.downPayment <= maxDownPayment;
      });
      data = [...results];

      var results = data.filter((obj) => {
        return obj.price <= maxPrice;
      });
      data = [...results];

      var results = data.filter((obj) => {
        return obj.milesDriven <= maxMiles;
      });
      data = [...results];

      setUpdatedCars(data);
    } else {
      setUpdatedCars(cars);
    }
  };

  React.useEffect(() => {
    getCarsData();
  }, []);

  React.useEffect(() => {
    handleFilters();
  }, [
    makes,
    bodyTypes,
    transmissions,
    driveTrains,
    engineTypes,
    colors,
    fuelTypes,
    minYear,
    maxMiles,
    maxPrice,
    maxDownPayment,
  ]);

  React.useEffect(() => {
    console.log(updatedCars);
  }, [updatedCars]);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.name.toLowerCase().includes(target.value)
          );
      },
    });
    console.log(filterFn.fn);
  };

  return (
    <>
      {isLoggedin() ? <Navbar2 handleLogout={handleLogout} /> : <Navbar />}
      <div>
        <div className="car-searchbar-container">
          <input
            className="car-searchbar"
            type="search"
            placeholder="Search Cars"
            onChange={handleSearch}
          />
        </div>

        {/* Search Filter */}

        <div style={{ paddingRight: "5%", paddingLeft: "5%" }}>
          <div
            style={{
              marginTop: "30px",
              padding: "10px",
              background: "#c2efff",
              borderRadius: "8px",
            }}
          >
            <nav
              className="navbar navbar-light navbar-expand-md car-filter-container search-bar-container"
              style={{ margin: "0px" }}
            >
              <div className="container-fluid">
                <h4 style={{ paddingLeft: "2%" }} className="dektop-d-none">
                  Car Filters
                </h4>
                <button
                  data-toggle="collapse"
                  className="navbar-toggler"
                  data-target="#navcol-2"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span
                    className="dropdown-toggle"
                    style={{ paddingRight: "5%" }}
                  />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navcol-2"
                  style={{ margin: "0px" }}
                >
                  <ul className="navbar-nav nav-div-container">
                    <li className="nav-item dropdown drop-bar">
                      <a
                        className="dropdown-toggle nav-link text-center"
                        aria-expanded="false"
                        data-toggle="dropdown"
                        href="#"
                      >
                        Car Price{" "}
                      </a>
                      <div className="dropdown-menu wd-250">
                        <div className="dropdown-container">
                          <div className="row">
                            {/* <div className="col-md-6">
                              <div className="price-card mobile-mt-10">
                                <div
                                  className="d-flex w-100"
                                  style={{
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <h1
                                    className="w-50 price-card-heading"
                                    style={{ marginTop: "5px" }}
                                  >
                                    Downpayment
                                  </h1>
                                  <h5>{maxDownPayment}</h5>
                                </div>
                                <input
                                  type="range"
                                  className="price-card-range"
                                  min={10000}
                                  max={100000}
                                  step={500}
                                  value={maxDownPayment}
                                  onChange={(e) => {
                                    setMaxDownPayment(e.target.value);
                                  }}
                                />
                                <h1 className="price-card-heading">
                                  Solid Motors Car Finance
                                </h1>
                                <p className="price-card-para">
                                  Answer a few questions about your car and get
                                  an instant value. This only takes 2 minutes.
                                </p>
                                <button
                                  className="btn btn-primary apply-card-button"
                                  type="button"
                                >
                                  Loan Calculator
                                </button>
                              </div>
                            </div> */}
                            <div className="col-md-12">
                              <div className="price-card mobile-mt-10">
                                <div
                                  className="d-flex w-100"
                                  style={{
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <h1
                                    className="w-50 price-card-heading"
                                    style={{ marginTop: "5px" }}
                                  >
                                    Car Price
                                  </h1>
                                  <h5>{maxPrice}</h5>
                                </div>
                                <input
                                  type="range"
                                  className="price-card-range"
                                  min={10000}
                                  max={100000}
                                  step={500}
                                  value={maxPrice}
                                  onChange={(e) => {
                                    setMaxPrice(e.target.value);
                                  }}
                                />
                                <h1 className="price-card-heading">
                                  Solid Motors Trade in Offer
                                </h1>
                                <p className="price-card-para">
                                  Answer a few questions about your car and get
                                  an instant value. This only takes 2 minutes.
                                </p>
                                <a href="./trade">
                                  <button
                                    className="btn btn-primary apply-card-button"
                                    type="button"
                                  >
                                    Trade In Your Car
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown drop-bar">
                      <a
                        className="dropdown-toggle nav-link text-center"
                        aria-expanded="false"
                        data-toggle="dropdown"
                        href="#"
                      >
                        Make / Model
                      </a>
                      <div className="dropdown-menu wd-400">
                        <div className="make-model-container">
                          <div
                            className="drop-car-make-model"
                            style={
                              makes.includes("Toyota")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                var carMakes = [...makes];
                                if (carMakes.includes("Toyota")) {
                                  const index = carMakes.indexOf("Toyota");
                                  if (index > -1) {
                                    carMakes.splice(index, 1);
                                  }
                                } else carMakes.push("Toyota");
                                setMakes(carMakes);
                              }}
                            >
                              Toyota
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              makes.includes("Audi")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                const carMakes = [...makes];
                                if (carMakes.includes("Audi")) {
                                  const index = carMakes.indexOf("Audi");
                                  if (index > -1) {
                                    carMakes.splice(index, 1);
                                  }
                                } else carMakes.push("Audi");
                                setMakes(carMakes);
                              }}
                            >
                              Audi
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              makes.includes("Nissan")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                const carMakes = [...makes];
                                if (carMakes.includes("Nissan")) {
                                  const index = carMakes.indexOf("Nissan");
                                  if (index > -1) {
                                    carMakes.splice(index, 1);
                                  }
                                } else carMakes.push("Nissan");
                                setMakes(carMakes);
                              }}
                            >
                              Nissan
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              makes.includes("Mercedes")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                const carMakes = [...makes];
                                if (carMakes.includes("Mercedes")) {
                                  const index = carMakes.indexOf("Mercedes");
                                  if (index > -1) {
                                    carMakes.splice(index, 1);
                                  }
                                } else carMakes.push("Mercedes");
                                setMakes(carMakes);
                              }}
                            >
                              Mercedes
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              makes.includes("Honda")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                const carMakes = [...makes];
                                if (carMakes.includes("Honda")) {
                                  const index = carMakes.indexOf("Honda");
                                  if (index > -1) {
                                    carMakes.splice(index, 1);
                                  }
                                } else carMakes.push("Honda");
                                setMakes(carMakes);
                              }}
                            >
                              Honda
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              makes.includes("Kia")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                const carMakes = [...makes];
                                if (carMakes.includes("Kia")) {
                                  const index = carMakes.indexOf("Kia");
                                  if (index > -1) {
                                    carMakes.splice(index, 1);
                                  }
                                } else carMakes.push("Kia");
                                setMakes(carMakes);
                              }}
                            >
                              Kia
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              makes.includes("MG")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                const carMakes = [...makes];
                                if (carMakes.includes("MG")) {
                                  const index = carMakes.indexOf("MG");
                                  if (index > -1) {
                                    carMakes.splice(index, 1);
                                  }
                                } else carMakes.push("MG");
                                setMakes(carMakes);
                              }}
                            >
                              MG
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              makes.includes("BMW")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                const carMakes = [...makes];
                                if (carMakes.includes("BMW")) {
                                  const index = carMakes.indexOf("BMW");
                                  if (index > -1) {
                                    carMakes.splice(index, 1);
                                  }
                                } else carMakes.push("BMW");
                                setMakes(carMakes);
                              }}
                            >
                              BMW
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              makes.includes("Dodge")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                const carMakes = [...makes];
                                if (carMakes.includes("Dodge")) {
                                  const index = carMakes.indexOf("Dodge");
                                  if (index > -1) {
                                    carMakes.splice(index, 1);
                                  }
                                } else carMakes.push("Dodge");
                                setMakes(carMakes);
                              }}
                            >
                              Dodge
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown drop-bar">
                      <a
                        className="dropdown-toggle nav-link text-center"
                        aria-expanded="false"
                        data-toggle="dropdown"
                        href="#"
                      >
                        Body Type
                      </a>
                      <div className="dropdown-menu wd-400">
                        <div
                          id="search-bar-cars"
                          className="make-model-container"
                        >
                          <div
                            className="drop-car-make-model"
                            style={
                              bodyTypes.includes("SUV")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <img src="assets/img/suv1.png" />
                            <a
                              onClick={(e) => {
                                var carBodyTypes = [...bodyTypes];
                                if (carBodyTypes.includes("SUV")) {
                                  const index = carBodyTypes.indexOf("SUV");
                                  if (index > -1) {
                                    carBodyTypes.splice(index, 1);
                                  }
                                } else carBodyTypes.push("SUV");
                                setBodyTypes(carBodyTypes);
                              }}
                            >
                              SUV
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              bodyTypes.includes("Sedan")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <img src="assets/img/sedan.png" />
                            <a
                              onClick={(e) => {
                                var carBodyTypes = [...bodyTypes];
                                if (carBodyTypes.includes("Sedan")) {
                                  const index = carBodyTypes.indexOf("Sedan");
                                  if (index > -1) {
                                    carBodyTypes.splice(index, 1);
                                  }
                                } else carBodyTypes.push("Sedan");
                                setBodyTypes(carBodyTypes);
                              }}
                            >
                              Sedan
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              bodyTypes.includes("Hatchback")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <img src="assets/img/hatchback.png" />
                            <a
                              onClick={(e) => {
                                var carBodyTypes = [...bodyTypes];
                                if (carBodyTypes.includes("Hatchback")) {
                                  const index =
                                    carBodyTypes.indexOf("Hatchback");
                                  if (index > -1) {
                                    carBodyTypes.splice(index, 1);
                                  }
                                } else carBodyTypes.push("Hatchback");
                                setBodyTypes(carBodyTypes);
                              }}
                            >
                              Hatchback
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              bodyTypes.includes("Convertible")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <img src="assets/img/convertible.png" />
                            <a
                              onClick={(e) => {
                                var carBodyTypes = [...bodyTypes];
                                if (carBodyTypes.includes("Convertible")) {
                                  const index =
                                    carBodyTypes.indexOf("Convertible");
                                  if (index > -1) {
                                    carBodyTypes.splice(index, 1);
                                  }
                                } else carBodyTypes.push("Convertible");
                                setBodyTypes(carBodyTypes);
                              }}
                            >
                              Convertible
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              bodyTypes.includes("Coupe")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <img src="assets/img/coupe.png" />
                            <a
                              onClick={(e) => {
                                var carBodyTypes = [...bodyTypes];
                                if (carBodyTypes.includes("Coupe")) {
                                  const index = carBodyTypes.indexOf("Coupe");
                                  if (index > -1) {
                                    carBodyTypes.splice(index, 1);
                                  }
                                } else carBodyTypes.push("Coupe");
                                setBodyTypes(carBodyTypes);
                              }}
                            >
                              Coupe
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown drop-bar">
                      <a
                        className="dropdown-toggle nav-link text-center"
                        aria-expanded="false"
                        data-toggle="dropdown"
                        href="#"
                      >
                        Year &amp; Milage&nbsp;
                      </a>
                      <div className="dropdown-menu wd-300">
                        <div style={{ padding: "15px" }}>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="price-card mobile-mt-10">
                                <div
                                  className="d-flex w-100"
                                  style={{
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <h1
                                    className="w-50 price-card-heading"
                                    style={{ marginTop: "5px" }}
                                  >
                                    Year
                                  </h1>
                                  <h5>{minYear}</h5>
                                </div>
                                <input
                                  type="range"
                                  className="price-card-range"
                                  min={parseInt(new Date().getFullYear()) - 15}
                                  max={parseInt(new Date().getFullYear())}
                                  step={1}
                                  value={minYear}
                                  onChange={(e) => {
                                    setMinYear(e.target.value);
                                    console.log(minYear);
                                  }}
                                />
                                {/* <div className={classes.root}>
                                  <Typography id="range-slider" gutterBottom>
                                    Temperature range
                                  </Typography>
                                  <Slider
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    getAriaValueText={valuetext}
                                  />
                                </div> */}
                              </div>
                            </div>
                            <div className="col">
                              <div className="price-card mobile-mt-10">
                                <div
                                  className="d-flex w-100"
                                  style={{
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <h1
                                    className="w-50 price-card-heading"
                                    style={{ marginTop: "5px" }}
                                  >
                                    Miles Driven
                                  </h1>
                                  <h5>{maxMiles}</h5>
                                  {/* <input
                                    type="number"
                                    style={{
                                      marginTop: "3px",
                                      marginBottom: "-10px",
                                    }}
                                    className="price-card-price-input"
                                  /> */}
                                </div>
                                <input
                                  type="range"
                                  className="price-card-range"
                                  min={0}
                                  max={999999}
                                  step={1}
                                  value={maxMiles}
                                  onChange={(e) => {
                                    setMaxMiles(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown drop-bar">
                      <a
                        className="dropdown-toggle nav-link text-center"
                        aria-expanded="false"
                        data-toggle="dropdown"
                        href="#"
                      >
                        Features
                      </a>
                      <div className="dropdown-menu wd-220">
                        <div className="make-model-container">
                          <h1 className="price-card-heading w-100">
                            Transmission
                          </h1>
                          <div
                            className="drop-car-make-model"
                            style={
                              transmissions.includes("Manual")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                const carTransmissions = [...transmissions];
                                if (carTransmissions.includes("Manual")) {
                                  const index =
                                    carTransmissions.indexOf("Manual");
                                  if (index > -1) {
                                    carTransmissions.splice(index, 1);
                                  }
                                } else carTransmissions.push("Manual");
                                setTransmissions(carTransmissions);
                              }}
                            >
                              Manual
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              transmissions.includes("Automatic")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                const carTransmissions = [...transmissions];
                                if (carTransmissions.includes("Automatic")) {
                                  const index =
                                    carTransmissions.indexOf("Automatic");
                                  if (index > -1) {
                                    carTransmissions.splice(index, 1);
                                  }
                                } else carTransmissions.push("Automatic");
                                setTransmissions(carTransmissions);
                              }}
                            >
                              Automatic
                            </a>
                          </div>
                          <h1 className="price-card-heading w-100">
                            Drive Train
                          </h1>
                          <div
                            className="drop-car-make-model"
                            style={
                              driveTrains.includes("FWD")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                var carDriveTrains = [...driveTrains];
                                if (carDriveTrains.includes("FWD")) {
                                  const index = carDriveTrains.indexOf("FWD");
                                  if (index > -1) {
                                    carDriveTrains.splice(index, 1);
                                  }
                                } else carDriveTrains.push("FWD");
                                setDriveTrains(carDriveTrains);
                              }}
                            >
                              FWD
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              driveTrains.includes("AWD")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                var carDriveTrains = [...driveTrains];
                                if (carDriveTrains.includes("AWD")) {
                                  const index = carDriveTrains.indexOf("AWD");
                                  if (index > -1) {
                                    carDriveTrains.splice(index, 1);
                                  }
                                } else carDriveTrains.push("AWD");
                                setDriveTrains(carDriveTrains);
                              }}
                            >
                              AWD
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              driveTrains.includes("RWD")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                var carDriveTrains = [...driveTrains];
                                if (carDriveTrains.includes("RWD")) {
                                  const index = carDriveTrains.indexOf("RWD");
                                  if (index > -1) {
                                    carDriveTrains.splice(index, 1);
                                  }
                                } else carDriveTrains.push("RWD");
                                setDriveTrains(carDriveTrains);
                              }}
                            >
                              RWD
                            </a>
                          </div>
                          <h1 className="price-card-heading w-100">
                            &nbsp;Engine Type
                          </h1>
                          <div
                            className="drop-car-make-model"
                            style={
                              engineTypes.includes("2 Cylinder")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                var carEngineTypes = [...engineTypes];
                                if (carEngineTypes.includes("2 Cylinder")) {
                                  const index =
                                    carEngineTypes.indexOf("2 Cylinder");
                                  if (index > -1) {
                                    carEngineTypes.splice(index, 1);
                                  }
                                } else carEngineTypes.push("2 Cylinder");
                                setEngineTypes(carEngineTypes);
                              }}
                            >
                              2 Cylinder
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              engineTypes.includes("4 Cylinder")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                var carEngineTypes = [...engineTypes];
                                if (carEngineTypes.includes("4 Cylinder")) {
                                  const index =
                                    carEngineTypes.indexOf("4 Cylinder");
                                  if (index > -1) {
                                    carEngineTypes.splice(index, 1);
                                  }
                                } else carEngineTypes.push("4 Cylinder");
                                setEngineTypes(carEngineTypes);
                              }}
                            >
                              4 Cylinder
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              engineTypes.includes("6 Cylinder")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                var carEngineTypes = [...engineTypes];
                                if (carEngineTypes.includes("6 Cylinder")) {
                                  const index =
                                    carEngineTypes.indexOf("6 Cylinder");
                                  if (index > -1) {
                                    carEngineTypes.splice(index, 1);
                                  }
                                } else carEngineTypes.push("6 Cylinder");
                                setEngineTypes(carEngineTypes);
                              }}
                            >
                              6 Cylinder
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              engineTypes.includes("8 Cylinder")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                var carEngineTypes = [...engineTypes];
                                if (carEngineTypes.includes("8 Cylinder")) {
                                  const index =
                                    carEngineTypes.indexOf("8 Cylinder");
                                  if (index > -1) {
                                    carEngineTypes.splice(index, 1);
                                  }
                                } else carEngineTypes.push("8 Cylinder");
                                setEngineTypes(carEngineTypes);
                              }}
                            >
                              8 Cylinder
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown drop-bar">
                      <a
                        className="dropdown-toggle nav-link text-center"
                        aria-expanded="false"
                        data-toggle="dropdown"
                        href="#"
                      >
                        More{" "}
                      </a>
                      <div className="dropdown-menu wd-minus-220">
                        <div
                          style={{
                            padding: "20px",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          <h1 className="price-card-heading w-100">Color</h1>
                          <div
                            className="drop-car-make-model"
                            style={{ background: "var(--warning)" }}
                          >
                            <a
                              onClick={(e) => {
                                var carColors = [...colors];
                                if (carColors.includes("Yellow")) {
                                  const index = carColors.indexOf("Yellow");
                                  if (index > -1) {
                                    carColors.splice(index, 1);
                                  }
                                } else carColors.push("Yellow");
                                setColors(carColors);
                              }}
                            >
                              Yellow
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={{ background: "var(--gray-dark)" }}
                          >
                            <a
                              onClick={(e) => {
                                var carColors = [...colors];
                                if (carColors.includes("Black")) {
                                  const index = carColors.indexOf("Black");
                                  if (index > -1) {
                                    carColors.splice(index, 1);
                                  }
                                } else carColors.push("Black");
                                setColors(carColors);
                              }}
                              style={{ color: "var(--light)" }}
                            >
                              Black
                            </a>
                          </div>
                          <h1 className="price-card-heading w-100">
                            Fuel Type
                          </h1>
                          <div
                            className="drop-car-make-model"
                            style={
                              fuelTypes.includes("Gas")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                var carFuelTypes = [...fuelTypes];
                                if (carFuelTypes.includes("Gas")) {
                                  const index = carFuelTypes.indexOf("Gas");
                                  if (index > -1) {
                                    carFuelTypes.splice(index, 1);
                                  }
                                } else carFuelTypes.push("Gas");
                                setEngineTypes(carFuelTypes);
                              }}
                            >
                              GAS
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              fuelTypes.includes("Hybrid")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                var carFuelTypes = [...fuelTypes];
                                if (carFuelTypes.includes("Hybrid")) {
                                  const index = carFuelTypes.indexOf("Hybrid");
                                  if (index > -1) {
                                    carFuelTypes.splice(index, 1);
                                  }
                                } else carFuelTypes.push("Hybrid");
                                setEngineTypes(carFuelTypes);
                              }}
                            >
                              Hybrid
                            </a>
                          </div>
                          <div
                            className="drop-car-make-model"
                            style={
                              fuelTypes.includes("Electric")
                                ? { backgroundColor: "#2247ab", color: "#fff" }
                                : {}
                            }
                          >
                            <a
                              onClick={(e) => {
                                var carFuelTypes = [...fuelTypes];
                                if (carFuelTypes.includes("Electric")) {
                                  const index =
                                    carFuelTypes.indexOf("Electric");
                                  if (index > -1) {
                                    carFuelTypes.splice(index, 1);
                                  }
                                } else carFuelTypes.push("Electric");
                                setFuelTypes(carFuelTypes);
                              }}
                            >
                              Electric
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/*    END Filter */}
        <div className="cars-row-container mobile-mt50">
          <div id="car-row" className="row mt-0">
            {filterFn.fn(updatedCars).map((item, index) => (
              <CarCard
                key={index}
                id={item._id}
                car={item}
                make={item.make}
                name={item.name}
                displayImage={displayImage}
                model={item.model}
                price={item.price}
                monthlyPayment={item.monthlyPayment}
                milesDriven={item.milesDriven}
                onClick={() => {
                  console.log("a");
                }}
              />
            ))}
            {/* <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard /> */}
          </div>
          <div className="w-100 d-flex justify-content-center mt-100">
            <button className="btn btn-primary main-button" type="button">
              LOAD MORE
            </button>
          </div>
        </div>
        <div className="mt-200">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="w-100 text-center car-guide-heading">
                  SOLID MOTORS CAR GUIDE
                </h1>
                <p className="text-center car-guide-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-200">
          <div className="row mt-0">
            <div className="col-md-6 bg-main">
              <p className="car-guide-subsection-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.&nbsp;
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.&nbsp;
              </p>
            </div>
            <div className="col-md-6 car-guide-img">
              <span />
            </div>
          </div>
        </div> */}
        <div className="mt-200">
          <div className="row mt-0">
            <div
              className="col-md-6 bg-main"
              style={{
                paddingTop: "50px",
                paddingBottom: "50px",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              <h1 style={{ fontWeight: 700, color: "rgb(255,255,255)" }}>
                SolidMotors 150+ Points Inspection
              </h1>
              <p
                style={{
                  height: "auto",
                  color: "rgb(255,255,255)",
                  marginTop: "30px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.&nbsp;
                <br />
                Lorem ipsum dolor sit amet,&nbsp;
                <br />
              </p>
              <ul id="inspection-list" style={{ color: "rgb(255,255,255)" }}>
                <li style={{ marginTop: "30px" }}>
                  Lorem ipsum dolor sit amet, consectetur&nbsp;
                  <br />
                </li>
                <li style={{ marginTop: "10px" }}>
                  Lorem ipsum dolor sit amet, consectetur&nbsp;
                  <br />
                </li>
                <li style={{ marginTop: "10px" }}>
                  Lorem ipsum dolor sit amet, consectetur&nbsp;
                  <br />
                </li>
                <li style={{ marginTop: "10px" }}>
                  Lorem ipsum dolor sit amet, consectetur&nbsp;
                  <br />
                </li>
              </ul>
            </div>
            <div
              className="col-md-6 car-guide-img"
              style={{
                background:
                  'url("assets/img/mechanic-holding-digital-tablet.jpg") center / cover',
              }}
            >
              <span />
            </div>
          </div>
        </div>
        <div className="mt-200">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="shadow d-flex features-odd-container">
                  <div className="d-flex justify-content-center align-items-center features-img-container">
                    <img
                      className="features-img"
                      src="assets/img/reliability.svg"
                    />
                  </div>
                  <div className="features-info-container">
                    <h1 className="features-heading">RELIABILITY</h1>
                    <p className="features-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>
                <div className="shadow d-flex features-even-container">
                  <div className="d-flex justify-content-center align-items-center features-img-container">
                    <img className="features-img" src="assets/img/money.svg" />
                  </div>
                  <div className="features-info-container">
                    <h1 className="features-heading">RELIABILITY</h1>
                    <p className="features-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>
                <div className="shadow d-flex features-odd-container">
                  <div className="d-flex justify-content-center align-items-center features-img-container">
                    <img
                      className="features-img"
                      src="assets/img/reliability.svg"
                    />
                  </div>
                  <div className="features-info-container">
                    <h1 className="features-heading">RELIABILITY</h1>
                    <p className="features-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>
                <div className="shadow d-flex features-even-container">
                  <div className="d-flex justify-content-center align-items-center features-img-container">
                    <img className="features-img" src="assets/img/fuel.svg" />
                  </div>
                  <div className="features-info-container">
                    <h1 className="features-heading">RELIABILITY</h1>
                    <p className="features-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CarSearch;

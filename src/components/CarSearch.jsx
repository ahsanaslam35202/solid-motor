import React from "react";
import { getCars } from "../services/carsService";
import CarCard from "./CarCard";

const CarSearch = () => {
  const [cars, setCars] = React.useState([]);

  const getCarsData = async () => {
    const { data } = await getCars();
    const cars = [...data];
    setCars(cars);
  };

  React.useEffect(() => {
    getCarsData();
  }, []);

  return (
    <div>
      <div className="car-searchbar-container">
        <input
          className="car-searchbar"
          type="search"
          placeholder="Search Cars"
        />
      </div>

      {/* Search Filter */}

      <div style={{ paddingRight: "5%", paddingLeft: "5%" }}>
        <div
          style={{
            marginTop: "50px",
            padding: "10px",
            background: "#c2efff",
            borderRadius: "8px",
          }}
        >
          <nav className="navbar navbar-light navbar-expand-md car-filter-container search-bar-container">
            <div className="container-fluid">
              <button
                data-toggle="collapse"
                className="navbar-toggler"
                data-target="#navcol-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navcol-1"
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
                    <div className="dropdown-menu wd-400">
                      <div className="dropdown-container">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="price-card">
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
                                <input
                                  type="number"
                                  className="price-card-price-input"
                                />
                              </div>
                              <input
                                type="range"
                                className="price-card-range"
                              />
                              <h1 className="price-card-heading">
                                Solid Motors Car Finance
                              </h1>
                              <p className="price-card-para">
                                Answer a few questions about your car and get an
                                instant value. This only takes 2 minutes.
                              </p>
                              <button
                                className="btn btn-primary apply-card-button"
                                type="button"
                              >
                                Loan Calculator
                              </button>
                            </div>
                          </div>
                          <div className="col">
                            <div className="price-card">
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
                                <input
                                  type="number"
                                  className="price-card-price-input"
                                />
                              </div>
                              <input
                                type="range"
                                className="price-card-range"
                              />
                              <h1 className="price-card-heading">
                                Solid Motors Trade in Offer
                              </h1>
                              <p className="price-card-para">
                                Answer a few questions about your car and get an
                                instant value. This only takes 2 minutes.
                              </p>
                              <button
                                className="btn btn-primary apply-card-button"
                                type="button"
                              >
                                Trade In Your Car
                              </button>
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
                        <div className="drop-car-make-model">
                          <a href="#">Toyota</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">Audi</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">Nissan</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">Mercedes</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">Honda</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">Kia</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">MG</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">BMW</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">Dodge</a>
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
                        <div className="drop-car-make-model">
                          <img src="assets/img/suv1.png" />
                          <a href="#">SUV</a>
                        </div>
                        <div className="drop-car-make-model">
                          <img src="assets/img/sedan.png" />
                          <a href="#">Sedan</a>
                        </div>
                        <div className="drop-car-make-model">
                          <img src="assets/img/hatchback.png" />
                          <a href="#">Hatchback</a>
                        </div>
                        <div className="drop-car-make-model">
                          <img src="assets/img/convertible.png" />
                          <a href="#">Convertible</a>
                        </div>
                        <div className="drop-car-make-model">
                          <img src="assets/img/coupe.png" />
                          <a href="#">Coupe</a>
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
                            <div className="price-card">
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
                              </div>
                              <input
                                type="range"
                                className="price-card-range"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="price-card">
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
                                  Milage
                                </h1>
                                <input
                                  type="number"
                                  style={{
                                    marginTop: "3px",
                                    marginBottom: "-10px",
                                  }}
                                  className="price-card-price-input"
                                />
                              </div>
                              <input
                                type="range"
                                className="price-card-range"
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
                        <div className="drop-car-make-model">
                          <a href="#">Manual</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">Automatic</a>
                        </div>
                        <h1 className="price-card-heading w-100">
                          Drive Train
                        </h1>
                        <div className="drop-car-make-model">
                          <a href="#">FWD</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">AWD</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">RWD</a>
                        </div>
                        <h1 className="price-card-heading w-100">
                          &nbsp;Engine Type
                        </h1>
                        <div className="drop-car-make-model">
                          <a href="#">2 cylinder</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">4 cylinder</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">6 cylinder</a>
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
                          <a href="#">Yellow</a>
                        </div>
                        <div
                          className="drop-car-make-model"
                          style={{ background: "var(--gray-dark)" }}
                        >
                          <a href="#" style={{ color: "var(--light)" }}>
                            Black
                          </a>
                        </div>
                        <h1 className="price-card-heading w-100">Fuel Type</h1>
                        <div className="drop-car-make-model">
                          <a href="#">GAS</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">Hybrid</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">RWD</a>
                        </div>
                        <div className="drop-car-make-model">
                          <a href="#">Electric</a>
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
      <div className="cars-row-container">
        <div id="car-row" className="row mt-0">
          {cars.map((item, index) => (
            <CarCard
              key={index}
              id={item._id}
              car={item}
              make={item.make}
              name={item.name}
              model={item.model}
              price={item.price}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
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
      <div className="mt-200">
        <div className="row mt-0">
          <div className="col-md-6 bg-main">
            <p className="car-guide-subsection-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.&nbsp;
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.&nbsp;
            </p>
          </div>
          <div className="col-md-6 car-guide-img">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
  );
};

export default CarSearch;

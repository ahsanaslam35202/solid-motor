import React from "react";
import { isLoggedin, logout } from "../services/userService";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const Home = (props) => {
  const forceUpdate = useForceUpdate();
  const handleLogout = async (e) => {
    await logout();
    forceUpdate();
  };
  return (
    <>
      {isLoggedin() ? <Navbar2 handleLogout={handleLogout} /> : <Navbar />}
      <div>
        <header className="w-100 text-center header">
          <h1 className="header-title">SOLIDMOTORS</h1>
          <p className="header-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum&nbsp;ut labore et dolore magna aliqu
            <br />
            <br />
          </p>
          <div className="row mt-0">
            <div className="col-md-6 d-flex justify-content-end mobile-flex-center">
              <a href="./loan calculator">
                <button
                  className="btn btn-primary header-button-main"
                  type="button"
                >
                  <strong>Get Pre Qualitied</strong>
                </button>
              </a>
            </div>
            <div className="col-md-6 d-flex justify-content-start mobile-flex-center">
              <a href="search cars">
                <button
                  className="btn btn-primary header-button-white"
                  type="button"
                >
                  <strong>Search Vehicles</strong>
                  <br />
                </button>
              </a>
            </div>
          </div>
        </header>
        <div className="mt-180">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="h1-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </h1>
              </div>
              <div className="col-md-6">
                <p className="main-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-180">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="feature-card">
                  <div className="f1-img" />
                  <h1 className="w-100 text-center feature-card-heading">
                    <strong>TEST DRIVE FACILITY</strong>
                  </h1>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature-card">
                  <div className="f2-img" />
                  <h1 className="w-100 text-center feature-card-heading">
                    <strong>TEST DRIVE FACILITY</strong>
                  </h1>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature-card">
                  <div className="f3-img" />
                  <h1 className="w-100 text-center feature-card-heading">
                    <strong>TEST DRIVE FACILITY</strong>
                  </h1>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature-card">
                  <div className="f4-img" />
                  <h1 className="w-100 text-center feature-card-heading">
                    <strong>TEST DRIVE FACILITY</strong>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-180">
          <h1 className="w-100 text-center h1-black">
            THE NEW WAY TO BUY A CAR
          </h1>
          <div className="container" style={{ marginTop: "100px" }}>
            <img className="w-100" src="assets/img/New%20way.png" />
          </div>
          <h1 className="w-100 text-center h3-black mt-100">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing
          </h1>
          <p className="w-100 text-center new-way-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Quis ipsum suspendisse Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,&nbsp;
          </p>
          <div className="mt-15 check-point-container">
            <div className="w-100 d-flex justify-content-center mt-15">
              <img className="new-way-point-icon" src="assets/img/check.svg" />
              <p className="h4-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
            <div className="w-100 d-flex justify-content-center mt-15">
              <img className="new-way-point-icon" src="assets/img/check.svg" />
              <p className="h4-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
            <div className="w-100 d-flex justify-content-center mt-15">
              <img className="new-way-point-icon" src="assets/img/check.svg" />
              <p className="h4-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
          </div>
        </div>
        <div className="mt-180 sell-or-trade-container">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="h1-black mobile-text-center">
                  SELL OR TRADE YOUR CAR
                </h1>
                <h1 className="sell-or-trade-sub-heading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </h1>
                <p className="mt-30">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                  <br />
                </p>
                <div className="w-100 mt-80 mobile-flex-center">
                  <a href="sell">
                    <button
                      className="btn btn-primary main-button"
                      type="button"
                    >
                      <strong>Sell Or Trade Your Car</strong>
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="sell-or-trade-img12">
                      <img
                        className="w-100"
                        src="assets/img/sell%20or%20trade%201.png"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sell-or-trade-img12">
                      <img
                        className="w-100"
                        src="assets/img/sell%20or%20trade%202.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="sell-or-trade-img3">
                  <img
                    className="w-100"
                    src="assets/img/sell%20or%20trade%203.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-200 cars-100-container">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1
                  className="w-100 text-center h1-black"
                  style={{ fontSize: "32px", fontWeight: 700 }}
                >
                  More than 100 Cars
                </h1>
                <p className="w-100 text-center cars-100-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.&nbsp;
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et&nbsp;
                </p>
                <div className="w-100 d-flex justify-content-center mt-80">
                  <a href="search cars">
                    <button
                      className="btn btn-primary main-button"
                      type="button"
                    >
                      <strong>Search you Desire Car</strong>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-200">
          <div className="container">
            <h1 className="w-100 text-center h1-black">WHY US</h1>
            <p className="w-100 text-center why-us-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
          <div className="row mt-0 home-why-us-card-container">
            <div className="col-md-3">
              <div className="home-why-us-card">
                <div className="d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-content-center home-why-us-card-icon-container">
                    <img
                      className="home-why-us-card-icon"
                      src="assets/img/7%20Days.svg"
                    />
                  </div>
                </div>
                <h1 className="w-100 text-center home-why-us-card-heading">
                  7 Day Test to Own
                </h1>
                <p className="text-center home-why-us-card-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="home-why-us-card">
                <div className="d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-content-center home-why-us-card-icon-container">
                    <img src="assets/img/loan.svg" style={{ width: "46px" }} />
                  </div>
                </div>
                <h1 className="w-100 text-center home-why-us-card-heading">
                  7 Day Test to Own
                </h1>
                <p className="text-center home-why-us-card-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="home-why-us-card">
                <div className="d-flex justify-content-center">
                  <div
                    className="d-flex justify-content-center align-content-center home-why-us-card-icon-container"
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50px",
                      background: "#a6e4fb",
                    }}
                  >
                    <img
                      src="assets/img/quality.svg"
                      style={{ width: "46px" }}
                    />
                  </div>
                </div>
                <h1 className="w-100 text-center home-why-us-card-heading">
                  7 Day Test to Own
                </h1>
                <p className="text-center home-why-us-card-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="home-why-us-card">
                <div className="d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-content-center home-why-us-card-icon-container">
                    <img
                      src="assets/img/money-back-guarantee.svg"
                      style={{ width: "46px" }}
                    />
                  </div>
                </div>
                <h1 className="w-100 text-center home-why-us-card-heading">
                  7 Day Test to Own
                </h1>
                <p className="text-center home-why-us-card-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-200">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="h1-black mobile-text-center">
                  OUR TOP SEARCHED CARS
                </h1>
              </div>
              <div className="col-md-6">
                <div className="w-100 d-flex justify-content-end mobile-flex-center">
                  <a href="search cars">
                    <button
                      className="btn btn-primary main-button"
                      type="button"
                    >
                      <strong>Search Cars</strong>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-100 top-cars">
            <div className="row">
              <div className="col-md-4">
                <h1 className="h3-black">TOP CARS</h1>
                <div className="mt-50">
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <h1 className="h3-black">TOP CARS</h1>
                <div className="mt-50">
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <h1 className="h3-black">TOP CARS</h1>
                <div className="mt-50">
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
                  <a className="w-100 d-block top-cars-link" href="#">
                    Link
                  </a>
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

export default Home;

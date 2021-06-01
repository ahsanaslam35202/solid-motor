import React from "react";
import Footer from "./Footer";
import { getloggedinuser, isLoggedin, logout } from "../services/userService";
import { postSellTrade } from "../services/sellTradeService";
import Modal from "react-modal";

import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import CallBar from "./CallBar";

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const SellRequest = (props) => {
  const forceUpdate = useForceUpdate();
  const handleLogout = async (e) => {
    await logout();
    forceUpdate();
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitCarSell = async (e) => {
    if (
      vinNumber == "" ||
      carMakeModel == "" ||
      carModelYear == "" ||
      drivenMiles == "" ||
      extendedFeatures == "" ||
      carHistory == ""
    ) {
      openModal();
    } else {
      console.log("Function called");
      const user = getloggedinuser();
      console.log(user);
      if (!(user == null)) {
        const userId = user._id;
        await postSellTrade({
          sellOrTrade,
          vinNumber,
          carMakeModel,
          carModelYear,
          drivenMiles,
          fuelType,
          engineType,
          transmission,
          driveTrain,
          extendedFeatures,
          carHistory,
          estimatedPrice,
          userId,
        })
          .then(() => {
            console.log("Request Send Successfully !");
            props.history.push("/sell trade success");
          })
          .catch(() => {
            setErr_msg("An Error has Occured, Please try again!");
            openModal();
          });
      } else {
        logout();
        props.history.push("/login");
      }
    }
  };

  const [sellOrTrade, setSellOrTrade] = React.useState("Trade");
  const [vinNumber, setVinNumber] = React.useState("");
  const [carMakeModel, setCarMakeModel] = React.useState("");
  const [carModelYear, setCarModelYear] = React.useState(2018);
  const [drivenMiles, setDrivenMiles] = React.useState();

  const [fuelType, setFuelType] = React.useState("Gas");
  const [engineType, setEngineType] = React.useState("4 Cylinder");
  const [transmission, setTransmission] = React.useState("Automatic");
  const [driveTrain, setDriveTrain] = React.useState("AWD");

  const [extendedFeatures, setExtendedFeatures] = React.useState("");
  const [carHistory, setCarHistory] = React.useState("");
  const [estimatedPrice, setEstimatedPrice] = React.useState(0);

  const [err_msg, setErr_msg] = React.useState("Please Fill Complete Data");

  return (
    <>
      <CallBar />
      {isLoggedin() ? <Navbar2 handleLogout={handleLogout} /> : <Navbar />}

      <div>
        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            // style={customStyles}
            className="custom-Modal"
            contentLabel="Example Modal"
          >
            <div
              style={{
                padding: "30px",
                background: "#6ccfff",
                borderRadius: "20px",
                paddingBottom: "70px",
                width: "100%",
                height: "50vh",
              }}
            >
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{
                    background: "rgb(189,221,255)",
                    color: "rgb(52,52,52)",
                  }}
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
              <h4
                className="w-100 text-center thankyou-heading"
                style={{ fontSize: "24px" }}
              >
                {err_msg}
              </h4>
            </div>
          </Modal>
        </div>
        <div>
          <div className="row mt-180 mobile-mt50">
            <div
              className="col-md-6 header-heading-containerz {
"
            >
              <div
                className="container"
                // style={{
                //   paddingTop: "120px",
                //   paddingRight: "50px",
                //   paddingLeft: "50px",
                // }}
              >
                <h1 className="page-title">
                  Sell OR Trade Your Car with Solid Motors
                </h1>
                <p className="mt-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 header-img mobile-mt50">
              <span />
            </div>
          </div>
        </div>
        <section className=" sell-request-form">
          <h1 className="h1-black mt-120 w-100 text-center">
            Enter Details of your Car
          </h1>
          <div
            className="shadow-none mt-50"
            style={{ background: "rgba(255,255,255,0)", width: "100%" }}
          >
            <div className="row mt-0">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="sell-request-label">Selling Or Trade</label>

                  <select
                    className="sell-request-input"
                    onChange={(e) => {
                      setSellOrTrade(e.target.value);
                    }}
                  >
                    <optgroup label="Choose Option">
                      <option value={"Trade"}>Trade</option>
                      <option value={"Sell"}>Sell</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="sell-request-label">Vin Number</label>
                  <input
                    className="form-control sell-request-input"
                    type="text"
                    name="name"
                    placeholder="Vin Number"
                    onChange={(e) => {
                      setVinNumber(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label className="sell-request-label">
                    Car Brand and Model
                  </label>
                  <input
                    className="form-control sell-request-input"
                    type="text"
                    name="name"
                    placeholder="Honda Civic"
                    onChange={(e) => {
                      setCarMakeModel(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label className="sell-request-label">Car Model Year</label>
                  <input
                    className="form-control sell-request-input"
                    type="number"
                    name="number"
                    placeholder="2019"
                    min="2000"
                    max="3000"
                    value={carModelYear}
                    onChange={(e) => {
                      setCarModelYear(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="sell-request-label">Driven Miles</label>
                  <input
                    className="form-control sell-request-input"
                    type="text"
                    name="number"
                    placeholder="5000"
                    onChange={(e) => {
                      setDrivenMiles(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <h1 className="h3-black mt-30 w-100 text-center">
              Select Car Basic Features
            </h1>

            <div className="row mt-0">
              <div className="col-md-3">
                <div className="form-group">
                  <label className="sell-request-label">Fuel Type</label>

                  <select
                    className="sell-request-input"
                    onChange={(e) => {
                      setFuelType(e.target.value);
                      console.log(fuelType);
                    }}
                  >
                    <optgroup label="Choose fuel type">
                      <option value={"Gas"}>Gas</option>
                      <option value={"Electric"}>Electric</option>
                      <option value={"Hybrid"}>Hybrid</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label className="sell-request-label">Engine Type</label>

                  <select
                    className="sell-request-input"
                    onChange={(e) => {
                      setEngineType(e.target.value);
                    }}
                  >
                    <optgroup label="Choose">
                      <option value={"4 Cylinder"}>4 Cylinder</option>
                      <option value={"6 Cylinder"}>6 cylinder</option>
                      <option value={"8 Cylinder"}>8 cylinder</option>
                      <option value={"Other"}>other</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label className="sell-request-label">Transmission</label>

                  <select
                    className="sell-request-input"
                    onChange={(e) => {
                      setTransmission(e.target.value);
                    }}
                  >
                    <optgroup label="Choose">
                      <option value={"Automatic"}>Automatic</option>
                      <option value={"Manual"}>Manual</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label className="sell-request-label">Drive Train</label>

                  <select
                    className="sell-request-input"
                    onChange={(e) => {
                      setDriveTrain(e.target.value);
                    }}
                  >
                    <optgroup label="Choose">
                      <option value={"AWD"}>AWD</option>
                      <option value={"FWD"}>FWD</option>
                      <option value={"RWD"}>RWD</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>

            {/* +++++++++++++++++++++++++++++++++++++++++++++++++ */}

            <div className="row mt-0">
              <div className="col-md-12">
                <div className="form-group">
                  <label className="sell-request-label">
                    Entended Features
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Black Color, Power Windows, Sun Roof, Heated seats, ........"
                    rows={7}
                    style={{
                      background: "rgba(255,255,255,0)",
                      borderRadius: "4px",
                      borderColor: "rgb(41,49,58)",
                    }}
                    onChange={(e) => {
                      setExtendedFeatures(e.target.value);
                    }}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label className="sell-request-label">
                    Car History and Condition
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Car History"
                    rows={7}
                    style={{
                      background: "rgba(255,255,255,0)",
                      borderRadius: "4px",
                      borderColor: "rgb(41,49,58)",
                    }}
                    onChange={(e) => {
                      setCarHistory(e.target.value);
                    }}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>

            <div className="w-100 d-flex justify-content-center mt-100">
              <button className="btn main-button" onClick={submitCarSell}>
                Request Estimated Amount
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SellRequest;

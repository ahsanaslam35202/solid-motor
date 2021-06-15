import React from "react";
import { useEffect, useRef } from "react";
import { getCar, getCars, getRelatedCars } from "../services/carsService";
import CarCard from "./CarCard";
import { Link, Redirect } from "react-router-dom";
import CallBar from "./CallBar";

import {
  getloggedinuser,
  isLoggedin,
  likeCar,
  logout,
  getLikeCarsArray,
} from "../services/userService";
import Navbar2 from "./Navbar2";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getTradeIn } from "../services/sellTradeService";
import { addBuyRequest } from "../services/buyRequestsService";
import { updateViews, updateLikes } from "../services/carsService";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarCarouselImage from "./CarCarouselImage";
import Modal from "react-modal";
// import ScriptTag from "react-script-tag";

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const CarDetail = (props) => {
  const forceUpdate = useForceUpdate();
  const handleLogout = async (e) => {
    await logout();
    forceUpdate();
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  // <ScriptTag src="http://integrator.swipetospin.com" />;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  const myRef = useRef(null);
  const myRef2 = useRef(null);

  const { car } = props.location.state;
  const [buyType, setBuyType] = React.useState("financed");
  const [cars, setCars] = React.useState([]);
  const [carPrice, setCarPrice] = React.useState(car.price);
  const [carFinancedPrice, setCarFinancedPrice] = React.useState(0);
  const [carPendingAmount, setCarPendingAmout] = React.useState(0);
  const [downPayment, setDownPayment] = React.useState(car.downPayment);
  const [monthlyPayment, setMonthlyPayment] = React.useState(
    car.monthlyPayment
  );
  const [months, setMonths] = React.useState(72);
  const [creditScore, setCreditScore] = React.useState(750);
  const [annualIncome, setAnnualIncome] = React.useState(30000);

  const [APR, setAPR] = React.useState(0);
  const [tradeInCredit, setTradeInCredit] = React.useState(0);

  const [userName, setUserName] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [submitButton, setSubmitButton] = React.useState(false);

  const [liked, setLiked] = React.useState(0);
  const [likedArray, setLikedArray] = React.useState([]);

  const getRelatedCarsData = async () => {
    const { data } = await getRelatedCars(car.make);
    const cars = [...data];
    setCars(cars);
  };

  const getTradeInCredit = async () => {
    const user = getloggedinuser();
    if (user) {
      const userId = user._id;
      const { data } = await getTradeIn(userId);
      setTradeInCredit(data.estimatedPrice);
    } else {
      setTradeInCredit(0);
    }
  };

  React.useEffect(() => {
    getRelatedCarsData();
  }, []);
  React.useEffect(() => {
    getTradeInCredit();
  }, []);
  React.useEffect(() => {
    setCarPrice(car.price);
  }, []);
  React.useEffect(() => {
    getlikedarray();
  }, []);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "http://integrator.swipetospin.com/";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   script.onload = () => {
  //     console.log("Loaded..!");
  //   };
  // }, []);

  React.useEffect(() => {
    var commision = 0;
    var carPrice2 = carPrice;
    var carFinancedPrice2 = 0;
    // var downPaymentMaxRange2 = 0;
    // var monthlyMinRange2 = 0;
    // var monthlyMaxRange2 = 0;

    if (months == 72) {
      if (creditScore == 750) {
        commision = 10;
      }
      if (creditScore == 700) {
        commision = 21;
      }
      if (creditScore == 600) {
        commision = 23;
      }
      if (creditScore == 599) {
        commision = 0;
      }
    }

    if (months == 60) {
      if (creditScore == 750) {
        commision = 8;
      }
      if (creditScore == 700) {
        commision = 18;
      }
      if (creditScore == 600) {
        commision = 22;
      }
      if (creditScore == 599) {
        commision = 25;
      }
    }

    if (months == 48) {
      if (creditScore == 750) {
        commision = 7.5;
      }
      if (creditScore == 700) {
        commision = 14;
      }
      if (creditScore == 600) {
        commision = 18;
      }
      if (creditScore == 599) {
        commision = 22;
      }
    }

    if (months == 36) {
      if (creditScore == 750) {
        commision = 5.2;
      }
      if (creditScore == 700) {
        commision = 10;
      }
      if (creditScore == 600) {
        commision = 16;
      }
      if (creditScore == 599) {
        commision = 20;
      }
    }

    console.log("Commision: " + commision);
    carFinancedPrice2 = carPrice2 * (1 + commision / 100);
    console.log("Car Financed Price: " + carFinancedPrice2);
    // downPaymentMaxRange2 = 0.5 * carFinancedPrice2;
    // console.log("DownPayment MAX Range: " + downPaymentMaxRange2);
    // monthlyMinRange2 = (0.5 * carFinancedPrice2) / months;
    // console.log("Monthly MIN RAnge: " + monthlyMinRange2);
    // monthlyMaxRange2 = (carFinancedPrice2 - 750) / months;
    // console.log("Monthly MAX Range: " + monthlyMaxRange2);

    setCarFinancedPrice(Math.ceil(carFinancedPrice2));
    setAPR(commision);
    // setDownPayment(Math.ceil(downPaymentMaxRange2));
    // setMonthlyPayment(Math.ceil(monthlyMinRange2));
    // setDownPaymentMaxRange(Math.ceil(downPaymentMaxRange2));
    // console.log(" DownPayment Max Range: " + downPaymentMaxRange);
    // setMonthlyMinRange(Math.ceil(monthlyMinRange2));
    // setMonthlyMaxRange(Math.ceil(monthlyMaxRange2));
  }, [creditScore, months]);

  // const handleDownPaymentChange = (e) => {
  //   setDownPayment(e.target.value);
  //   setMonthlyPayment(Math.ceil((carFinancedPrice - e.target.value) / months));
  // };
  // const handleMonthlyPaymentChange = (e) => {
  //   setMonthlyPayment(e.target.value);
  //   setDownPayment(Math.ceil(carFinancedPrice - e.target.value * months));
  // };

  function handlePreSubmit() {
    openModal();
  }

  function checkSubmitReq(e) {
    if (userName !== "" && phoneNo !== "") {
      setSubmitButton(true);
    }
  }

  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    // const user = getloggedinuser();
    // const userId = user._id;
    const carId = car._id;

    console.log("+++++++++++++++++++++++++++++");
    console.log("Car Total Price: " + carFinancedPrice);
    console.log("Car Price: " + carPrice);
    console.log("Loan Term: " + months);
    console.log("Credit Card Score: " + creditScore);
    console.log("Monthly Payment: " + monthlyPayment);
    console.log("DownPayment: " + downPayment);
    console.log("anual Income: " + annualIncome);
    await addBuyRequest({
      buyType,
      carId,
      userName,
      phoneNo,
      // userId,
      downPayment,
      monthlyPayment,
      months,
      creditScore,
      annualIncome,
      carPrice,
      carFinancedPrice,
    }).then(() => {
      console.log("Request Send Successfully !");
      props.history.push("/request-final-form");
      // window.location.href =
      //   "https://secure.carsforsale.com/ssfinance.aspx?jesxel=738003";
    });
  };

  const handleLike = async () => {
    if (likedArray.includes(car._id)) {
      likedArray.pop(car._id);
      console.log(likedArray);
    } else {
      likedArray.push(car._id);
    }
    console.log("yes");
    if (isLoggedin()) {
      const user = getloggedinuser();
      if (user) {
        const userId = user._id;
        await likeCar(userId, likedArray).then(() => {
          if (likedArray.includes(car._id)) {
            const likes = car.likes + 1;
            updateLikes(car._id, likes);
            setLiked(1);
          } else {
            setLiked(0);
          }
        });
      }
    } else {
      props.history.push("/login");
    }
  };

  const getlikedarray = async () => {
    if (isLoggedin()) {
      const user = getloggedinuser();
      var rray = await getLikeCarsArray(user._id);
      setLikedArray(rray.data);
      if (rray.data.includes(car._id)) {
        setLiked(1);
      }
      if (likedArray.includes(car._id)) {
        setLiked(1);
      }
    }
  };

  const views = car.views + 1;
  updateViews(car._id, views);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
    },
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [car.vin]);

  return (
    <>
      <CallBar />
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          className="custom-Modal"
          // style={customStyles}
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
              backgroundColor: "white",
              borderWidth: "1px",
              borderColor: "black",
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
            <div className="" style={{ textAlign: "center" }}>
              <h5 className="text-center mt-30">Please Enter Details</h5>

              <div className="form-group mt-30">
                <input
                  className="form-control"
                  type="Text"
                  placeholder="Name"
                  // value={userName}
                  required
                  onChange={(e) => {
                    setUserName(e.target.value);
                    checkSubmitReq();
                  }}
                  style={{ height: "50px" }}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  required
                  className="form-control"
                  type="number"
                  placeholder="Phone Number"
                  // value={password}
                  onChange={(e) => {
                    setPhoneNo(e.target.value);
                    checkSubmitReq();
                  }}
                  required
                  style={{ height: "50px" }}
                />
              </div>
              <div className="w-100 d-flex justify-content-end">
                <button
                  className="btn btn-primary"
                  type="button"
                  disabled={submitButton == false ? true : false}
                  onClick={handleRequestSubmit}
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      {isLoggedin() ? <Navbar2 handleLogout={handleLogout} /> : <Navbar />}
      <div ref={myRef2}>
        <div className="car-info-container mt-30">
          <div className="row mt-0">
            <div className="col-md-6">
              <div className="d-flex car-title-container">
                <h1 className="car-title">
                  {car.modelYear} {car.make} {car.name}
                </h1>
                <div
                  className="d-flex justify-content-center align-items-center heart-container"
                  onClick={handleLike}
                >
                  {liked ? (
                    <img
                      src="assets/img/like_red.svg"
                      style={{ width: "20px", fill: "red" }}
                    />
                  ) : (
                    <img
                      src="assets/img/like.svg"
                      style={{ width: "20px", fill: "red" }}
                    />
                  )}
                </div>
              </div>
              <h1 className="miles-driven">{car.milesDriven} Miles</h1>
            </div>
            {/* <div className="col-md-6 d-flex car-price-container">
              <h1 className="price">${car.price}</h1>
            </div> */}
          </div>
        </div>

        <div className="car-header-container">
          <img src="assets/img/car.png" style={{ width: "100%" }} />
        </div>

        <div className="container mt-30">
          <div className="row mt-0 d-flex">
            <div className="wd-50">
              <div className="d-flex align-items-center justify-content-center">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginLeft: "20px",
                    background: "rgba(108,207,255,0.32)",
                    borderRadius: "4px",
                    minWidth: "auto",
                  }}
                >
                  <img
                    src="assets/img/view.svg"
                    style={{ width: "20px", fill: "red" }}
                  />
                </div>
                <p
                  style={{
                    marginBottom: "0px",
                    marginLeft: "10px",
                    fontSize: "18px",
                    color: "#0cbdff",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {views} Views
                </p>
              </div>
            </div>
            <div className="wd-50 d-flex justify-content-center">
              <div className="d-flex align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginLeft: "20px",
                    background: "rgba(108,207,255,0.32)",
                    borderRadius: "4px",
                    minWidth: "auto",
                  }}
                >
                  <img
                    src="assets/img/heart.svg"
                    style={{ width: "20px", fill: "red" }}
                  />
                </div>
                <p
                  style={{
                    marginBottom: "0px",
                    marginLeft: "10px",
                    fontSize: "18px",
                    color: "#0cbdff",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {car.likes} Likes
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-80">
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {car.otherImages.map((image) => (
              <CarCarouselImage image={image} vin={car.vin} />
            ))}
          </Carousel>
        </div>

        <div className="container mt-120 mobile-mt50 ">
          <h1 className="w-100 text-center details-heading" />
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-4 ">
              <div
                className="d-flex flex-column justify-content-center"
                style={{
                  padding: "30px",
                  background: "rgba(255,255,255,0)",
                  borderRadius: "12px",
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "80px",
                    minHeight: "80px",
                    borderRadius: "8px",
                    background: "rgba(0,187,255,0.27)",
                  }}
                >
                  <img
                    src="assets/img/sedan-car-front.svg"
                    style={{ width: "36px", filter: "invert(18%)" }}
                  />
                </div>
                <h1
                  style={{
                    fontSize: "20px",
                    marginTop: "20px",
                    fontWeight: 600,
                    color: "#2c2c2c",
                  }}
                >
                  Carfax Report
                </h1>
                <p style={{ marginTop: "10px", fontSize: "14px" }}>
                  View Carfax report for more details&nbsp;
                  <br />
                  Its free!
                  <br />
                </p>
                <img
                  src="assets/img/fax.png"
                  style={{ width: "90px", marginBottom: "10px" }}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{ background: "#00bbff", borderWidth: "0px" }}
                  onClick={() => {
                    var link = car.reportLink;
                    console.log(link);
                    window.open(`${car.reportLink}`, "_blank");
                  }}
                >
                  View Report
                </button>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 ">
              <div
                className="d-flex flex-column justify-content-center"
                style={{
                  padding: "30px",
                  background: "rgba(255,255,255,0)",
                  borderRadius: "12px",
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "80px",
                    minHeight: "80px",
                    borderRadius: "8px",
                    background: "rgba(0,187,255,0.27)",
                  }}
                >
                  <img
                    src="assets/img/wallet-filled-money-tool.svg"
                    style={{ width: "36px", filter: "invert(19%)" }}
                  />
                </div>
                <h1
                  style={{
                    fontSize: "20px",
                    marginTop: "20px",
                    fontWeight: 600,
                    color: "#2c2c2c",
                  }}
                >
                  Affordable monthly payments!&nbsp;
                  <br />
                </h1>
                <p style={{ marginTop: "10px", fontSize: "14px" }}>
                  With approved credit. &nbsp;
                  <br />
                  <br />
                </p>
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{ background: "#00bbff", borderWidth: "0px" }}
                  onClick={() => myRef.current.scrollIntoView()}
                >
                  Apply Now
                </button>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 ">
              <div
                className="d-flex flex-column justify-content-center"
                style={{
                  padding: "30px",
                  background: "rgba(255,255,255,0)",
                  borderRadius: "12px",
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "80px",
                    minHeight: "80px",
                    borderRadius: "8px",
                    background: "rgba(0,187,255,0.27)",
                  }}
                >
                  <img
                    src="assets/img/brochure.svg"
                    style={{ width: "36px", filter: "invert(21%)" }}
                  />
                </div>
                <h1
                  style={{
                    fontSize: "20px",
                    marginTop: "20px",
                    fontWeight: 600,
                    color: "#2c2c2c",
                  }}
                >
                  Brochure
                </h1>
                <p style={{ marginTop: "10px", fontSize: "14px" }}>
                  More info about this car&nbsp;
                  <br />
                  <br />
                </p>
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{ background: "#00bbff", borderWidth: "0px" }}
                  onClick={() => {
                    var link = car.reportLink;
                    console.log(link);
                    window.open(`${car.brochureLink}`, "_blank");
                  }}
                >
                  View Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-150 mobile-mt50">
          <h1 className="w-100 text-center details-heading">Vehicle Details</h1>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center mt-50">
              <div className="shadow details-tab-container">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item w-50" role="presentation">
                    <a
                      className="nav-link active w-100 text-center tab-link"
                      role="tabpane1"
                      data-toggle="tab"
                      href="#tab-1"
                    >
                      Features
                    </a>
                  </li>
                  <li className="nav-item w-50" role="presentation">
                    <a
                      className="nav-link w-100 text-center tab-link"
                      role="tabpane2"
                      data-toggle="tab"
                      href="#tab-2"
                    >
                      Warranty
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" role="tabpanel" id="tab-1">
                    <div className="tab-details-container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="details-card">
                            <h1 className="details-card-heading">
                              Trim Package&nbsp;
                            </h1>
                            <p className="details-card-para">{car.model}</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="details-card">
                            <h1 className="details-card-heading">
                              Engine Type&nbsp;
                            </h1>
                            <p className="details-card-para">
                              {car.engineType}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="details-card">
                            <h1 className="details-card-heading">MPG&nbsp;</h1>
                            <p className="details-card-para">{car.mpg}</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="details-card">
                            <h1 className="details-card-heading">
                              Exterior Color&nbsp;
                            </h1>
                            <p className="details-card-para">
                              {car.exteriorColor}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="details-card">
                            <h1 className="details-card-heading">
                              Interior Color&nbsp;
                            </h1>
                            <p className="details-card-para">
                              {car.interiorColor}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="details-card">
                            <h1 className="details-card-heading">
                              Transmission&nbsp;
                            </h1>
                            <p className="details-card-para">
                              {car.transmission}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="details-card">
                            <h1 className="details-card-heading">
                              Drive Train&nbsp;
                            </h1>
                            <p className="details-card-para">
                              {car.driveTrain}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="details-card">
                            <h1 className="details-card-heading">
                              Number of Keys&nbsp;
                            </h1>
                            <p className="details-card-para">
                              {car.numberOfKeys}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="details-card">
                            <h1 className="details-card-heading">VIN&nbsp;</h1>
                            <p className="details-card-para">{car.vin}</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="details-card">
                            <h1 className="details-card-heading">
                              Stock #&nbsp;
                            </h1>
                            <p className="details-card-para">{car.stock}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" role="tabpane2" id="tab-2">
                    <div className="tab-details-container">
                      <h1 className="h3-black w-100 text-center">Warranty</h1>

                      <div className="col-md-12 d-flex justify-content-center">
                        {/* <h1 className="h1-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </h1> */}
                        <img
                          className="safari-child-flex"
                          src="assets/img/care.png"
                          className="care-img"
                          alt=""
                          style={{ alignSelf: "start" }}
                        />
                      </div>
                      <p>
                        Enjoy the benefits of a quality, pre-owned vehicle that
                        includes maintenance benefits similar to that of a new
                        vehicle! ASE Certified Service Centers have been
                        carefully screened to ensure they meet our five-star
                        standards for quality and service, and also that their
                        certified service will maintain any manufacturer
                        warranty or extended warranty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-200 bg-main">
          <div className="container">
            <h1 className="w-100 text-center equipment-heading">
              STANDARD EQUIPMENT
            </h1>
            <div
              className="row"
              id="expand-area"
              style={{
                height: "auto",
                minHeight: "100px",
                paddingBottom: "50px",
                overflow: "hidden",
              }}
            >
              {car.extendedFeatures.map((item) => (
                <div className="col-md-4 d-flex justify-content-start">
                  <ul>
                    <li>{item}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-200">
          <div ref={myRef} className="car-finance-summary-container">
            <div className="car-finance-container">
              <div>
                <ul className="nav nav-tabs" role="tablist">
                  <li
                    onClick={() => {
                      setBuyType("financed");
                      console.log(buyType);
                    }}
                    className="nav-item w-100"
                    role="presentation"
                  >
                    <a
                      className="nav-link active w-100 text-center tabs-link"
                      role="tabpane3"
                      data-toggle="tab"
                      href="#tab-3"
                    >
                      Estimate Finance
                    </a>
                  </li>
                  {/* <li
                    onClick={() => {
                      setBuyType("cash");
                      console.log(buyType);
                    }}
                    className="nav-item w-50"
                    role="presentation"
                  >
                    <a
                      className="nav-link w-100 text-center tabs-link"
                      role="tabpane4"
                      data-toggle="tab"
                      href="#tab-4"
                    >
                      Pay Cash
                    </a>
                  </li> */}
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" role="tabpane3" id="tab-3">
                    <div className="tab-info-container">
                      <div className="row" id="finance-select">
                        <div className="col-md-4 mt-15">
                          {/* <label>Choose your loan tearm</label> */}
                          <select
                            value={months}
                            onChange={(e) => {
                              setMonths(e.target.value);
                            }}
                          >
                            <optgroup label="Choose loan term">
                              <option value={72}>72 Months</option>
                              <option value={60}>60 Months</option>
                              <option value={48}>48 Months</option>
                              <option value={36}>36 Months</option>
                            </optgroup>
                          </select>
                        </div>
                        <div className="col-md-4 mt-15">
                          {/* <label>What’s Your credit score ?</label> */}
                          <select
                            value={creditScore}
                            onChange={(e) => {
                              setCreditScore(e.target.value);
                            }}
                          >
                            <optgroup label="Your Credit Score">
                              <option value={750}>Excellent: 750+</option>
                              <option value={700}>Good: 700-749</option>
                              <option value={600}>Average: 600-699</option>
                              <option value={599}>
                                Below Average: 599 and Below
                              </option>
                            </optgroup>
                          </select>
                        </div>
                        <div className="col-md-4 mt-15">
                          <select
                            onChange={(e) => {
                              setAnnualIncome(e.target.value);
                            }}
                          >
                            <optgroup label="Your Annual Income">
                              <option value={30000}>$30,000+</option>
                              <option value={40000}>$40,000+</option>
                              <option value={50000}>$50,000+</option>
                              <option value={60000}>$60,000+</option>
                              <option value={80000}>$80,000+</option>
                              <option value={120000}>$120,000+</option>
                              <option value={150000}>$150,000+</option>
                            </optgroup>
                          </select>
                        </div>
                      </div>
                      <div className="mt-50">
                        <div className="row">
                          <div className="col-md-6">
                            <h1 className="range-heading">Monthly Payment</h1>
                          </div>
                          <div className="col-md-6 d-flex justify-content-end">
                            <input
                              type="number"
                              className="range-number-input"
                              disabled
                              style={{
                                borderColor: "black",
                                borderWidth: "1px",
                                color: "black",
                              }}
                              value={Math.ceil(monthlyPayment)}
                            />
                          </div>
                        </div>
                        <input
                          className="border rounded range-input"
                          type="range"
                          value={Math.ceil(monthlyPayment)}
                          min={200}
                          max={800}
                          onChange={(e) => {
                            // setMonthlyPayment(e.target.value);
                            setMonthlyPayment(e.target.value);
                          }}
                          step={Math.ceil(carPendingAmount / 50)}
                        />
                      </div>
                      <div className="mt-50">
                        <div className="row">
                          <div className="col-md-6">
                            <h1 className="range-heading">Cash Down</h1>
                          </div>
                          <div className="col-md-6 d-flex justify-content-end">
                            <input
                              type="number"
                              className="range-number-input"
                              value={Math.ceil(downPayment)}
                              disabled
                            />
                          </div>
                        </div>
                        <input
                          className="border rounded range-input"
                          type="range"
                          value={Math.ceil(downPayment)}
                          min={500}
                          max={10000}
                          onChange={(e) => {
                            // setDownPayment(e.target.value);
                            setDownPayment(e.target.value);
                          }}
                          // step={Math.ceil(carPrice / 100)}
                          step={10}
                        />
                      </div>
                      <div className="row mobile-d-none">
                        {/* <div className="col-md-6">
                          <div className="apply-card mt-30">
                            <h1 className="apply-card-heading">
                              Apply For Finance
                            </h1>
                            <p className="apply-card-para">
                              Get pre-qualified for a loan in <br /> 2 minutes.
                              <br />
                              No hit to your credit score!
                            </p>
                            <a href="/loan calculator">
                              <button
                                className="btn btn-primary apply-card-button"
                                type="button"
                              >
                                Get Pre-qualified
                              </button>
                            </a>
                          </div>
                        </div> */}
                        <div className="col-md-6">
                          <div className="apply-card mt-30">
                            <h1 className="apply-card-heading">
                              <strong>
                                Got a trade-in? NOW OFFERING $3,000 ABOVE KBB
                              </strong>
                            </h1>
                            <p className="apply-card-para">
                              Answer a few questions about your car and get an
                              instant value. This only takes 2 minutes.
                            </p>
                            <a href="/pre-qualified">
                              <button
                                className="btn btn-primary apply-card-button"
                                type="button"
                              >
                                <strong>Get Value!</strong>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" role="tabpane4" id="tab-4">
                    <div className="tab-info-container">
                      <div className="h3-black w-100 text-center">
                        Total Amount in Cash : $54,000
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="apply-card mt-30">
                            <h1 className="apply-card-heading">
                              Apply For Finance
                            </h1>
                            <p className="apply-card-para">
                              Get pre-qualified for a loan in <br /> 2 minutes.
                              <br />
                              No hit to your credit score!
                            </p>
                            <a href="/loan calculator">
                              <button
                                className="btn btn-primary apply-card-button"
                                type="button"
                              >
                                Get Pre-qualified
                              </button>
                            </a>
                          </div>
                        </div>
                        <div className="col">
                          <div className="apply-card mt-30">
                            <h1 className="apply-card-heading">
                              <strong>
                                Got a trade-in? NOW OFFERING $3,000 ABOVE KBB
                              </strong>
                            </h1>
                            <p className="apply-card-para">
                              Answer a few questions about your car and get an
                              instant value. This only takes 2 minutes.
                            </p>
                            <a href="/pre-qualified">
                              <button
                                className="btn btn-primary apply-card-button"
                                type="button"
                              >
                                <strong>Get Value!</strong>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="summary-conatiner">
              <div className="summary-card">
                <div
                  className={
                    buyType === "financed"
                      ? "d-flex justify-content-center summary-header"
                      : "d-none"
                  }
                >
                  <div className="w-50">
                    <h1 className="summary-header-heading">
                      ${Math.ceil(monthlyPayment)}
                    </h1>
                    <h1 className="summary-header-sub-heading">
                      Estimated Monthly Payment
                    </h1>
                  </div>
                  <div className="d-flex justify-content-end w-50">
                    <div>
                      <h1 className="summary-header-heading">
                        ${Math.ceil(downPayment)}
                      </h1>
                      <h1 className="summary-header-sub-heading">Cash Down</h1>
                    </div>
                  </div>
                </div>
                {/* +++++++++++++++++++++++++++++++++++ */}
                <div
                  className={
                    buyType === "financed"
                      ? "d-none"
                      : "d-flex justify-content-center summary-header"
                  }
                >
                  <div className="w-100">
                    <h1 className="summary-header-heading w-100 text-center">
                      $
                      {Math.ceil(
                        carPrice +
                          car.shippingCharges +
                          car.taxAndRegistrationCharges +
                          car.dealerFees -
                          tradeInCredit
                      )}
                    </h1>
                    <h1 className="summary-header-sub-heading w-100 text-center">
                      Total Price
                    </h1>
                  </div>
                </div>
                {/* +++++++++++++++++++++++++++++++++ */}
                {/* <div className="d-flex summary-card-price-detail">
                  <div className="w-60">
                    <p>VEHICLE PRICE</p>
                  </div>
                  <div className="d-flex justify-content-end w-40">
                    <p>${Math.ceil(car.price)}</p>
                  </div>
                </div> */}
                {/* <div className="d-flex summary-card-price-detail">
                  <div className="w-60">
                    <p>SHIPPING</p>
                  </div>
                  <div className="d-flex justify-content-end w-40">
                    <p>${car.shippingCharges}</p>
                  </div>
                </div> */}
                {/* <div className="d-flex summary-card-price-detail">
                  <div className="w-60">
                    <p>TAX, TITLE & REG</p>
                  </div>
                  <div className="d-flex justify-content-end w-40">
                    <p>${car.taxAndRegistrationCharges}</p>
                  </div>
                </div> */}
                {/* <div className="d-flex summary-card-price-detail">
                  <div className="w-60">
                    <p>DEALER FEES</p>
                  </div>
                  <div className="d-flex justify-content-end w-40">
                    <p>${car.dealerFees}</p>
                  </div>
                </div> */}
                {/* <div
                  className={
                    buyType === "financed"
                      ? "d-flex summary-card-price-detail"
                      : "d-none"
                  }
                >
                  <div className="w-60">
                    <p>CASH DOWN</p>
                  </div>
                  <div className="d-flex justify-content-end w-40">
                    <p>${downPayment}</p>
                  </div>
                </div> */}
                <div
                  className="d-flex summary-car-price"
                  style={{ borderWidth: "0px" }}
                >
                  <div className="w-60">
                    <p>TRADE-IN CREDIT</p>
                  </div>
                  <div className="d-flex justify-content-end w-40">
                    <p>${tradeInCredit}</p>
                  </div>
                </div>
                {/* <div
                  className={
                    buyType === "financed"
                      ? "d-flex summary-card-price-detail"
                      : "d-none"
                  }
                >
                  <div className="w-60">
                    <p>APR</p>
                  </div>
                  <div className="d-flex justify-content-end w-40">
                    <p>$35,000</p>
                  </div>
                </div> */}
                {/* <div
                  className={
                    buyType === "financed"
                      ? "d-flex summary-card-price-detail"
                      : "d-none"
                  }
                >
                  <div className="w-60">
                    <p>ESTIMATED AMOUNT FINANCED</p>
                  </div>
                  <div className="d-flex justify-content-end w-40">
                    <p>
                      $
                      {car.price +
                        car.shippingCharges +
                        car.taxAndRegistrationCharges +
                        car.dealerFees +
                        car.downPayment -
                        tradeInCredit}
                    </p>
                  </div>
                </div> */}
                <button
                  className="btn btn-primary summary-button"
                  type="button"
                  onClick={(e) => {
                    handlePreSubmit(e);
                  }}
                >
                  GET PRE-APPROVED
                </button>
                {/* <h4
                  className="w-100 text-center"
                  style={{
                    marginTop: "20px",
                    color: "white",
                    fontSize: "18px",
                  }}
                >
                  No Hit in your credit Score!
                </h4> */}
              </div>
              <div className="row dektop-d-none">
                {/* <div className="col-md-6">
                          <div className="apply-card mt-30">
                            <h1 className="apply-card-heading">
                              Apply For Finance
                            </h1>
                            <p className="apply-card-para">
                              Get pre-qualified for a loan in <br /> 2 minutes.
                              <br />
                              No hit to your credit score!
                            </p>
                            <a href="/loan calculator">
                              <button
                                className="btn btn-primary apply-card-button"
                                type="button"
                              >
                                Get Pre-qualified
                              </button>
                            </a>
                          </div>
                        </div> */}
                <div className="col-md-6">
                  <div className="apply-card mt-30">
                    <h1 className="apply-card-heading">
                      <strong>
                        Got a trade-in? NOW OFFERING $3,000 ABOVE KBB
                      </strong>
                    </h1>
                    <p
                      className=""
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "black",
                        marginBottom: "10px",
                      }}
                    >
                      Answer a few questions about your car and get an instant
                      value. This only takes 2 minutes.
                    </p>
                    <a href="/pre-qualified">
                      <button
                        className="btn btn-primary apply-card-button"
                        type="button"
                      >
                        <strong>Get Value!</strong>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                Quality over quantity
              </h1>
              <p
                style={{
                  height: "auto",
                  color: "rgb(255,255,255)",
                  marginTop: "30px",
                }}
              >
                At Solid Motors, we believe in quality over quantity, that's why
                we spend time finding the best inventory, all of our vehicles
                are inspected before and after leaving our lot to ensure safety
                and quality. &nbsp;
                <br />
                <br />
              </p>
              <ul id="inspection-list" style={{ color: "rgb(255,255,255)" }}>
                <li style={{ marginTop: "30px" }}>
                  Inspected by ASE certified mechanics
                  <br />
                </li>
                <li style={{ marginTop: "10px" }}>
                  Low mileage cars&nbsp;
                  <br />
                </li>
                <li style={{ marginTop: "10px" }}>
                  Hand-picked cars from our extensive research&nbsp;
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
        <div className="cars-row-container">
          <h1 className="h1-black w-100 text-center  mt-200">Similar picks</h1>
          <div id="car-row" className="row mt-100">
            {cars.slice(0, 4).map((item, index) => (
              <CarCard
                key={index}
                id={item._id}
                car={item}
                make={item.make}
                name={item.name}
                model={item.model}
                price={item.price}
                monthlyPayment={item.monthlyPayment}
                milesDriven={item.milesDriven}
                onClick={() => {
                  myRef2.current.scrollIntoView();
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CarDetail;

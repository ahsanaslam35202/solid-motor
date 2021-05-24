import React from "react";
import { getCar, getCars } from "../services/carsService";
import CarCard from "./CarCard";
import { Link, Redirect } from "react-router-dom";
import { getloggedinuser, isLoggedin, logout } from "../services/userService";
import Navbar2 from "./Navbar2";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getTradeIn } from "../services/sellTradeService";
import { addBuyRequest } from "../services/buyRequestsService";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarCarouselImage from "./CarCarouselImage";

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
  const [cars, setCars] = React.useState([]);
  const [monthlyPayment, setMonthlyPayment] = React.useState(0);
  const [downPayment, setDownPayment] = React.useState(0);
  const [carPrice, setCarPrice] = React.useState(0);
  const [numberOfMonths, setNumberOfMonths] = React.useState(0);
  const [creditScore, setCreditScore] = React.useState(780);
  const [annualIncome, setAnnualIncome] = React.useState(30000);
  const [tradeInCredit, setTradeInCredit] = React.useState(0);
  const { car } = props.location.state;

  const getCarsData = async () => {
    const { data } = await getCars();
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
    getCarsData();
  }, []);
  React.useEffect(() => {
    getTradeInCredit();
  }, []);
  React.useEffect(() => {
    setCarPrice(car.price);
    setDownPayment(car.downPayment);
    setMonthlyPayment(car.monthlyPayment);
    setNumberOfMonths(car.numberOfMonths);
  }, []);

  const handleMonthsChange = (e) => {
    setNumberOfMonths(e.target.value);
    setMonthlyPayment(Math.ceil((carPrice - downPayment) / e.target.value));
  };
  const handleDownPaymentChange = (e) => {
    setDownPayment(e.target.value);
    setMonthlyPayment(Math.ceil((carPrice - e.target.value) / numberOfMonths));
  };
  const handleMonthlyPaymentChange = (e) => {
    setMonthlyPayment(e.target.value);
    setDownPayment(Math.ceil(carPrice - e.target.value * numberOfMonths));
  };
  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    const user = getloggedinuser();
    const userId = user._id;
    const carId = car._id;
    await addBuyRequest({
      carId,
      userId,
      downPayment,
      monthlyPayment,
      numberOfMonths,
      creditScore,
      annualIncome,
    }).then(() => {
      console.log("Request Send Successfully !");
    });
  };

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

  return (
    <>
      {isLoggedin() ? <Navbar2 handleLogout={handleLogout} /> : <Navbar />}
      <div>
        <div className="car-header-container">
          <img className="w-100" src="assets/img/car.png" />
          <div className="car-header-info-container">
            <h1 className="car-title">
              {car.modelYear} {car.make} {car.model}
            </h1>
            <h1 className="miles-driven">{car.milesDriven} Miles</h1>
          </div>
          <div className="ab-on-desktop">
            <h1 className="car-name">
              <strong>${car.price}</strong>
            </h1>
          </div>
        </div>

        <div
          className="d-flex justify-content-around align-items-center"
          style={{
            marginRight: "8%",
            marginLeft: "8%",
            marginTop: "30px",
            borderRadius: "16px",
            background: "rgba(12,189,255,0.29)",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "0px",
            paddingTop: "15px",
          }}
        >
          <div className="info-badge-container">
            <img
              src="assets/img/view.svg"
              style={{ width: "24px", marginTop: "5px" }}
            />
            <div className="dek-ml20">
              <h1 style={{ fontSize: "24px" }}>325</h1>
              <p>Views all Time</p>
            </div>
          </div>
          <div className="info-badge-container">
            <img
              src="assets/img/heart.svg"
              style={{ width: "24px", marginTop: "5px" }}
            />
            <div className="dek-ml20">
              <h1 style={{ fontSize: "24px" }}>24</h1>
              <p>people liked this car</p>
            </div>
          </div>
          <div className="info-badge-container">
            <img
              src="assets/img/heart.svg"
              style={{ width: "24px", marginTop: "5px" }}
            />
            <div className="dek-ml20">
              <h1 style={{ fontSize: "24px" }}>wishlist</h1>
              <p>add to wishlist</p>
            </div>
          </div>
        </div>

        <div className="mt-80">
          <Carousel
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            responsive={responsive}
          >
            <CarCarouselImage />
            <CarCarouselImage />
            <CarCarouselImage />
            <CarCarouselImage />
            <CarCarouselImage />
            <CarCarouselImage />
            <CarCarouselImage />
            <CarCarouselImage />
            <CarCarouselImage />
            <CarCarouselImage />
          </Carousel>
        </div>

        <div className="container mt-120 mobile-mt50 ">
          <h1 className="w-100 text-center details-heading" />
          <div className="row">
            <div className="col-md-4">
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
                  Accident Free
                </h1>
                <p style={{ marginTop: "10px", fontSize: "14px" }}>
                  Lorem Ipisum DOlor every cars&nbsp;
                  <br />
                  Sit a met Blef.
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
                >
                  View Report
                </button>
              </div>
            </div>
            <div className="col-md-4">
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
                  7 Day Money Back&nbsp;
                  <br />
                  Quarrenty
                </h1>
                <p style={{ marginTop: "10px", fontSize: "14px" }}>
                  Lorem Ipisum DOlor every cars&nbsp;
                  <br />
                  Sit a met Blef.
                  <br />
                </p>
              </div>
            </div>
            <div className="col-md-4">
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
                  Lorem Ipisum DOlor every cars&nbsp;
                  <br />
                  Sit a met Blef.
                  <br />
                </p>
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{ background: "#00bbff", borderWidth: "0px" }}
                >
                  View Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-200 mobile-mt50">
          <h1 className="w-100 text-center details-heading">Vehicle Details</h1>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center mt-50">
              <div className="shadow details-tab-container">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item w-50" role="presentation">
                    <a
                      className="nav-link active w-100 text-center tab-link"
                      role="tab"
                      data-toggle="tab"
                      href="#tab-1"
                    >
                      Features
                    </a>
                  </li>
                  <li className="nav-item w-50" role="presentation">
                    <a
                      className="nav-link w-100 text-center tab-link"
                      role="tab"
                      data-toggle="tab"
                      href="#tab-2"
                    >
                      How much can I afford
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
                              Engine Type&nbsp;
                            </h1>
                            <p className="details-card-para">
                              {car.engineType}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="details-card">
                            <h1 className="details-card-heading">MPG&nbsp;</h1>
                            <p className="details-card-para">{car.mpg}</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
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
                              Vehicle ID&nbsp;
                            </h1>
                            <p className="details-card-para">{car.vehicleId}</p>
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
                              Stock #&nbsp;
                            </h1>
                            <p className="details-card-para">{car.stock}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" role="tabpanel" id="tab-2">
                    <div className="tab-details-container">
                      <h1 className="h3-black w-100 text-center">Warranty</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Corporis, assumenda ducimus! Repudiandae
                        dignissimos repellat perferendis rem eaque repellendus!
                        Debitis esse veritatis eaque deleniti quo culpa
                        asperiores consequatur officia ea a!
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
              style={{ height: "100px", overflow: "hidden" }}
            >
              {car.extendedFeatures.map((item, index) => (
                <div className="col-md-4 d-flex justify-content-center">
                  <ul>
                    <li>{item}</li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center mt-50">
              <button className="btn btn-primary main-button" type="button">
                LOAD MORE
              </button>
            </div>
          </div>
        </div>
        <div className="mt-200">
          <div className="car-finance-summary-container">
            <div className="car-finance-container">
              <div>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item w-50" role="presentation">
                    <a
                      className="nav-link active w-100 text-center tabs-link"
                      role="tab"
                      data-toggle="tab"
                      href="#tab-3"
                    >
                      Estimate Finance
                    </a>
                  </li>
                  <li className="nav-item w-50" role="presentation">
                    <a
                      className="nav-link w-100 text-center tabs-link"
                      role="tab"
                      data-toggle="tab"
                      href="#tab-4"
                    >
                      Pay Cash
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" role="tabpanel" id="tab-3">
                    <div className="tab-info-container">
                      <div className="row" id="finance-select">
                        <div className="col-md-4 mt-15">
                          {/* <label>Choose your loan tearm</label> */}
                          <select
                            value={numberOfMonths}
                            onChange={(e) => {
                              handleMonthsChange(e);
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
                          <select>
                            <optgroup label="Credit Score">
                              <option value={780}>Excellent: 780</option>
                              <option value={680}>Good: 680</option>
                              <option value={680}>Average: 680</option>
                              <option value={588}>Below Average: 588</option>
                            </optgroup>
                          </select>
                        </div>
                        <div className="col-md-4 mt-15">
                          {/* <label>Annual Income?</label> */}
                          <select>
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
                              value={Math.ceil(monthlyPayment)}
                              onChange={(e) => {
                                handleMonthlyPaymentChange(e);
                              }}
                            />
                          </div>
                        </div>
                        <input
                          className="border rounded range-input"
                          type="range"
                          value={monthlyPayment}
                          min={Math.ceil((carPrice - carPrice * 0.8) / 72)}
                          max={Math.ceil((carPrice - carPrice * 0.2) / 36)}
                          onChange={(e) => {
                            handleMonthlyPaymentChange(e);
                          }}
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
                              onChange={(e) => {
                                handleDownPaymentChange(e);
                              }}
                            />
                          </div>
                        </div>
                        <input
                          className="border rounded range-input"
                          type="range"
                          value={Math.ceil(downPayment)}
                          min={Math.ceil(carPrice * 0.2)}
                          max={Math.ceil(carPrice * 0.8)}
                          onChange={(e) => {
                            handleDownPaymentChange(e);
                          }}
                          step={Math.ceil(carPrice / 20)}
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="apply-card mt-30">
                            <h1 className="apply-card-heading">
                              Apply TradeIn Value
                            </h1>
                            <p className="apply-card-para">
                              Answer a few questions about your car and get an
                              instant value. This only takes 2 minutes.
                            </p>
                            <button
                              className="btn btn-primary apply-card-button"
                              type="button"
                            >
                              Apply Tradein
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="apply-card mt-30">
                            <h1 className="apply-card-heading">
                              <strong>Carvana Offering Finance</strong>
                            </h1>
                            <p className="apply-card-para">
                              Get pre-qualified for a loan in 2 minutes.
                              <br />
                              No hit to your credit score!
                            </p>
                            <button
                              className="btn btn-primary apply-card-button"
                              type="button"
                            >
                              <strong>Get PreQualified</strong>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane active" role="tabpanel" id="tab-4">
                    <div className="tab-info-container">
                      <div className="h3-black w-100 text-center">
                        {" "}
                        Total Amount in Cash : $54,000
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="apply-card mt-30">
                            <h1 className="apply-card-heading">
                              Apply TradeIn Value
                            </h1>
                            <p className="apply-card-para">
                              Answer a few questions about your car and get an
                              instant value. This only takes 2 minutes.
                            </p>
                            <button
                              className="btn btn-primary apply-card-button"
                              type="button"
                            >
                              Apply Tradein
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="apply-card mt-30">
                            <h1 className="apply-card-heading">
                              <strong>Carvana Offering Finance</strong>
                            </h1>
                            <p className="apply-card-para">
                              Get pre-qualified for a loan in 2 minutes.
                              <br />
                              No hit to your credit score!
                            </p>
                            <button
                              className="btn btn-primary apply-card-button"
                              type="button"
                            >
                              <strong>Get PreQualified</strong>
                            </button>
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
                <div className="d-flex justify-content-center summary-header">
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
                <div className="d-flex summary-card-price-detail">
                  <div className="w-60">
                    <p>VEHICLE PRICE</p>
                  </div>
                  <div className="d-flex justify-content-end w-40">
                    <p>${Math.ceil(car.price)}</p>
                  </div>
                </div>
                <div className="d-flex summary-card-price-detail">
                  <div className="w-60">
                    <p>SHIPPING</p>
                  </div>
                  <div className="d-flex justify-content-end w-40">
                    <p>${car.shippingCharges}</p>
                  </div>
                </div>
                <div className="d-flex summary-card-price-detail">
                  <div className="w-60">
                    <p>TAX, TITLE & REG</p>
                  </div>
                  <div className="d-flex justify-content-end w-40">
                    <p>${car.taxAndRegistrationCharges}</p>
                  </div>
                </div>
                <div className="d-flex summary-card-price-detail">
                  <div className="w-60">
                    <p>DEALER FEES</p>
                  </div>
                  <div className="d-flex justify-content-end w-40">
                    <p>${car.dealerFees}</p>
                  </div>
                </div>
                <div className="d-flex summary-card-price-detail">
                  <div className="w-60">
                    <p>CASH DOWN</p>
                  </div>
                  <div className="d-flex justify-content-end w-40">
                    <p>${car.downPayment}</p>
                  </div>
                </div>
                <div className="d-flex summary-car-price">
                  <div className="w-60">
                    <p>TRADE-IN CREDIT</p>
                  </div>
                  <div className="d-flex justify-content-end w-40">
                    <p>${tradeInCredit}</p>
                  </div>
                </div>
                <div className="d-flex summary-card-price-detail">
                  <div className="w-60">
                    <p>APR</p>
                  </div>
                  <div className="d-flex justify-content-end w-40">
                    <p>$35,000</p>
                  </div>
                </div>
                <div className="d-flex summary-card-price-detail">
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
                </div>
                <button
                  className="btn btn-primary summary-button"
                  type="button"
                  onClick={(e) => {
                    handleRequestSubmit(e);
                  }}
                >
                  GET STARTED
                </button>
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
          <div className="row">
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
        <div className="cars-row-container">
          <h1 className="h1-black w-100 text-center  mt-200">Related Cars</h1>
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
                milesDriven={item.milesDriven}
                onClick={() => {
                  console.log("a");
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

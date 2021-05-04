import React from "react";
import { isLoggedin, logout } from "../services/userService";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const LoanCalculator = () => {
  const forceUpdate = useForceUpdate();
  const handleLogout = async (e) => {
    await logout();
    forceUpdate();
  };
  const [months, setMonths] = React.useState(72);
  const [creditScore, setCreditScore] = React.useState(780);
  const [carCost, setCarCost] = React.useState(10000);
  const [downPayment, setDownpayment] = React.useState(500);
  const [monthlyPayment, setMonthlyPayment] = React.useState(0);
  const [affordPrice, setAffordPrice] = React.useState(0);

  const [estimatedMonthlyPaymemt, setEstimatedMonthlyPayment] = React.useState(
    100
  );

  React.useEffect(() => {
    monthlyPaymentUpdate();
    affordPriceUpdate();
  }, [
    months,
    creditScore,
    carCost,
    downPayment,
    monthlyPayment,
    affordPrice,
    estimatedMonthlyPaymemt,
  ]);

  var commision = 0;
  var pendingPayment = 0;
  var carPrice = 0;

  function calCommision() {
    if (months == 72) {
      if (creditScore == 780) {
        commision = 10;
      }
      if (creditScore == 680) {
        commision = 21;
      }
      if (creditScore == 630) {
        commision = 32;
      }
      if (creditScore == 588) {
        commision = 47;
      }
    }

    if (months == 60) {
      if (creditScore == 780) {
        commision = 8;
      }
      if (creditScore == 680) {
        commision = 18;
      }
      if (creditScore == 630) {
        commision = 27;
      }
      if (creditScore == 588) {
        commision = 38;
      }
    }

    if (months == 48) {
      if (creditScore == 780) {
        commision = 7.5;
      }
      if (creditScore == 680) {
        commision = 14;
      }
      if (creditScore == 630) {
        commision = 21;
      }
      if (creditScore == 588) {
        commision = 31;
      }
    }

    if (months == 36) {
      if (creditScore == 780) {
        commision = 5.2;
      }
      if (creditScore == 680) {
        commision = 10;
      }
      if (creditScore == 630) {
        commision = 16;
      }
      if (creditScore == 588) {
        commision = 22;
      }
    }
  }

  function monthlyPaymentUpdate() {
    if (carCost >= 10000 && downPayment >= 500) {
      calCommision();
      pendingPayment = carCost - downPayment;
      carPrice = pendingPayment / months;
      carPrice = carPrice * (1 + commision / 100);
      setMonthlyPayment(Math.ceil(carPrice));
    }
  }

  function affordPriceUpdate() {
    if (estimatedMonthlyPaymemt >= 100 && downPayment >= 500) {
      console.log(estimatedMonthlyPaymemt);
      calCommision();
      var tfp = 0;
      console.log(commision);
      tfp = estimatedMonthlyPaymemt * months;
      console.log(tfp);
      tfp = tfp * (1 + commision / 100);
      tfp = tfp + downPayment;
      setAffordPrice(Math.ceil(tfp));
    }
  }

  return (
    <>
      {isLoggedin() ? <Navbar2 handleLogout={handleLogout} /> : <Navbar />}
      <div>
        <header className="header-container">
          <div className="container">
            <div className="row mt-0">
              <div className="col-md-6">
                <h1 className="page-title white-color">
                  Car Loan <br />
                  Calculator
                </h1>
                <p className="white-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <div className="shadow tabs-container">
                  <ul className="nav nav-tabs" role="tablist">
                    <li
                      className="nav-item tab-switch-button"
                      role="presentation"
                    >
                      <a
                        className="nav-link active w-100 text-center tab-switch-link"
                        role="tab"
                        data-toggle="tab"
                        href="#tab-1"
                      >
                        Auto Loan Calculator
                      </a>
                    </li>
                    <li
                      className="nav-item tab-switch-button"
                      role="presentation"
                    >
                      <a
                        className="nav-link w-100 text-center tab-switch-link"
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
                      <div className="form-container">
                        <form method="post">
                          <h2 className="text-center price">
                            ${monthlyPayment}/Month
                          </h2>
                          <div className="form-group mt-30">
                            <label>Cost of car I want</label>
                            <input
                              className="form-control loan-input"
                              type="number"
                              name=""
                              // value="10000"
                              min="1000"
                              placeholder="10000"
                              onChange={(e) => {
                                setCarCost(e.target.value);
                                monthlyPaymentUpdate();
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <label>What’s Your credit score ?</label>
                            <select
                              onChange={(e) => {
                                setCreditScore(e.target.value);
                                monthlyPaymentUpdate();
                              }}
                              className="form-control select loan-input"
                            >
                              <optgroup label="This is a group">
                                <option value={780}>Excellent: 780</option>
                                <option value={680}>Good: 680</option>
                                <option value={630}>Average: 680</option>
                                <option value={588}>Below Average: 588</option>
                              </optgroup>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Choose your loan tearm</label>
                            <select
                              onChange={(e) => {
                                setMonths(e.target.value);
                                monthlyPaymentUpdate();
                              }}
                              className="form-control select loan-input"
                            >
                              <optgroup label="This is a group">
                                <option value={72}>72 Months</option>
                                <option value={60}>60 Months</option>
                                <option value={48}>48 Months</option>
                                <option value={36}>38 Months</option>
                              </optgroup>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>What is your Down payment ?</label>
                            <input
                              className="form-control  loan-input"
                              type="number"
                              name="name"
                              min="500"
                              // value="1000"
                              placeholder="500"
                              onChange={(e) => {
                                setDownpayment(e.target.value);
                                monthlyPaymentUpdate();
                              }}
                            />
                          </div>
                          {/* <div className="form-group">
                            <button
                              className="btn btn-primary form-button"
                              type="submit"
                            >
                              GET MY PERSONALIZED FINANCING
                            </button>
                          </div> */}
                        </form>
                      </div>
                    </div>
                    <div className="tab-pane" role="tabpanel" id="tab-2">
                      <div className="form-container">
                        <form method="post">
                          <h2 className="text-center price">${affordPrice}+</h2>
                          <div className="form-group mt-30">
                            <label>Estimated Monthly payment</label>
                            <input
                              className="form-control  loan-input"
                              type="number"
                              name="name"
                              min="100"
                              placeholder="100"
                              onChange={(e) => {
                                setEstimatedMonthlyPayment(e.target.value);
                                affordPriceUpdate();
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <label>What’s Your credit score ?</label>
                            <select
                              onChange={(e) => {
                                setCreditScore(e.target.value);
                                affordPriceUpdate();
                              }}
                              className="form-control loan-input"
                            >
                              <optgroup label="This is a group">
                                <option value={780}>Excellent: 780</option>
                                <option value={680}>Good: 680</option>
                                <option value={630}>Average: 680</option>
                                <option value={588}>Below Average: 588</option>
                              </optgroup>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Choose your loan tearm</label>
                            <select
                              onChange={(e) => {
                                setMonths(e.target.value);
                                affordPriceUpdate();
                              }}
                              className="form-control loan-input"
                            >
                              <optgroup label="This is a group">
                                <option value={72}>72 Months</option>
                                <option value={60}>60 Months</option>
                                <option value={48}>48 Months</option>
                                <option value={36}>38 Months</option>
                              </optgroup>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>What is your Down payment ?</label>
                            <input
                              className="form-control  loan-input"
                              type="number"
                              name="name"
                              min="500"
                              // value="1000"
                              placeholder="500"
                              onChange={(e) => {
                                setDownpayment(e.target.value);
                                affordPriceUpdate();
                              }}
                            />
                          </div>
                          {/* <div className="form-group">
                            <button
                              className="btn btn-primary form-button"
                              type="submit"
                            >
                              GET MY PERSONALIZED FINANCING
                            </button>
                          </div> */}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="mt-180 extra-note">
          <div className="container">
            <div className="row mt-0">
              <div className="col-md-6">
                <p className="main-color">
                  *Taxes and charges are not included in your estimated amount.
                  This amount may be different than financing terms found
                  throughout SolidMotors.com
                </p>
              </div>
              <div className="col-md-6 d-none" />
            </div>
          </div>
        </div>
        <div className="footer-b-mar">
          <span></span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoanCalculator;

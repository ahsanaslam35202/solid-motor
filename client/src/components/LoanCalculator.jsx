import React from "react";
import { isLoggedin, logout } from "../services/userService";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import CallBar from "./CallBar";

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
  const [creditScore, setCreditScore] = React.useState(750);
  const [carCost, setCarCost] = React.useState(10000);
  const [downPayment, setDownpayment] = React.useState(1500);
  const [monthlyPayment, setMonthlyPayment] = React.useState("");
  const [affordPrice, setAffordPrice] = React.useState(0);

  const [estimatedMonthlyPaymemt, setEstimatedMonthlyPayment] =
    React.useState(100);

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
  }

  function monthlyPaymentUpdate() {
    if (carCost >= 2000 && downPayment >= 750) {
      if (creditScore == 599 && months == 72) {
        setMonthlyPayment("N/A");
      } else if (parseInt(downPayment) > parseInt(carCost)) {
        setMonthlyPayment(0);
      } else {
        calCommision();
        pendingPayment = carCost - downPayment;
        carPrice = pendingPayment / months;
        carPrice = carPrice * (1 + commision / 100);
        setMonthlyPayment(Math.ceil(carPrice));
      }
    }
  }

  function affordPriceUpdate() {
    if (estimatedMonthlyPaymemt >= 100 && downPayment >= 750) {
      if (creditScore == 599 && months == 72) {
        setAffordPrice("N/A");
      } else {
        calCommision();
        var tfp = 0;
        tfp = estimatedMonthlyPaymemt * months;
        console.log("Total Payment: " + tfp);
        tfp = tfp * (1 + commision / 100);
        console.log("After Adding Commision: " + tfp);

        tfp = parseInt(tfp) + parseInt(downPayment);
        if (tfp > 100000) {
          setAffordPrice(100000);
        } else {
          setAffordPrice(Math.ceil(tfp));
        }
      }
    }
  }

  return (
    <>
      <CallBar />
      {isLoggedin() ? <Navbar2 handleLogout={handleLogout} /> : <Navbar />}
      <div>
        <header className="header-container">
          <div className="container mobile-pd0">
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
              <div
                id="loan-tabs"
                className="col-md-6 d-flex justify-content-center mobile-pd0"
              >
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
                            {monthlyPayment == "N/A"
                              ? "Not Available"
                              : "$" + monthlyPayment + "/Month"}
                          </h2>
                          <div className="form-group mt-30">
                            <label>Cost of car I want $10,000 - $100,000</label>
                            <input
                              className="form-control loan-input"
                              type="number"
                              name=""
                              value={carCost}
                              min="2000"
                              placeholder="10000"
                              onChange={(e) => {
                                if (e.target.value > 100000) {
                                  setCarCost(100000);
                                  monthlyPaymentUpdate();
                                } else {
                                  setCarCost(e.target.value);
                                  monthlyPaymentUpdate();
                                }
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <label>What???s Your credit score ?</label>
                            <select
                              onChange={(e) => {
                                setCreditScore(e.target.value);
                                monthlyPaymentUpdate();
                              }}
                              className="form-control select loan-input"
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
                          <div className="form-group">
                            <label>Choose your loan tearm</label>
                            <select
                              onChange={(e) => {
                                setMonths(e.target.value);
                                monthlyPaymentUpdate();
                              }}
                              className="form-control select loan-input"
                            >
                              <optgroup label="Choose Loan Term">
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
                              min="1500"
                              max="100000"
                              value={downPayment}
                              placeholder="$1500"
                              onChange={(e) => {
                                if (e.target.value > 100000) {
                                  setDownpayment(100000);
                                  monthlyPaymentUpdate();
                                } else {
                                  setDownpayment(e.target.value);
                                  monthlyPaymentUpdate();
                                }
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

                    {/* +++++++++++++++++++++++++++ TAB 2 */}
                    <div className="tab-pane" role="tabpanel" id="tab-2">
                      <div className="form-container">
                        <form method="post">
                          <h2 className="text-center price">
                            {affordPrice == "N/A"
                              ? "Not Available"
                              : "$" + affordPrice}
                          </h2>
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
                            <label>What???s Your credit score ?</label>
                            <select
                              onChange={(e) => {
                                setCreditScore(e.target.value);
                                affordPriceUpdate();
                              }}
                              className="form-control loan-input"
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
                          <div className="form-group">
                            <label>Choose your loan tearm</label>
                            <select
                              onChange={(e) => {
                                setMonths(e.target.value);
                                affordPriceUpdate();
                              }}
                              className="form-control loan-input"
                            >
                              <optgroup label="Choose Loan Term">
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
                              min="1500"
                              max="100000"
                              value={downPayment}
                              placeholder="$1500"
                              onChange={(e) => {
                                if (e.target.value > 100000) {
                                  setDownpayment(100000);
                                  affordPriceUpdate();
                                } else {
                                  setDownpayment(e.target.value);
                                  affordPriceUpdate();
                                }
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
                  With approved credit. Taxes and charges are not included in
                  your estimated amount. This amount may be different than
                  financing terms after approval.
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

import React from "react";
import { Link } from "react-router-dom";
import { isLoggedin, logout, userSignup } from "./../services/userService";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const Signup = (props) => {
  const forceUpdate = useForceUpdate();
  const handleLogout = async (e) => {
    await logout();
    forceUpdate();
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const [firstName, setFirstName] = React.useState({ value: "", error: "" });
  const [middleName, setMiddleName] = React.useState({ value: "", error: "" });
  const [lastName, setLastName] = React.useState({ value: "", error: "" });
  const [suffix, setSuffix] = React.useState({ value: "", error: "" });
  const [dateOfBirth, setDateOfBirth] = React.useState({
    value: "",
    error: "",
  });
  const [annualIncome, setAnnualIncome] = React.useState({
    value: "",
    error: "",
  });
  const [address, setAddress] = React.useState({ value: "", error: "" });
  const [email, setEmail] = React.useState({ value: "", error: "" });
  const [password, setPassword] = React.useState({ value: "", error: "" });
  const [phoneNumber, setPhoneNumber] = React.useState({
    value: "",
    error: "",
  });

  function getSteps() {
    return ["Personal Information", "Login Information"];
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div className="tab" style={{ textAlign: "center" }}>
            <div>
              <h5 className="text-center mt-30">Personal Information</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore e
              </p>
              <div className="row mt-50">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control input"
                      type="text"
                      placeholder="First Name"
                      value={firstName.value}
                      onChange={(e) => {
                        setFirstName({ value: e.target.value });
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control input"
                      type="text"
                      placeholder="Middle Name"
                      value={middleName.value}
                      onChange={(e) => {
                        setMiddleName({ value: e.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control input"
                      type="text"
                      placeholder="Last Name"
                      value={lastName.value}
                      onChange={(e) => {
                        setLastName({ value: e.target.value });
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group signup-select">
                    <select
                      className="form-control input"
                      style={{ height: "50px" }}
                      value={suffix.value}
                      onChange={(e) => {
                        setSuffix({ value: e.target.value });
                      }}
                    >
                      {/* <optgroup label="This is a group"> */}
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                      {/* </optgroup> */}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control input"
                      type="date"
                      placeholder="Date Of Birth"
                      value={dateOfBirth.value}
                      onChange={(e) => {
                        setDateOfBirth({ value: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control input"
                      type="text"
                      placeholder="Annual Income"
                      value={annualIncome.value}
                      onChange={(e) => {
                        setAnnualIncome({ value: e.target.value });
                      }}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      className="form-control input"
                      type="text"
                      placeholder="Home Address"
                      value={address.value}
                      onChange={(e) => {
                        setAddress({ value: e.target.value });
                      }}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="tab" style={{ textAlign: "center" }}>
            <h5 className="text-center mt-30">Create an account</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore e
            </p>
            <div className="form-group mt-30">
              <input
                className="form-control input"
                type="text"
                placeholder="Email"
                value={email.value}
                onChange={(e) => {
                  setEmail({ value: e.target.value });
                }}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control input"
                type="password"
                placeholder="Password"
                value={password.value}
                onChange={(e) => {
                  setPassword({ value: e.target.value });
                }}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control input"
                type="text"
                placeholder="Phone Number"
                value={phoneNumber.value}
                onChange={(e) => {
                  setPhoneNumber({ value: e.target.value });
                }}
                required
              />
            </div>
          </div>
        );
      default:
        return "Default";
    }
  }

  const handleSignup = async (e) => {
    await userSignup({
      firstName,
      middleName,
      lastName,
      suffix,
      dateOfBirth,
      annualIncome,
      address,
      email,
      password,
      phoneNumber,
    }).then(() => {
      props.history.push("/");
    });
  };

  const steps = getSteps();
  return (
    <>
      {isLoggedin() ? <Navbar2 handleLogout={handleLogout} /> : <Navbar />}
      <div>
        <div className="account-header-container">
          <h1 className="w-100 text-center page-title main-color">
            GET PRE QUALIFIED IN 2 MINUTES
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>
        <div className="mt-200">
          <div className="row mt-0">
            <div className="col-md-6 d-flex align-items-center justify-content-center sign-in-container">
              <div>
                <h1 className="w-100 text-center h1-white">
                  <strong>Already have an Account?&nbsp;</strong>
                </h1>
                <div className="d-flex justify-content-center">
                  <Link to="/login">
                    <button
                      className="btn btn-primary sign-in-button"
                      type="button"
                    >
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="container mb-auto">
                <form
                  className="border rounded shadow regForm"
                  id="regForm"
                  method="post"
                  data-toggle="modal"
                >
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "-20px",
                      opacity: 0,
                    }}
                  >
                    <span className="step" />
                    <span className="step" />
                  </div>
                  {/* Tab 1 */}
                  <div>
                    <div className="form-row">
                      {steps.map((label, index) => (
                        <div
                          className="col-md-6 col-sm-6 w-50 d-flex justify-content-center"
                          key={index}
                        >
                          <div className="tab-number-container">
                            <h1 className="w-100 text-center tab-number">
                              {index + 1}
                            </h1>
                          </div>
                          <h1 className="tab-number-heading">{label}</h1>
                        </div>
                      ))}
                      {/* <div className="col-md-6 col-sm-6 w-50 d-flex justify-content-center">
                        <div className="tab-number-container-2">
                          <h1 className="w-100 text-center tab-number">2</h1>
                        </div>
                        <h1 className="tab-number-heading-2">Information</h1>
                      </div> */}
                    </div>
                  </div>
                  {getStepsContent(activeStep)}
                  <div
                    className="mb-auto w-100"
                    style={{ float: "right", marginBottom: "0px" }}
                  >
                    <div className="form-row" style={{ paddingBottom: "0px" }}>
                      <div
                        className="col-md-6"
                        style={{ paddingBottom: "10px" }}
                      >
                        {activeStep === 0 ? (
                          <></>
                        ) : (
                          <button
                            className="btn btn-primary prev"
                            type="button"
                            onClick={handleBack}
                          >
                            Previous
                          </button>
                        )}
                      </div>
                      <div className="col-md-6">
                        <button
                          className="btn btn-primary next"
                          type="button"
                          onClick={
                            activeStep === steps.length - 1
                              ? handleSignup
                              : handleNext
                          }
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;

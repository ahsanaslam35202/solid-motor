import React from "react";
import { isLoggedin, logout } from "../services/userService";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const PreQualified = () => {
  const forceUpdate = useForceUpdate();
  const handleLogout = async (e) => {
    await logout();
    forceUpdate();
  };
  return (
    <>
      {isLoggedin() ? <Navbar2 handleLogout={handleLogout} /> : <Navbar />}
      <div>
        <header>
          <div className="row mt-0">
            <div className="col-md-6 header-heading-container">
              <div className="container">
                <h1 className="page-title">
                  Lorem ipsum dolor sit amet, consectetur
                </h1>
                <p className="mt-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <a href="sellrequest">
                  <button className="btn btn-primary main-button" type="button">
                    <strong>Sell Or Trade Your Car</strong>
                  </button>
                </a>
              </div>
            </div>
            <div className="col-md-6 header-img mobile-mt-50">
              <span />
            </div>
          </div>
        </header>
        <div className="why-solid-container">
          <div className="container why-solid-img-container">
            <div className="row w-100 d-flex justify-content-center mt-0">
              <div
                className="col-md-6 why-responsive"
                style={{ paddingRight: "30px", paddingLeft: "30px" }}
              >
                <div className="why-solid-img1">
                  <img className="w-100" src="assets/img/why%201.png" />
                </div>
                <div className="row why-us-img12-container">
                  <div className="col-md-6">
                    <div className="why-us-img23">
                      <img className="w-100" src="assets/img/why%203.png" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-us-img23">
                      <img className="w-100" src="assets/img/why%202.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="why-us-right">
                  <h1 className="h1-white mobile-text-center mobile-mt-50">
                    WHY SOLID MOTORS
                  </h1>
                  <p className="why-us-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
                <div className="row mt-40">
                  <div className="col-md-4">
                    <div className="why-us-card">
                      <div className="d-flex justify-content-center">
                        <div className="d-flex justify-content-center align-content-center why-us-card-icon-container">
                          <img
                            className="why-us-card-icon"
                            src="assets/img/7%20Days.svg"
                          />
                        </div>
                      </div>
                      <h1 className="w-100 text-center why-us-card-heading">
                        <strong>Quick Service</strong>
                      </h1>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="why-us-card">
                      <div className="d-flex justify-content-center">
                        <div className="d-flex justify-content-center align-content-center why-us-card-icon-container">
                          <img
                            className="why-us-card-icon"
                            src="assets/img/customer-review.svg"
                          />
                        </div>
                      </div>
                      <h1 className="w-100 text-center why-us-card-heading">
                        <strong>Quick Service</strong>
                      </h1>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="why-us-card">
                      <div className="d-flex justify-content-center">
                        <div className="d-flex justify-content-center align-content-center why-us-card-icon-container">
                          <img
                            className="why-us-card-icon"
                            src="assets/img/money.svg"
                          />
                        </div>
                      </div>
                      <h1 className="w-100 text-center why-us-card-heading">
                        <strong>Quick Service</strong>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-200">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="w-100 text-center h1-black">
                  Frequently Asked Questions
                </h1>
                <div role="tablist" id="accordion-1" className="mt-100">
                  <div className="card shadow-none faq-item-container">
                    <div className="card-header faq-item-heading" role="tab">
                      <h5 className="mb-0">
                        <a
                          data-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="accordion-1 .item-1"
                          href="#accordion-1 .item-1"
                          className="faq-item-heading-button"
                        >
                          <strong>White meidiland on standard trunk</strong>
                        </a>
                      </h5>
                    </div>
                    <div
                      className="collapse show item-1"
                      role="tabpanel"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        <p className="card-text">
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                          Cras justo odio, dapibus ac facilisis in, egestas eget
                          quam. Donec id elit non mi porta gravida at eget
                          metus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card shadow-none faq-item-container">
                    <div className="card-header faq-item-heading" role="tab">
                      <h5 className="mb-0">
                        <a
                          data-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="accordion-1 .item-2"
                          href="#accordion-1 .item-2"
                          className="faq-item-heading-button"
                        >
                          <strong>White meidiland on standard trunk</strong>
                        </a>
                      </h5>
                    </div>
                    <div
                      className="collapse item-2"
                      role="tabpanel"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        <p className="card-text">
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                          Cras justo odio, dapibus ac facilisis in, egestas eget
                          quam. Donec id elit non mi porta gravida at eget
                          metus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card shadow-none faq-item-container">
                    <div className="card-header faq-item-heading" role="tab">
                      <h5 className="mb-0">
                        <a
                          data-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="accordion-1 .item-3"
                          href="#accordion-1 .item-3"
                          className="faq-item-heading-button"
                        >
                          <strong>White meidiland on standard trunk</strong>
                        </a>
                      </h5>
                    </div>
                    <div
                      className="collapse item-3"
                      role="tabpanel"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        <p className="card-text">
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                          Cras justo odio, dapibus ac facilisis in, egestas eget
                          quam. Donec id elit non mi porta gravida at eget
                          metus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card shadow-none faq-item-container">
                    <div className="card-header faq-item-heading" role="tab">
                      <h5 className="mb-0">
                        <a
                          data-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="accordion-1 .item-4"
                          href="#accordion-1 .item-4"
                          className="faq-item-heading-button"
                        >
                          <strong>White meidiland on standard trunk</strong>
                        </a>
                      </h5>
                    </div>
                    <div
                      className="collapse item-4"
                      role="tabpanel"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        <p className="card-text">
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                          Cras justo odio, dapibus ac facilisis in, egestas eget
                          quam. Donec id elit non mi porta gravida at eget
                          metus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-200">
          <div className="row mt-0">
            <div className="col-md-6 contact-info-container">
              <h1 className="w-100 text-center h1-white">
                CAN’T FIND THE ANSWER ?
              </h1>
              <p className="w-100 text-center white-color">
                Call Us or Send Us a Message
              </p>
              <div className="w-100 d-flex justify-content-center mt-120">
                <img
                  className="contact-info-icon"
                  src="assets/img/telephone.png"
                />
                <div className="contact-info-info-container">
                  <p className="contact-info-info">PHONE</p>
                  <p>61-0892719924</p>
                </div>
              </div>
              <div className="w-100 d-flex justify-content-center mt-30">
                <img
                  className="contact-info-icon"
                  src="assets/img/letter.png"
                />
                <div className="contact-info-info-container">
                  <p className="contact-info-info">PHONE</p>
                  <p>61-0892719924</p>
                </div>
              </div>
              <div className="w-100 d-flex justify-content-center mt-30">
                <img className="contact-info-icon" src="assets/img/time.png" />
                <div className="contact-info-info-container">
                  <p className="contact-info-info">PHONE</p>
                  <p>61-0892719924</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center mobile-mt-50">
              <form className="contact-form">
                <h2 className="text-center h1-black">Send Us a Message</h2>
                <div className="form-group mt-80">
                  <input
                    className="form-control contact-form-input"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control is-invalid contact-form-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <small className="form-text">
                    Please enter a correct email address.
                  </small>
                </div>
                <div className="form-group">
                  <input
                    className="form-control contact-form-input"
                    type="text"
                    placeholder="Phone No"
                    name="Phone"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control contact-info-text-area"
                    name="message"
                    placeholder="Message"
                    rows={14}
                    defaultValue={""}
                  />
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary main-button">SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PreQualified;

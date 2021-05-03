import React from "react";

const Footer = () => {
  return (
    <div>
      <div id="footer" className="mt-180">
        <div className="container">
          <div className="row">
            <div className="col-md-6 footer-about">
              <div>
                <img src="assets/img/Footer%20Logo.png" />
                <p className="footer-about-para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry&nbsp;has been the industry's standard
                  dummy text ever since the when an unknown galley.
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <h1 className="footer-link-heading">NAVIGATION</h1>
              <div className="mt-30">
                <a className="w-100 d-block" href="./">
                  Home
                </a>
                <a className="w-100 d-block" href="./search Cars">
                  Search Cars
                </a>
                <a className="w-100 d-block" href="./sell-trade car">
                  Sell Car
                </a>
                <a className="w-100 d-block" href="./sell-trade car">
                  Trade Car
                </a>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <h1 className="footer-link-heading">CONTACT US</h1>
              <div className="mt-30">
                <a className="w-100 d-block" href="./pre-qualified">
                  FAQs
                </a>
                <a className="w-100 d-block" href="./pre-qualified">
                  Contact us
                </a>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <h1 className="footer-link-heading">SOCIAL</h1>
              <div className="mt-30">
                <a className="w-100 d-block" href="#">
                  Facebook
                </a>
                <a className="w-100 d-block" href="#">
                  Instagram
                </a>
                <a className="w-100 d-block" href="#">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 w-50">
              <p>All rights reserved</p>
            </div>
            <div className="col-sm-6 col-md-6 d-flex w-50 justify-content-end">
              <p className="bottom-bar-link">Term and Conditions</p>
              <p className="bottom-bar-link">Privacy Policy</p>
            </div>
          </div>
          <div className="bottom-bar-divider" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

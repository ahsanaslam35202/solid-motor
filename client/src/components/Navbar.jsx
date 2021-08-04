import React from "react";
import { isLoggedin, logout } from "../services/userService";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md navigation-clean navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="logo" src="../assets/img/Logo.png" />
        </a>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/loan calculator">
                Loan Calculator
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search cars">
                Search Cars
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sell">
                Sell/Trade
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="articles">
                Articles
              </a>
            </li> */}
            <li className="nav-item dropdown">
              <a aria-expanded="false" data-toggle="dropdown" className="dropdown-toggle nav-link" href="/articles">Articles </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/Used-Cars-For-Sale-in-Garland-TX">Used cars for sale in Garland</a>
                <a className="dropdown-item" href="/Used-sedans-for-sale-near-me">Used sedans for sale near me</a>
                <a className="dropdown-item" href="/Used-lexus-suv-for-sale-near-me">Used lexus suv for sale near me</a>
                <a className="dropdown-item" href="/Cheap-used-pickup-trucks-for-sale-near-me">Cheap Used Pickup Trucks For Sale Near Me</a>
                <a className="dropdown-item" href="/used-coupe-for-sale-near-me">Used Coupe For Sale Near Me</a>
              </div>
            </li>
            {isLoggedin ? (
              <li className="nav-item">
                <a
                  className="nav-link main-color"
                  href="login"
                  style={{ fontWeight: 700, color: "#0cbdff" }}
                >
                  <i
                    className="fa fa-user main-color login-icon"
                    style={{ padding: "0px 5px 0px 5px" }}
                  />
                  Login
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a
                  className="nav-link main-color"
                  onClick={logout}
                  style={{
                    fontWeight: 700,
                    color: "#0cbdff",
                    cursor: "pointer",
                  }}
                >
                  <i
                    className="fa fa-user main-color login-icon"
                    style={{ padding: "0px 5px 0px 5px" }}
                  />
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

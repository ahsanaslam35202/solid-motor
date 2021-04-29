import React from "react";
import { logout } from "../services/userService";

const Navbar2 = (props) => {
  return (
    <nav className="navbar navbar-light navbar-expand-md navigation-clean navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src="assets/img/Logo.png" />
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
              <a className="nav-link active" href="#">
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
                Sell
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="trade">
                Trade
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link main-color"
                onClick={props.handleLogout}
                style={{ fontWeight: 700, color: "#0cbdff", cursor: "pointer" }}
              >
                <i
                  className="fa fa-user main-color login-icon"
                  style={{ padding: "0px 5px 0px 5px" }}
                />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;

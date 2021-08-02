import React from "react";
import { logout } from "../services/userService";
import { getloggedinuser, isLoggedin } from "../services/userService";

const Navbar2 = (props) => {
  const user = getloggedinuser();
  const user_name = user.name;

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
                Sell
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="trade">
                Trade
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                aria-expanded="false"
                data-toggle="dropdown"
                className="dropdown-toggle nav-link"
                href="#"
                style={{ color: "#0cbdff" }}
              >
                <i
                  className="fa fa-user main-color login-icon"
                  style={{ padding: "0px 5px 0px 5px", color: "#0cbdff" }}
                />
                {user_name}
              </a>
              <div className="dropdown-menu nav2-dropdown">
                <a
                  className="nav-link main-color"
                  href="/saved cars"
                  style={{
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Saved cars
                </a>
                <a
                  className="nav-link main-color"
                  onClick={props.handleLogout}
                  style={{
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Logout
                </a>
              </div>
            </li>
            {/* <li className="nav-item">
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
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;

import React from "react";

const navbar = () => {
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
              <a className="nav-link" href="/account">
                Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;

import React from "react";
import { Link } from "react-router-dom";

const carCard = (props) => {
  return (
    <div className="col-md-3 car-card-container">
      <Link
        to={{ pathname: "/carDetails", state: { car: props.car } }}
        style={{ textDecoration: "none" }}
      >
        <div className="shadow-sm car-card">
          <div className="car-card-img-container">
            <img className="w-100" src="assets/img/car%20guide.png" />
          </div>
          <div className="car-card-info-container">
            <div className="d-flex car-card-info-header">
              <div className="car-card-title">
                <h1 className="car-card-title-heading">
                  <strong>
                    {props.make} {props.name}
                  </strong>
                  <br />
                </h1>
                <p className="car-card-sub-title">{props.model}</p>
              </div>
              <div className="d-flex justify-content-end car-card-price-div">
                <h1 className="car-price">${props.price}</h1>
              </div>
            </div>
            <div className="d-flex car-card-sub-header">
              <div className="car-card-sub-info-div">
                <p className="car-card-sub-info">{props.milesDriven} Miles</p>
              </div>
              <div className="d-flex justify-content-end car-card-sub-info-div">
                <p className="car-card-sub-info">Free Shipping</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default carCard;

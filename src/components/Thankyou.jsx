import React from "react";

const Thankyou = () => {
  return (
    <div>
      <div className="thankyou-container">
        <div className="w-100 d-flex justify-content-center">
          <i className="fa fa-check-circle thankyou-icon" />
          <h1 className="text-success">SUCEESS</h1>
        </div>
        <h1 className="w-100 text-center thankyou-heading">
          We have received your Request
        </h1>
        <h1 className="text-center thankyou-subheading">
          Solid Motor will contact you soon on your number
        </h1>
      </div>
      <div className="w-100 d-flex justify-content-center mt-100">
        <a href="./">
          <button className="btn btn-primary main-button" type="button">
            Back to Home
          </button>
        </a>
      </div>
    </div>
  );
};

export default Thankyou;

import React from "react";
import { isLoggedin, logout } from "../services/userService";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const Thankyou = () => {
  const forceUpdate = useForceUpdate();
  const handleLogout = async (e) => {
    await logout();
    forceUpdate();
  };
  return (
    <>
      {isLoggedin() ? <Navbar2 handleLogout={handleLogout} /> : <Navbar />}
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
      <Footer />
    </>
  );
};

export default Thankyou;

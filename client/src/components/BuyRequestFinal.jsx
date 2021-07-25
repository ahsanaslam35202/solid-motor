import React from "react";
import { Redirect } from "react-router";
import { isLoggedin, logout } from "../services/userService";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import CallBar from "./CallBar";
import Iframe from "react-iframe";

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const BuyRequestFinal = (props) => {
  const forceUpdate = useForceUpdate();
  const handleLogout = async (e) => {
    await logout();
    forceUpdate();
  };

  return (
    <>
      <CallBar />
      {isLoggedin() ? <Navbar2 handleLogout={handleLogout} /> : <Navbar />}
      <div>
        <header>
          <div className="row mt-0">
            <div className="col-md-12 header-heading-container">
              <div className="container">
                <h1 className="page-title">
                  Fill out the Form and Get Started!
                </h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Iframe
            url="https://dwssecuredforms.dealercenter.net/CreditApplication/index/14634185?themecolor=4ecaff&formtype=l&frameId=dws_frame_0&standalone=true&ls=Our"
            width="100%"
            id="myId"
            className="border-0 iframe-height"
            display="initial"
            position="relative"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BuyRequestFinal;

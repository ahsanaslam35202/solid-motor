import { Slider, Typography } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { getCars } from "../services/carsService";
import { getLikeCars } from "../services/userService";
import { getloggedinuser, isLoggedin, logout } from "../services/userService";
import CarCard from "./CarCard";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import CallBar from "./CallBar";

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const SavedCars = (props) => {
  const forceUpdate = useForceUpdate();
  const handleLogout = async (e) => {
    await logout();
    forceUpdate();
  };
  const user = getloggedinuser();

  const getCarsData = async () => {
    var { data } = await getLikeCars(user._id);
    const cars = [...data];

    setCars(cars);
    var { data } = await axios.get(
      "http://solidmotors.com/api/cars/images/a"
    );
    console.log(data);
    setDisplayImage(data);
  };

  React.useEffect(() => {
    getCarsData();
  }, []);

  const [cars, setCars] = React.useState([]);
  const [displayImage, setDisplayImage] = React.useState([]);

  return (
    <>
      <CallBar />
      {isLoggedin() ? <Navbar2 handleLogout={handleLogout} /> : <Navbar />}
      <div>
        {/*    END Filter */}
        <div className="cars-row-container mobile-mt50">
          <div id="car-row" className="row mt-0">
            {cars.map((item, index) => (
              <CarCard
                key={index}
                id={item._id}
                car={item}
                make={item.make}
                name={item.name}
                displayImage={displayImage}
                model={item.model}
                price={item.price}
                monthlyPayment={item.monthlyPayment}
                milesDriven={item.milesDriven}
                onClick={() => {
                  console.log("a");
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SavedCars;

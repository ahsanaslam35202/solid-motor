import React from "react";
import { getCars } from "../services/carsService";
import CarCard from "./CarCard";

const CarSearch = () => {
  const [cars, setCars] = React.useState([]);

  const getCarsData = async () => {
    const { data } = await getCars();
    const cars = [...data];
    setCars(cars);
  };

  React.useEffect(() => {
    getCarsData();
  }, []);

  return (
    <div>
      <div className="car-searchbar-container">
        <input
          className="car-searchbar"
          type="search"
          placeholder="Search Cars"
        />
      </div>
      <div className="cars-row-container">
        <div id="car-row" className="row mt-0">
          {cars.map((item, index) => (
            <CarCard
              make={item.make}
              name={item.name}
              model={item.model}
              price={item.price}
              milesDriven={item.milesDriven}
              onClick={() => {
                console.log("a");
              }}
            />
          ))}
          {/* <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard /> */}
        </div>
        <div className="w-100 d-flex justify-content-center mt-100">
          <button className="btn btn-primary main-button" type="button">
            LOAD MORE
          </button>
        </div>
      </div>
      <div className="mt-200">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="w-100 text-center car-guide-heading">
                SOLID MOTORS CAR GUIDE
              </h1>
              <p className="text-center car-guide-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-200">
        <div className="row mt-0">
          <div className="col-md-6 bg-main">
            <p className="car-guide-subsection-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.&nbsp;
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.&nbsp;
            </p>
          </div>
          <div className="col-md-6 car-guide-img">
            <span />
          </div>
        </div>
      </div>
      <div className="mt-200">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="shadow d-flex features-odd-container">
                <div className="d-flex justify-content-center align-items-center features-img-container">
                  <img
                    className="features-img"
                    src="assets/img/reliability.svg"
                  />
                </div>
                <div className="features-info-container">
                  <h1 className="features-heading">RELIABILITY</h1>
                  <p className="features-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
              <div className="shadow d-flex features-even-container">
                <div className="d-flex justify-content-center align-items-center features-img-container">
                  <img className="features-img" src="assets/img/money.svg" />
                </div>
                <div className="features-info-container">
                  <h1 className="features-heading">RELIABILITY</h1>
                  <p className="features-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
              <div className="shadow d-flex features-odd-container">
                <div className="d-flex justify-content-center align-items-center features-img-container">
                  <img
                    className="features-img"
                    src="assets/img/reliability.svg"
                  />
                </div>
                <div className="features-info-container">
                  <h1 className="features-heading">RELIABILITY</h1>
                  <p className="features-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
              <div className="shadow d-flex features-even-container">
                <div className="d-flex justify-content-center align-items-center features-img-container">
                  <img className="features-img" src="assets/img/fuel.svg" />
                </div>
                <div className="features-info-container">
                  <h1 className="features-heading">RELIABILITY</h1>
                  <p className="features-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSearch;

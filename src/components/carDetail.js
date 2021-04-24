import CarCard from "./CarCard";

const carDetail = () => {
  return (
    <div>
      <div className="car-header-container">
        <img className="w-100" src="assets/img/car.png" />
        <div className="car-header-info-container">
          <h1 className="car-name">2019 Honda Camry</h1>
          <h1 className="miles-driven">400 Miles</h1>
        </div>
        <div style={{ position: "absolute", top: "20px", right: "20px" }}>
          <h1 className="car-name">
            <strong>$31,000</strong>
          </h1>
        </div>
      </div>
      <div className="container mt-200">
        <h1 className="w-100 text-center details-heading">Vehicle Details</h1>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center mt-50">
            <div className="shadow details-tab-container">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item w-50" role="presentation">
                  <a
                    className="nav-link active w-100 text-center tab-link"
                    role="tab"
                    data-toggle="tab"
                    href="#tab-1"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item w-50" role="presentation">
                  <a
                    className="nav-link w-100 text-center tab-link"
                    role="tab"
                    data-toggle="tab"
                    href="#tab-2"
                  >
                    How much can I afford
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" role="tabpanel" id="tab-1">
                  <div className="tab-details-container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="details-card">
                          <h1 className="details-card-heading">
                            Heading&nbsp;
                          </h1>
                          <p className="details-card-para">Paragraph</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="details-card">
                          <h1 className="details-card-heading">
                            Heading&nbsp;
                          </h1>
                          <p className="details-card-para">Paragraph</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="details-card">
                          <h1 className="details-card-heading">
                            Heading&nbsp;
                          </h1>
                          <p className="details-card-para">Paragraph</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="details-card">
                          <h1 className="details-card-heading">
                            Heading&nbsp;
                          </h1>
                          <p className="details-card-para">Paragraph</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="details-card">
                          <h1 className="details-card-heading">
                            Heading&nbsp;
                          </h1>
                          <p className="details-card-para">Paragraph</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="details-card">
                          <h1 className="details-card-heading">
                            Heading&nbsp;
                          </h1>
                          <p className="details-card-para">Paragraph</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="details-card">
                          <h1 className="details-card-heading">
                            Heading&nbsp;
                          </h1>
                          <p className="details-card-para">Paragraph</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="details-card">
                          <h1 className="details-card-heading">
                            Heading&nbsp;
                          </h1>
                          <p className="details-card-para">Paragraph</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" role="tabpanel" id="tab-2">
                  <div className="tab-details-container">
                    <h1 className="h3-black w-100 text-center">Warranty</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Corporis, assumenda ducimus! Repudiandae dignissimos
                      repellat perferendis rem eaque repellendus! Debitis esse
                      veritatis eaque deleniti quo culpa asperiores consequatur
                      officia ea a!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-200 bg-main">
        <div className="container">
          <h1 className="w-100 text-center equipment-heading">
            STANDARD EQUIPMENT
          </h1>
          <div
            className="row"
            id="expand-area"
            style={{ height: "100px", overflow: "hidden" }}
          >
            <div className="col-md-4 d-flex justify-content-center">
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-50">
            <button className="btn btn-primary main-button" type="button">
              LOAD MORE
            </button>
          </div>
        </div>
      </div>
      <div className="mt-200">
        <div className="car-finance-summary-container">
          <div className="car-finance-container">
            <div>
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item w-50" role="presentation">
                  <a
                    className="nav-link active w-100 text-center tabs-link"
                    role="tab"
                    data-toggle="tab"
                    href="#tab-3"
                  >
                    Estimate Finance
                  </a>
                </li>
                <li className="nav-item w-50" role="presentation">
                  <a
                    className="nav-link w-100 text-center tabs-link"
                    role="tab"
                    data-toggle="tab"
                    href="#tab-4"
                  >
                    Pay Cash
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" role="tabpanel" id="tab-3">
                  <div className="tab-info-container">
                    <div className="row" id="finance-select">
                      <div className="col-md-4 mt-15">
                        {/* <label>Choose your loan tearm</label> */}
                        <select>
                          <optgroup label="Choose loan term">
                            <option value={12} selected>
                              72 Months
                            </option>
                            <option value={13}>60 Months</option>
                            <option value={14}>48 Months</option>
                            <option value={15}>38 Months</option>
                          </optgroup>
                        </select>
                      </div>
                      <div className="col-md-4 mt-15">
                        {/* <label>What’s Your credit score ?</label> */}
                        <select>
                          <optgroup label="Credit Score">
                            <option value={12} selected>
                              Excellent: 780
                            </option>
                            <option value={13}>Good: 680</option>
                            <option value={14}>Average: 680</option>
                            <option value={15}>Below Average: 588</option>
                          </optgroup>
                        </select>
                      </div>
                      <div className="col-md-4 mt-15">
                        {/* <label>Annual Income?</label> */}
                        <select>
                          <optgroup label="Your Annual Income">
                            <option value={12} selected>
                              $30,000+
                            </option>
                            <option value={13}>$40,000+</option>
                            <option value={14}>$50,000+</option>
                            <option value={15}>$60,000+</option>
                            <option value={16}>$80,000+</option>
                            <option value={17}>$120,000+</option>
                            <option value={18}>$150,000+</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                    <div className="mt-50">
                      <div className="row">
                        <div className="col-md-6">
                          <h1 className="range-heading">Monthly Payment</h1>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                          <input type="number" className="range-number-input" />
                        </div>
                      </div>
                      <input
                        className="border rounded range-input"
                        type="range"
                      />
                    </div>
                    <div className="mt-50">
                      <div className="row">
                        <div className="col-md-6">
                          <h1 className="range-heading">Cash Down</h1>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                          <input type="number" className="range-number-input" />
                        </div>
                      </div>
                      <input
                        className="border rounded range-input"
                        type="range"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="apply-card mt-30">
                          <h1 className="apply-card-heading">
                            Apply TradeIn Value
                          </h1>
                          <p className="apply-card-para">
                            Answer a few questions about your car and get an
                            instant value. This only takes 2 minutes.
                          </p>
                          <button
                            className="btn btn-primary apply-card-button"
                            type="button"
                          >
                            Apply Tradein
                          </button>
                        </div>
                      </div>
                      <div className="col">
                        <div className="apply-card mt-30">
                          <h1 className="apply-card-heading">
                            <strong>Carvana Offering Finance</strong>
                          </h1>
                          <p className="apply-card-para">
                            Get pre-qualified for a loan in 2 minutes.
                            <br />
                            No hit to your credit score!
                          </p>
                          <button
                            className="btn btn-primary apply-card-button"
                            type="button"
                          >
                            <strong>Get PreQualified</strong>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane active" role="tabpanel" id="tab-4">
                  <div className="tab-info-container">
                    <div className="h3-black w-100 text-center">
                      {" "}
                      Total Amount in Cash : $54,000
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="apply-card mt-30">
                          <h1 className="apply-card-heading">
                            Apply TradeIn Value
                          </h1>
                          <p className="apply-card-para">
                            Answer a few questions about your car and get an
                            instant value. This only takes 2 minutes.
                          </p>
                          <button
                            className="btn btn-primary apply-card-button"
                            type="button"
                          >
                            Apply Tradein
                          </button>
                        </div>
                      </div>
                      <div className="col">
                        <div className="apply-card mt-30">
                          <h1 className="apply-card-heading">
                            <strong>Carvana Offering Finance</strong>
                          </h1>
                          <p className="apply-card-para">
                            Get pre-qualified for a loan in 2 minutes.
                            <br />
                            No hit to your credit score!
                          </p>
                          <button
                            className="btn btn-primary apply-card-button"
                            type="button"
                          >
                            <strong>Get PreQualified</strong>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="summary-conatiner">
            <div className="summary-card">
              <div className="d-flex justify-content-center summary-header">
                <div className="w-50">
                  <h1 className="summary-header-heading">$321</h1>
                  <h1 className="summary-header-sub-heading">
                    Estimated Monthly Payment
                  </h1>
                </div>
                <div className="d-flex justify-content-end w-50">
                  <div>
                    <h1 className="summary-header-heading">$32,000</h1>
                    <h1 className="summary-header-sub-heading">Cash Down</h1>
                  </div>
                </div>
              </div>
              <div className="d-flex summary-card-price-detail">
                <div className="w-60">
                  <p>VEHICLE PRICE</p>
                </div>
                <div className="d-flex justify-content-end w-40">
                  <p>$35,000</p>
                </div>
              </div>
              <div className="d-flex summary-card-price-detail">
                <div className="w-60">
                  <p>VEHICLE PRICE</p>
                </div>
                <div className="d-flex justify-content-end w-40">
                  <p>$35,000</p>
                </div>
              </div>
              <div className="d-flex summary-card-price-detail">
                <div className="w-60">
                  <p>VEHICLE PRICE</p>
                </div>
                <div className="d-flex justify-content-end w-40">
                  <p>$35,000</p>
                </div>
              </div>
              <div className="d-flex summary-card-price-detail">
                <div className="w-60">
                  <p>VEHICLE PRICE</p>
                </div>
                <div className="d-flex justify-content-end w-40">
                  <p>$35,000</p>
                </div>
              </div>
              <div className="d-flex summary-card-price-detail">
                <div className="w-60">
                  <p>VEHICLE PRICE</p>
                </div>
                <div className="d-flex justify-content-end w-40">
                  <p>$35,000</p>
                </div>
              </div>
              <div className="d-flex summary-car-price">
                <div className="w-60">
                  <p>VEHICLE PRICE</p>
                </div>
                <div className="d-flex justify-content-end w-40">
                  <p>$35,000</p>
                </div>
              </div>
              <div className="d-flex summary-card-price-detail">
                <div className="w-60">
                  <p>VEHICLE PRICE</p>
                </div>
                <div className="d-flex justify-content-end w-40">
                  <p>$35,000</p>
                </div>
              </div>
              <div className="d-flex summary-card-price-detail">
                <div className="w-60">
                  <p>VEHICLE PRICE</p>
                </div>
                <div className="d-flex justify-content-end w-40">
                  <p>$35,000</p>
                </div>
              </div>
              <button className="btn btn-primary summary-button" type="button">
                GET STARTED
              </button>
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
      <div className="cars-row-container">
        <h1 className="h1-black w-100 text-center  mt-200">Related Cars</h1>
        <div id="car-row" className="row mt-100">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
    </div>
  );
};

export default carDetail;

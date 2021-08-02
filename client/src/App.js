import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PreQualified from "./components/PreQualified";
import CarSearch from "./components/CarSearch";
import Signup from "./components/Signup";
import CarDetail from "./components/CarDetail";
import Login from "./components/Login";
import Thankyou from "./components/Thankyou";
import LoanCalculator from "./components/LoanCalculator";
import { isLoggedin } from "./services/userService";
import Navbar2 from "./components/Navbar2";
import Dashboard from "./components/Admin/Dashboard";
import SellRequest from "./components/SellRequest";
import AddCar from "./components/Admin/AddCar";
import ViewCars from "./components/Admin/ViewCars";
import TradeSellAdmin from "./components/Admin/TradeSellAdmin";
import SellTradeDetails from "./components/Admin/SellTradeDetails";
import BuyCarDetails from "./components/Admin/BuyCarDetails";
import BuyCarView from "./components/Admin/BuyCarView";
import AdminLogin from "./components/Admin/AdminLogin";
import SellTradeSuccess from "./components/SellTradeSuccess";
import SavedCars from "./components/SavedCars";
import CSVFile from "./components/CSVFile";
import BuyRequestFinal from "./components/BuyRequestFinal";
import Articles from "./components/Articles";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Article3 from "./components/Article3";
import Article4 from "./components/Article4";
import Article5 from "./components/Article5";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/loan calculator" component={LoanCalculator}></Route>
        <Route exact path="/sell" component={PreQualified}></Route>
        <Route exact path="/pre-qualified" component={PreQualified}></Route>
        <Route exact path="/trade" component={PreQualified}></Route>
        <Route exact path="/search cars" component={CarSearch}></Route>
        <Route exact path="/account" component={Signup}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/carDetails/:id" component={CarDetail}></Route>
        <Route exact path="/thankyou" component={Thankyou}></Route>
        <Route exact path="/car" component={CarDetail}></Route>
        <Route exact path="/adminDashboard" component={Dashboard}></Route>
        <Route exact path="/sellrequest" component={SellRequest}></Route>
        <Route exact path="/buy-requests" component={BuyCarView}></Route>
        <Route exact path="/addCar" component={AddCar}></Route>
        <Route exact path="/viewCars" component={ViewCars}></Route>
        <Route exact path="/csv file" component={CSVFile}></Route>
        <Route exact path="/articles" component={Articles}></Route>
        <Route exact path="/Used Cars For Sale in Garland,TX" component={Article1}></Route>
        <Route exact path="/Used sedans for sale near me" component={Article2}></Route>
        <Route exact path="/Used lexus suv for sale near me" component={Article3}></Route>
        <Route exact path="/Cheap used pickup trucks for sale near me" component={Article4}></Route>
        <Route exact path="/used coupe for sale near me" component={Article5}></Route>
        <Route
          exact
          path="/request-final-form"
          component={BuyRequestFinal}
        ></Route>
        <Route exact path="/TradeSellAdmin" component={TradeSellAdmin}></Route>
        <Route exact path="/buy car details" component={BuyCarDetails}></Route>
        <Route exact path="/buy car requests" component={BuyCarView}></Route>
        <Route exact path="/adminlogin" component={AdminLogin}></Route>
        <Route
          exact
          path="/sell trade success"
          component={SellTradeSuccess}
        ></Route>
        <Route exact path="/saved cars" component={SavedCars}></Route>
        <Route
          exact
          path="/sellTradeDetails"
          component={SellTradeDetails}
        ></Route>
      </div>
    </Router>
  );
}

export default App;

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
        <Route exact path="/carDetails" component={CarDetail}></Route>
        <Route exact path="/thankyou" component={Thankyou}></Route>
        <Route exact path="/car" component={CarDetail}></Route>
        <Route exact path="/adminDashboard" component={Dashboard}></Route>
        <Route exact path="/sellrequest" component={SellRequest}></Route>
        <Route exact path="/addCar" component={AddCar}></Route>
        <Route exact path="/viewCars" component={ViewCars}></Route>
        <Route exact path="/TradeSellAdmin" component={TradeSellAdmin}></Route>
        <Route exact path="/buy car details" component={BuyCarDetails}></Route>
        <Route exact path="/buy car requests" component={BuyCarView}></Route>
        <Route exact path="/adminlogin" component={AdminLogin}></Route>
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

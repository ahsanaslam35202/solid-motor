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

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/loan calculator" component={LoanCalculator}></Route>
        <Route exact path="/sell" component={PreQualified}></Route>
        <Route exact path="/trade" component={PreQualified}></Route>
        <Route exact path="/search cars" component={CarSearch}></Route>
        <Route exact path="/account" component={Signup}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/carDetails" component={CarDetail}></Route>
        <Route exact path="/thankyou" component={Thankyou}></Route>
        <Switch>
          {/* <Route path="/sell" component={PreQualified} /> */}
          {/* <Route path="/" component={Home} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

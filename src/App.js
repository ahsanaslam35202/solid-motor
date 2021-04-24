import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import PreQualified from "./components/preQualified";
import CarSearch from "./components/CarSearch";
import Signup from "./components/Signup";
import LoanCalculator from "./components/LoanCalculator";
import CarDetail from "./components/carDetail";

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
        <Route exact path="/car" component={CarDetail}></Route>
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

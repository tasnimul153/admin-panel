import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";
import Dashboard from "./Components/Dashboard";

function App() {

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;

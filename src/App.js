import "./App.css";
import React, { Component } from "react";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;

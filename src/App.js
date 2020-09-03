import React from "react";
import Canine from "./Canine";
import Dog from "./Dog";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Function Doggo</h1>
      <Dog />
      <h1>Class Doggo</h1>
      <Canine />
    </div>
  );
}

export default App;

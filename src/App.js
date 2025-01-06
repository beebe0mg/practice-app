import React from "react";
import NavBar from "./components/NavBar/NavBar";
import MainImage from "./components/MainImage/MainImage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="borderbottom"></div>
      <MainImage />
    </div>
  );
}

export default App;

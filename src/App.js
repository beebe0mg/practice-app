import React from "react";
import NavBar from "./components/NavBar/NavBar";
import MainImage from "./components/MainImage/MainImage";
import BorderBottom from "./components/BorderBottom/BorderBottom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Bigborderbottom"></div>
      <MainImage />
      <BorderBottom />
    </div>
  );
}

export default App;

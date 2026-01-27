//import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//import ShowBands from "./components/ShowBands";
import Home from "./pages/Home";
import BandDetails from "./pages/BandDetails";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/band" element={<BandDetails/>}></Route>
    </Routes>
  );
}

export default App;

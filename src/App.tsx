//import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//import ShowBands from "./components/ShowBands";
import Home from "./pages/Home";
import BandDetails from "./pages/BandDetails";
import Layout from "./components/Layout";
import GuessTheRiff from "./pages/GuessTheRiff";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="band/:name" element={<BandDetails />}></Route>
        <Route path="guess-the-riff" element={<GuessTheRiff/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;

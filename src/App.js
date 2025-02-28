import React from "react";
import { Route, Routes } from "react-router-dom";
import Daygrid from "./components/Daygrid";
import Daygridwithcss from "./components/Daygridwithcss";
import Draganddrop from "./components/Draganddrop";
import Fullyear from "./components/Fullyear";
import Navbar from "./components/Navbar";

import "./styles.css";
import Index from "./components/Index";

export default function App() {
  return (
    <div className="App ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Daygrid" element={<Daygrid />} />
        <Route path="/Daygrid" element={<Daygrid />} />
        <Route path="/Draganddrop" element={<Draganddrop />} />
        <Route path="/Fullyear" element={<Fullyear />} />
        <Route path="/Daygridwithcss" element={<Daygridwithcss />} />
      </Routes>
    </div>
  );
}

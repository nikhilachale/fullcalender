import React from "react";
import { Route, Routes } from "react-router-dom";
import Daygrid from "./components/Daygrid";

import Daygridwithcss from "./components/Daygridwithcss";
import Draganddrop from "./components/Draganddrop";
import Fullyear from "./components/Fullyear";
import Navbar from "./components/Navbar";



import Index from "./components/Index";
import SelectableCalendar from "./components/SelectableCalendar";
import ThemedCalendar from "./components/ThemedCalendar";

export default function App() {
  return (
    <div className=" ">
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/daygrid" element={<Daygrid />} />
        <Route path="/draganddrop" element={<Draganddrop />} />
        <Route path="/fullyear" element={<Fullyear />} />
        <Route path="/daygridwithcss" element={<Daygridwithcss />} />
        <Route path="/dateclick" element={<SelectableCalendar/>} />
        <Route path="/theme" element={<ThemedCalendar/>} />

      </Routes>
    </div>
  );
}

import Daygrid from "./components/Daygrid";
import Daygridwithcss from "./components/Daygridwithcss";
import Draganddrop from "./components/Draganddrop";
import Fullyear from "./components/Fullyear";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      working
      <BrowserRouter>
        <Routes>
          <Route path="/Daygrid" element={<Daygrid />} />

          <Route path="/Draganddro" element={<Draganddrop />} />
          <Route path="/Fullyear" element={<Fullyear />} />
          <Route path="/Daygridwithcss" element={<Daygridwithcss />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

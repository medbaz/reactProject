import Homme from "./Homme";
import Navbar from "./context/Navbar";
import Team from "./components/Team";
import Contacts from "./components/Contacts";
import Invoices from "./components/Invoices";
import Profile from "./components/Profile";
import Calendar from "./components/Calendar";
import Faq from "./components/Faq";
import Bar from "./components/Bar";
import Pie from "./components/Pie";
import Line from "./components/Line";
import Geography from "./components/Geography";
import React from "react";
 import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="containe  ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homme />} />
            <Route path="Team" element={<Team />} />
            <Route path="Contacts" element={<Contacts />} />
            <Route path="Invoices" element={<Invoices />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Calendar" element={<Calendar />} />
            <Route path="Faq" element={<Faq />} />
            <Route path="Bar" element={<Bar />} />
            <Route path="Pie" element={<Pie />} />
            <Route path="Line" element={<Line />} />
            <Route path="Geography" element={<Geography />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

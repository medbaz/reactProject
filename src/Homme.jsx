import React from 'react'
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
function Homme() {
  return (
    <div className='homme '>
      <Team />
      <Contacts />
      <Invoices />
      <Profile />
      <Calendar />
      <Faq />
      <Bar />
      <Pie />
      <Line />
      <Geography />
    </div>
  );
}

export default Homme
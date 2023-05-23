import React from "react";
import "../index.css";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import profil from "../assets/profile.png";
import contact from "../assets/contacts.png";
import pie from "../assets/pie.png";
import bar from "../assets/bar.png";
import calendar from "../assets/calendar.png";
import line from "../assets/line.png";
import invoice from "../assets/invoices.png";
import faq from "../assets/fqa.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo"></div>
        <ul>
          <li>
            <Link to="/Invoices">
              <img src={invoice} alt=""   />
            </Link>
          </li>

          <li>
            <Link to="/Profile">
              <img src={profil} alt=""   />
            </Link>
          </li>
          <li>
            <Link to="/Contacts">
              <img src={contact} alt=""   />
            </Link>
          </li>
          <li>
            <Link to="/Calendar">
              <img src={calendar} alt=""   />
            </Link>
          </li>
          <li>
            <Link to="/FAQ">
              <img src={faq} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/Bar">
              <img src={bar} alt=""  />
            </Link>
          </li>
          <li>
            <Link to="/Pie">
              <img src={pie} alt=""  />
            </Link>
          </li>
          <li>
            <Link to="/Line">
              <img src={line} alt=""  />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="outlet">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;

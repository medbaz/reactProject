import React from "react";
import "../index.css";
import profilImg from "../assets/profil.jpg";
function Header() {
  const Search = () => {};
  return (
    <header>
      <form>
        <input type="text" name="text" placeholder="Search..." />
        <button
          onClick={() => {
            Search();
          }}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div className="profile">
        <button>
          <i class="fa-regular fa-bell "></i>
        </button>
        <div className="profilImag"></div>
        <div className="profileParameters">
          <p className="profileName">Moham.</p>
          <button>
            <i class="fas fa-angle-down"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

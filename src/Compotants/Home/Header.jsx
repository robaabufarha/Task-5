import React from "react";

import { IoMoonSharp } from "react-icons/io5";
function Header() {
  return (
    <div>
      <nav className="navbar align-items-center sticky-top">
        <div className="container-fluid">
          <h1 className="m-0">Where in the world?</h1>

          <button className="dark-mode-button" id="dark-theme">
            <IoMoonSharp
              style={{ marginRight: "6px", marginBottom: "4.5px" }}
            />

            <p>Dark Mode</p>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;

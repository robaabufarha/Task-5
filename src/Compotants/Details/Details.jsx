import React from "react";
import "./DetailsStyle.css";
import de from "../../assets/images/de.svg";
import Header from "../Home/Header";
import BackButton from "./BackButton";
import CountryDetails from "./CountryDetails";

import CountryBorders from "./CountryBorders";
function Details() {
  return (
    <div>
      <Header />
      <BackButton />
      <div className="main-container py-5">
        <div>
          <img src={de} alt="Germany flag" />
        </div>

        <div>
          <h2 className="header-country">Belgium</h2>
          <CountryDetails />
          <CountryBorders />
        </div>
      </div>
    </div>
  );
}

export default Details;

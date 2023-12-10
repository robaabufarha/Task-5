import React from "react";
import "./Home.css";
import { CountryInfo } from "./CountryInfo";
import Search from "./Search";
import CustomDropdown from "./CustomDropdown";
import FavouritReagion from "./FavouritReagion";
import Card from "./Card";
import Header from "./Header";

import "bootstrap/dist/css/bootstrap.css";
function Home() {
  return (
    <div>
      <Header />
      <section className="search-container d-flex justify-content-between py-5">
        <Search />
        <CustomDropdown />
      </section>
      <div className="grid-container">
        <div className="vertical-menu-container">
          <FavouritReagion />
        </div>
        <div className="country-info-container">
          <div className="container-fluid text-center">
            <div
              className="row row-cols-xxl-3 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 gx-5 gy-5"
              id="country-info"
            >
              {CountryInfo.map((CountryInfo) => (
                <Card
                  key={CountryInfo.id}
                  src={CountryInfo.src}
                  alt={CountryInfo.alt}
                  name={CountryInfo.name}
                  Population={CountryInfo.Pobulation}
                  Region={CountryInfo.Reagion}
                  Capital={CountryInfo.Capital}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

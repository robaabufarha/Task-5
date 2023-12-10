import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-wrapper">
      <div className="search-icon">
        <FaSearch />
      </div>
      <input
        type="search"
        id="search-input"
        placeholder="Search for a country ..."
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;

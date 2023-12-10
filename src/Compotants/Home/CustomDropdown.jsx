// Dropdown.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import { Dropdown } from "react-bootstrap";

const CustomDropdown = () => {
  const [selectedValue, setSelectedValue] = useState("noValue");

  const handleSelect = (eventKey) => {
    setSelectedValue(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedValue === "noValue" ? "Filter by" : selectedValue}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="noValue">Filter by </Dropdown.Item>
        <Dropdown.Item eventKey="Africa">Africa</Dropdown.Item>
        <Dropdown.Item eventKey="Americas">America</Dropdown.Item>
        <Dropdown.Item eventKey="Asia">Asia</Dropdown.Item>
        <Dropdown.Item eventKey="Europe">Europe</Dropdown.Item>
        <Dropdown.Item eventKey="Oceania">Oceania</Dropdown.Item>
        <Dropdown.Item eventKey="favourites">Favourites</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;

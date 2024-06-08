import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const NavButton = ({ icon, label, selected = false, url = "" }) => {
  const hanldleClick = () => {
    console.log("object");
  };
  return (
    <div
      className={`nav-button ${selected ? "selected" : ""}`}
      onClick={hanldleClick}
    >
      {icon}
      <span className="label">{label}</span>
    </div>
  );
};

NavButton.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  url: PropTypes.string,
};

export default NavButton;

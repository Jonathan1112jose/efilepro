import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const NavButton = ({
  icon: IconComponent,
  label,
  selected = false,
  url = "",
}) => {
  const handleClick = () => {
    selected = true;
    console.log("Button clicked:", label);
  };

  return (
    <div
      className={`nav-button ${selected ? "selected" : ""}`}
      onClick={handleClick}
    >
      {IconComponent && <IconComponent />}
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

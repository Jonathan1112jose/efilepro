import React from "react";
import PropTypes from "prop-types";
import "./style.css";
const NavButton = ({ icon, label, selected }) => {
  return (
    <div className={`nav-button ${selected ? "selected" : ""}`}>
      {icon}
      <span className="label">{label}</span>
    </div>
  );
};

NavButton.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

NavButton.defaultProps = {
  selected: false,
};

export default NavButton;

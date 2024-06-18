import React from "react";
import PropTypes from "prop-types";
import "./css/style.css";
import { useAuth } from "../auth/AuthProvider";
import { useBitacora } from "../auth/BitacoraProvider";
import { useNavigate } from "react-router-dom";

const NavButton = ({
  icon: IconComponent,
  label,
  selected = false,
  url = "",
}) => {
  const { user } = useAuth();
  const { logActivity } = useBitacora();
  const navigate = useNavigate();

  const handleClick = () => {
    selected = true;
    logActivity({
      userName: user.username,
      date: new Date().toLocaleString(),
      path: url,
      action: "Button clicked",
      description: `Button with label ${label} clicked`,
    });
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
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  url: PropTypes.string,
};

export default NavButton;

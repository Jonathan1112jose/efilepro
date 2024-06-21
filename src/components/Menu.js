import React from "react";
import NavButton from "./NavButton";
import icons from "../icons";
import "./css/style.css";
import { useMenuDataContext } from "../auth/MenuDataProvider";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const { menuItems } = useMenuDataContext();
  const GrainIcon = icons.GrainIcon;

  const topMenuItems = menuItems.filter((item) => item.padre === 0);

  return (
    <div className="menu-center-wrapper">
      <div className="menu-container">
        <div className="menu-circle">
          {topMenuItems.map((item, index) => {
            const IconComponent = icons[item.icon];
            return (
              <NavLink
                to={item.url}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <NavButton
                  id={item.id}
                  icon={IconComponent}
                  label={item.description}
                  url={item.url}
                />
              </NavLink>
            );
          })}
        </div>
        <div className="menu-icon">
          <GrainIcon />
        </div>
      </div>
    </div>
  );
};

export default Menu;

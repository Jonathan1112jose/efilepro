import React from "react";
import "./css/Header.css";
import { useMenuDataContext } from "../auth/MenuDataProvider";
import { NavLink } from "react-router-dom";
import { useModuleDataContext } from "../auth/ModuleProvider";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import icons from "../icons";

const Header = () => {
  const { menuItems, actions } = useMenuDataContext();
  const { moduleData } = useModuleDataContext();

  const renderSubMenu = (parentId) => {
    const subMenuItems = menuItems.filter((item) => item.padre === parentId);
    if (subMenuItems.length === 0) {
      return null;
    }

    return (
      <ul className="submenu">
        {subMenuItems.map((item) => (
          <li key={item.id}>
            <a>{item.description}</a>
            {renderSubMenu(item.id)}
          </li>
        ))}
      </ul>
    );
  };

  const topMenuItems = menuItems.filter((item) => item.padre === moduleData.id);

  const renderAlerts = () => (
    <div className="alerts-container">
      {actions.map((action) => (
        <Tooltip key={action.id} title={action.message}>
          <IconButton style={{ marginRight: 16 }}>
            {React.createElement(icons[action.icon])}
          </IconButton>
        </Tooltip>
      ))}
    </div>
  );
  return (
    <header className="dynamic-header">
      <div className="column">
        <div className="icon-label">
          <NavLink
            className={"menu"}
            style={{ textDecoration: "none", color: "black" }}
            to={"/"}
          >
            <span className="icon">
              {moduleData.icon && <moduleData.icon />}
            </span>
            <span className="label">{moduleData.label}</span>
          </NavLink>
        </div>
      </div>
      <div className="column">
        <nav className="menu">
          <ul>
            {topMenuItems.map((item) => (
              <li key={item.id}>
                <a>{item.description}</a>
                {renderSubMenu(item.id)}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="column">
        {renderAlerts()}
        {moduleData.user.username}
      </div>
    </header>
  );
};

export default Header;

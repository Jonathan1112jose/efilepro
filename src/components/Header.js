import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useMenuDataContext } from "../auth/MenuDataProvider";
import { useModuleDataContext } from "../auth/ModuleProvider";
import icons from "../icons";
import "./css/Header.css";

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
    <Box display="flex" alignItems="center">
      {actions
        .filter((action) => action.nivel === 0)
        .map((action) => (
          <Tooltip key={action.id} title={action.message}>
            <IconButton style={{ marginRight: 16, color: "" }}>
              {React.createElement(icons[action.icon])}
            </IconButton>
          </Tooltip>
        ))}
    </Box>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: "transparent" }}>
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <NavLink
            className={"menu"}
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
            to={"/"}
          >
            {moduleData.icon && (
              <moduleData.icon
                style={{ marginRight: 8 }}
                sx={{ color: "black" }}
              />
            )}
            <Typography variant="h6" sx={{ color: "black" }}>
              {moduleData.label}
            </Typography>
          </NavLink>
        </Box>
        <Box display="flex" flexGrow={1} justifyContent="center">
          <nav className="menu">
            <ul>
              {topMenuItems.map((item) => (
                <li key={item.id} className="menu-item">
                  <a>{item.description}</a>
                  {renderSubMenu(item.id)}
                </li>
              ))}
            </ul>
          </nav>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexGrow={1}
          justifyContent="flex-end"
          color={"black"}
        >
          {renderAlerts()}
          <Typography variant="body1" style={{ marginLeft: 16 }}>
            {moduleData.user.username}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

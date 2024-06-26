import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Grid,
  Box,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  Button,
} from "@mui/material";
import "./css/tools.css";
import icons from "../icons";
import { useModuleDataContext } from "../auth/ModuleProvider";
import { useMenuDataContext } from "../auth/MenuDataProvider";
import { ClassSharp } from "@mui/icons-material";

export default function Tools() {
  const { actions } = useMenuDataContext();
  const { moduleData } = useModuleDataContext();
  const [showCloudIcon, setShowCloudIcon] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleNewButtonClick = () => {
    setShowCloudIcon(true);
  };

  const handleSettingsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleActionClick = (action) => {
    console.log(`Realizando acción: ${action}`);
    handleClose();
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };

  const nuevoAction = actions.find((action) => action.id === 12);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Grid container alignItems="center">
            {/* Primera columna */}
            <Grid item xs={4} className="left-align">
              <Button
                variant="outlined"
                className="new-button"
                onClick={handleNewButtonClick}
              >
                {nuevoAction ? nuevoAction.name : "Nuevo"}
              </Button>
              <Typography variant="h6" sx={{ marginLeft: 1, marginRight: 2 }}>
                {moduleData.label}
              </Typography>
              {actions
                .filter((action) => action.id === 8)
                .map((action) => (
                  <IconButton
                    key={action.id}
                    size="large"
                    onClick={handleSettingsClick}
                  >
                    {React.createElement(icons[action.icon])}
                  </IconButton>
                ))}
              {showCloudIcon &&
                actions
                  .filter((action) => action.id === 7)
                  .map((action) => (
                    <IconButton
                      size="large"
                      key={action.id}
                      onClick={() => handleActionClick(action.action)}
                    >
                      {React.createElement(icons[action.icon])}
                    </IconButton>
                  ))}

              {/* Menú desplegable para la acción Settings */}

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={handleClose}
              >
                {actions
                  .filter((action) => action.nivel === 3)
                  .map((action) => (
                    <MenuItem
                      key={action.id}
                      onClick={() => handleActionClick(action.action)}
                    >
                      {React.createElement(icons[action.icon])}
                      {action.name}
                    </MenuItem>
                  ))}
              </Menu>
            </Grid>

            {/* Segunda columna */}
            <Grid item xs={4} className="center-align">
              <div className="search">
                <div className="search-icon-wrapper">
                  {React.createElement(icons.SearchIcon)}
                </div>
                <InputBase
                  placeholder="Buscar…"
                  inputProps={{ "aria-label": "search" }}
                  className="input-base"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              </div>
            </Grid>

            {/* Tercera columna */}
            <Grid item xs={4} className="right-align">
              <List sx={{ display: "flex", flexDirection: "row", padding: 0 }}>
                {actions
                  .filter((action) => action.nivel === 2)
                  .map((action) => (
                    <ListItem
                      button
                      key={action.id}
                      onClick={() => handleActionClick(action.action)}
                    >
                      <ListItemIcon>
                        {React.createElement(icons[action.icon])}
                      </ListItemIcon>
                    </ListItem>
                  ))}
              </List>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import React, { useEffect, useState } from "react";
import NavButton from "./NavButton";
import icons from "../icons";
import "./style.css";
import { useAuth } from "../auth/AuthProvider";

const Menu = () => {
  const auth = useAuth();
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/menu")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const filteredMenuItems = data.filter((item) => {
          console.log(item.roles);
          return item.rol.includes(auth.user.role);
        });
        setMenuItems(filteredMenuItems);
      })
      .catch((error) => console.error("Error fetching menu items:", error));
  }, [auth.user.role]);

  const GrainIcon = icons.GrainIcon;

  return (
    <div className="menu-container">
      <div className="menu-circle">
        {menuItems.map((item, index) => {
          const IconComponent = icons[item.icon];
          return (
            <NavButton
              key={index}
              icon={IconComponent}
              label={item.description}
              url={item.url}
            />
          );
        })}
      </div>
      <div className="menu-icon">
        <GrainIcon />
      </div>
    </div>
  );
};

export default Menu;

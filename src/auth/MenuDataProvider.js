import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../auth/AuthProvider";

const MenuDataContext = createContext();

export const MenuDataProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    if (auth.user && auth.user.role) {
      fetch("http://localhost:4000/menu")
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.json();
        })
        .then((data) => {
          const filteredMenuItems = data.filter((item) =>
            item.rol.includes(auth.user.role)
          );
          setMenuItems(filteredMenuItems);
        })
        .catch((error) => console.error("Error fetching menu items:", error));
    }
  }, [auth.user]);

  return (
    <MenuDataContext.Provider value={{ menuItems }}>
      {children}
    </MenuDataContext.Provider>
  );
};

export const useMenuDataContext = () => useContext(MenuDataContext);

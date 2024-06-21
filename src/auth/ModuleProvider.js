import React, { createContext, useState, useContext } from "react";

const ModuleDataContext = createContext();

export const ModuleDataProvider = ({ children }) => {
  const [moduleData, setModuleData] = useState({
    icon: null,
    label: "",
    url: "",
    user: null,
  });

  const handleItemClick = ({ icon, label, url, user }) => {
    setModuleData({ icon, label, url, user });
  };

  return (
    <ModuleDataContext.Provider value={{ moduleData, handleItemClick }}>
      {children}
    </ModuleDataContext.Provider>
  );
};

export const useModuleDataContext = () => useContext(ModuleDataContext);

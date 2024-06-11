import React, { createContext, useContext } from "react";

const BitacoraContext = createContext();

export const BitacoraProvider = ({ children }) => {
  const logActivity = async (activity) => {
    console.log(activity);
  };

  return (
    <BitacoraContext.Provider value={{ logActivity }}>
      {children}
    </BitacoraContext.Provider>
  );
};

export const useBitacora = () => useContext(BitacoraContext);

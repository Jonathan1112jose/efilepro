import React, { createContext, useContext } from "react";

const BitacoraContext = createContext();

export const BitacoraProvider = ({ children }) => {
  const logActivity = async (activity) => {
    try {
      const response = await fetch("http://localhost:4000/bitacora", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(activity),
      });

      if (!response.ok) {
        throw new Error("Faltan datos");
      }
    } catch (error) {
      console.error("error guardando el registro", error);
    }
  };

  return (
    <BitacoraContext.Provider value={{ logActivity }}>
      {children}
    </BitacoraContext.Provider>
  );
};

export const useBitacora = () => useContext(BitacoraContext);

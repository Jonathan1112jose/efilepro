import { useContext, useEffect, useState, createContext } from "react";

const authContext = createContext({
  isAuthenticated: false,
});
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <authContext.Provider value={{ isAuthenticated }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);

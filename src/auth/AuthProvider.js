import { useContext, useState, useEffect, createContext } from "react";
import { useBitacora } from "./BitacoraProvider";

const authContext = createContext({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});
export function AuthProvider({ children }) {
  const { logActivity } = useBitacora();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsAuthenticated(true);
      setUser(storedUser);
    }
  }, []);

  const login = (username, role) => {
    const userData = { username, role };
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    logActivity({
      userName: username,
      date: new Date().toLocaleString(),
      action: "User logged in",
      path: window.location.pathname,
      description: "",
    });
  };

  const logout = () => {
    const username = user ? user.username : "";
    setIsAuthenticated(false);
    setUser(null);
    logActivity({
      userName: username,
      date: new Date().toLocaleString(),
      action: "User logged out",
      path: window.location.pathname,
      description: "",
    });
    localStorage.removeItem("user");
  };

  return (
    <authContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);

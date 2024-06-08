import { useContext, useState, useEffect, createContext } from "react";

const authContext = createContext({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Recuperar datos del localStorage al cargar el componente
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
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <authContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);

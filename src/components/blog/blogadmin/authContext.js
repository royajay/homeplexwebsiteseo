import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const API = "https://homeplexapi.homeplexnepal.com/api/users/login";
  const login = async (inputs) => {
    const res = await axios.post(`${API}`, inputs);
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await axios.post("/logout");
    setCurrentUser(null);
  }; 

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

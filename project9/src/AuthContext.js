import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(10); // Set static user ID to 10
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    
    // Check for stored username and token only (userId is static)
    if (storedUsername && token) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []); 

  const login = (user) => {
    localStorage.setItem("token", user.token);
    localStorage.setItem("username", user.name);
    // userId is static, so we do not store it again
    setUsername(user.name);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    // userId is static, so no need to clear it
    setUsername('');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ username, userId, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

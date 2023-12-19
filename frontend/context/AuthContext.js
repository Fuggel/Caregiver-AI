import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const loadToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("authToken");
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.error(`Error loading token from AsyncStorage: ${error}`);
      }
    };

    loadToken();
  }, []);

  const login = async (newToken) => {
    try {
      setToken(newToken);
      await AsyncStorage.setItem("authToken", newToken);
    } catch (error) {
      console.error(`Error storing token in AsyncStorage: ${error}`);
    }
  };

  const logout = async () => {
    try {
      setToken(null);
      await AsyncStorage.removeItem("authToken");
    } catch (error) {
      console.error(`Error removing token from AsyncStorage: ${error}`);
    }
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

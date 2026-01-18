import React, { createContext, useContext, useState } from "react";
import { authDataContext } from "./authContext";
import axios from "axios";

export const userDataContext = createContext();

function UserContext({ children }) {
  const [userData, setUserData] = useState(null);
  const { serverUrl } = useContext(authDataContext);

  // 🔹 LOGIN ke baad manually call hoga
  const getCurrentUser = async () => {
    try {
      const result = await axios.get(
        serverUrl + "/api/user/getcurrentuser",
        { withCredentials: true }
      );
      setUserData(result.data);
    } catch (error) {
      setUserData(null);
    }
  };

  // 🔹 LOGOUT (MOST IMPORTANT)
  const logout = async () => {
    try {
      await axios.post(
        serverUrl + "/api/auth/logout",
        {},
        { withCredentials: true }
      );
      setUserData(null);   // 🔥 FRONTEND LOGOUT
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    userData,
    setUserData,
    getCurrentUser,
    logout,
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContext;

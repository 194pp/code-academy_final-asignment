import {useContext, createContext, useState, useEffect} from 'react';
import axios from "axios";
import {serverURL} from "../components/utils/configs";

export const AuthContext = createContext({
  authData: {},
  setAuthData() {},
  authAxios() {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    username: null,
    token: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("vks_token");
    const username = localStorage.getItem("vks_username");
    setAuthData({token: token, username: username});
  }, [])

  const authAxios = axios.create({
    baseURL: serverURL,
    headers: {
      Authorization: `Bearer ${authData.token}`,
      'Content-Type': 'application/json',
    },
  });

  return (
    <AuthContext.Provider
      value={{ authData, setAuthData, authAxios}}
    >
      {children}
    </AuthContext.Provider>
  );
};

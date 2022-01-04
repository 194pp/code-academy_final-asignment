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
  const [tokenIsValid, setTokenIsValid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("vks_token");
    const username = localStorage.getItem("vks_username");
    setAuthData({token: token, username: username});
  }, []);
  useEffect(() => {
    fetch(`${serverURL}/utils/jwt-verify`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: tokenBearer,
      },
    }).then((response) => response.json())
      .then((data) => setTokenIsValid(data));
  }, [authData]);
  const logout = () => {
    localStorage.removeItem('vks_token');
    localStorage.removeItem('vks_username');
    setAuthData({});
  };

  const tokenBearer = `Bearer ${authData.token}`;

  const authAxios = axios.create({
    baseURL: serverURL,
    headers: {
      Authorization: tokenBearer,
      'Content-Type': 'application/json',
    },
  });


  return (
    <AuthContext.Provider
      value={
        {
          authData,
          setAuthData,
          authAxios,
          tokenBearer,
          tokenIsValid,
          logout,
        }
      }
    >
      {children}
    </AuthContext.Provider>
  );
};

import { useContext, createContext, useState } from 'react';

export const AuthContext = createContext({
  authData: {},
  setAuthData() {},
  isLoggedIn: false,
  login() {},
  logout() {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    loading: false,
    username: null,
    token: null,
  });
  const isLoggedIn = !!authData.token;

  const login = (token, username) => {
    setAuthData((s) => ({
      ...s,
      username: username,
      token: token,
    }));
    return true;
  };

  const logout = () => {
    setAuthData((s) => ({ ...s, username: null, token: null }));
  };

  return (
    <AuthContext.Provider
      value={{ authData, isLoggedIn, setAuthData, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

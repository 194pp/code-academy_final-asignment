import {createContext, useContext, useState} from "react";


export const UsersContext = createContext({
  users: [],
  setUsers() {},
});

export const useUsersContext = () => useContext(UsersContext);

export const UsersContextProvider = ({children}) => {
  const [users, setUsers] = useState([]);


}

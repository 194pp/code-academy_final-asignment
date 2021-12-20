import classes from './Users.module.css';
import PageHeading from "../../UI/PageHeading";
import {useEffect, useState} from "react";
import {useAuthContext} from "../../../store/AuthContext";
import UserCardGrid from "./Layout/UserCardGrid";

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const {authAxios} = useAuthContext();

  const fetchUsers = async () => {
    await authAxios.get("/users").then((data) => {
      console.log(data.data.data);
      setUsersData(data.data.data.users);
    }).catch((err) => {
      console.log(err.response);
    });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUserHandler = async (userId) => {
    const body = {idToDelete: userId};
    console.log(body);
    await authAxios.delete('/users', body)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
    await fetchUsers();
  }

  return (
    <div className={classes.Users}>
      <PageHeading>Vartotojai</PageHeading>
      <UserCardGrid
        users={usersData}
        deleteUserHandler={deleteUserHandler}
      />
      {/*<pre>{JSON.stringify(usersData, null, 2)}</pre>*/}
    </div>
  )
}

export default Users;

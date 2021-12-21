import classes from './Users.module.css';
import PageHeading from "../../UI/PageHeading";
import {useEffect, useState} from "react";
import {useAuthContext} from "../../../store/AuthContext";
import UserCardGrid from "./Layout/UserCardGrid";
import {serverURL} from "../../utils/configs";
import {useNavigate} from "react-router-dom";
import Modal from "../../UI/Modal/Modal";

const Users = () => {
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState([]);
  const {authAxios, tokenBearer} = useAuthContext();

  const fetchUsers = async () => {
    await authAxios.get("/users").then((data) => {
      // console.log(data.data.data);
      setUsersData(data.data.data.users);
    }).catch((err) => {
      navigate('/');
      // console.log(err.response);
    });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUserHandler = async (userId) => {
    const payload = {idToDelete: userId};
    await fetch(`${serverURL}/users`, {
      method: 'DELETE',
      headers: {
        Authorization: tokenBearer,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }).then((response) => {
      console.log(response);
    })
    await fetchUsers();
  }

  return (
    <div className={classes.Users}>
      <PageHeading>Vartotojai</PageHeading>
      {/*<Modal>MODAL</Modal>*/}
      <UserCardGrid
        users={usersData}
        deleteUserHandler={deleteUserHandler}
        updateUsers={() => fetchUsers()}
      />
      {/*<pre>{JSON.stringify(usersData, null, 2)}</pre>*/}
    </div>
  )
}

export default Users;

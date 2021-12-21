import Button from "../../../UI/Button";
import Icon from "../../../UI/Icon";
import classes from './UserCard.module.css';
import {useState} from "react";
import Modal from "../../../UI/Modal/Modal";
import UserEditContent from "./Edit/UserEditContent";

const UserCard = ({user, deleteUserHandler, updateUsers}) => {
  const [modal, setModal] = useState('');

  const id = user._id;

  const deleteHandler = () => {
    deleteUserHandler(id);
  }
  const editHandler = () => {
    setModal(
      <Modal removeModal={() => setModal('')}>
        <UserEditContent
          user={user}
          removeModal={() => setModal('')}
          updateUsers={updateUsers}
        />
      </Modal>
    )
  }

  return (
    <div className={classes.UserCard}>
      <div className={classes.UserInfoContainer}>
        <div><b>_id: </b>{user._id}</div>
        <div><b>Vartotoas: </b>{user.username}</div>
        <div><b>Amžius: </b>{user.age}</div>
        <div><b>El. paštas: </b>{user.email}</div>
        <div><b>Sukūrimo laikas: </b>{user.createdAt}</div>
      </div>
      <div className={classes.UserButtonsContainer}>
        <Button name={
          <div className={classes.ButtonContent}>
            <Icon icon='edit'/><span>Redaguoti</span>
          </div>
        } onClick={editHandler}/>
        <Button name={
          <div className={classes.ButtonContent}>
            <Icon icon='delete'/><span>Ištrinti</span>
          </div>
        } onClick={deleteHandler}/>
      </div>
      {modal}
    </div>
  )
}

export default UserCard

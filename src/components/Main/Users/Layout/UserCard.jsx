import Button from "../../../UI/Button";
import Icon from "../../../UI/Icon";
import classes from './UserCard.module.css';
import {useState} from "react";
import Modal from "../../../UI/Modal/Modal";
import UserEditContent from "./Edit/UserEditContent";
import UserDisplayDataFields from "./UserDataFields/UserDisplayDataFields";

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
      <UserDisplayDataFields user={user} />
      <div className={classes.UserButtonsContainer}>
        <Button className={classes.UserButton} name={
          <div className={classes.ButtonContent}>
            <Icon icon='edit'/><span>Redaguoti</span>
          </div>
        } onClick={editHandler}/>
        <Button className={classes.UserButton} solid name={
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

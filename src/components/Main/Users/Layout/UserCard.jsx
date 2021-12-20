import Button from "../../../UI/Button";
import Icon from "../../../UI/Icon";
import classes from './UserCard.module.css';

const UserCard = ({user, deleteUserHandler}) => {
  const id = user._id;

  const deleteHandler = () => {
    deleteUserHandler(id);
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
        } />
        <Button name={
          <div className={classes.ButtonContent}>
            <Icon icon='delete'/><span>Ištrinti</span>
          </div>
        } onClick={deleteHandler}/>
      </div>
    </div>
  )
}

export default UserCard

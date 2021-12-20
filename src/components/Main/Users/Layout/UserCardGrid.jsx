import UserCard from "./UserCard";
import classes from './UserCardGrid.module.css';

const UserCardGrid = ({users, deleteUserHandler}) => {
  return (
    <div className={classes.UserCardGrid}>
      {users && users.map(user => {
        return <UserCard user={user} deleteUserHandler={deleteUserHandler}/>
      })}
    </div>
  )
}

export default UserCardGrid;
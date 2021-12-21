import UserCard from "./UserCard";
import classes from './UserCardGrid.module.css';

const UserCardGrid = ({users, deleteUserHandler, updateUsers}) => {
  return (
    <div className={classes.UserCardGrid}>
      {users && users.map(user => {
        return (
          <UserCard
          user={user}
          deleteUserHandler={deleteUserHandler}
          key={user._id}
          updateUsers={updateUsers}
          />
        )
      })}
    </div>
  )
}

export default UserCardGrid;

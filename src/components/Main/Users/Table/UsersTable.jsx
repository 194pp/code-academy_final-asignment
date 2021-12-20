import classes from './UsersTable.module.css';
import UsersTableRow from "./UsersTableRow";

const tableHeadings = {
  _id: "_id", username: "username", password: "password", age: "age", email: "email", createdAt: "createdAt"
};

const UsersTable = ({data}) => {
  const proxyData = [...data];
  proxyData.unshift(tableHeadings);
  console.log(proxyData);
  return (
    <table className={classes.UsersTable}>
      {data && proxyData.map(users => {
        return <UsersTableRow data={users} />
      })}
    </table>
  )
}

export default UsersTable;

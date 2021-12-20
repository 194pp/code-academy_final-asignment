import classes from './UsersTableRow.module.css';
import {useState} from "react";
import Icon from "../../../UI/Icon";

const UsersTableRow = ({data}) => {
  const [fields, setFields] = useState();

  return (
    <tr className={classes.UsersTableRow}>
        <td>{data._id}</td>
        <td>{data.username}</td>
        <td>{data.age}</td>
        <td>{data.email}</td>
        <td>{data.createdAt}</td>
      {data._id === "_id" ? "" :
        <div className={classes.ActionButtons}>
          <a className={classes.ModifyAction}>
            <Icon icon='edit'/>
          </a>
          <a className={classes.DeleteAction}>
            <Icon icon='delete'/>
          </a>
        </div>
      }
    </tr>
  )
}

export default UsersTableRow;

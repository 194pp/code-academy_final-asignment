import classes from './UserDisplayDataFields.module.css';

const UserDisplayDataFields = ({user}) => {
  const dateObj = new Date(user.createdAt);
  const year = dateObj.getFullYear();
  const months = [
    'Sausio', 'Vasario', 'Kovo',
    'Balandžio', 'Gegužės', 'Birželio',
    'Liepos', 'Rugpjūčio', 'Rugsėjo',
    'Spalio', 'Lapkritčio', 'Gruodžio'
  ];
  const month = months[dateObj.getMonth()];
  const day = dateObj.getDate();

  const date = `${year} ${month} ${day} d.`;

  return (
    <div className={classes.Container}>
      <dl className={classes.Username}>{user.username}</dl>
      <table className={classes.Table}>
        <tbody>
          <tr>
            <th>Amžius</th>
            <th>{user.age}</th>
          </tr>
          <tr>
            <th>El. paštas</th>
            <th>{user.email}</th>
          </tr>
          <tr>
            <th>Sukūrimo data</th>
            <th>{date}</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserDisplayDataFields;

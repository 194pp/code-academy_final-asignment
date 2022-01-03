
const LoggedInUserLabel = (authData) => {
  if (authData) {
    return (
      <label>
        {authData.username}
      </label>
    );
  } else {
    return <></>;
  }
}

export default LoggedInUserLabel;

const Icon = ({type, className, icon}) => {
  let modifier = type ? `-${type}` : "";
  // if (outlined) {
  //   modifier = '-outlined';
  // }

  return (
    <span className={`material-icons${modifier} ${className}`}>
      {icon}
    </span>
  )
}

export default Icon;

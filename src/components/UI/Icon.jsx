const Icon = ({type, className, icon}) => {
  const modifier = type ? `-${type}` : "";
  return (
    <span className={`material-icons${modifier} ${className}`}>
      {icon}
    </span>
  )
}

export default Icon;

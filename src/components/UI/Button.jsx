import classes from './Button.module.css';

const Button = ({name, solid, onClick, type = 'submit', disabled}) => {
  return (
    <button
      disabled={disabled}
      className={`${classes.Button} ${solid ? classes.Solid : ""} ${disabled ? classes.Disabled : ""}`}
      onClick={onClick}
      type={type}
    >
      {name}
    </button>
  )
}

export default Button;

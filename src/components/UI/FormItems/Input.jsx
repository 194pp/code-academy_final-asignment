import classes from './Input.module.css';

const Input = ({error, type = 'text', ...rest}) => {
  return (
    <div className={classes.InputGroup}>
      <input
        className={`${classes.Input} ${error ? classes.InputError : ''}`}
        type={type}
        {...rest}
      />
      {error ? <span className={classes.SpanError}>{error}</span> : ''}
    </div>
  )
}

export default Input;

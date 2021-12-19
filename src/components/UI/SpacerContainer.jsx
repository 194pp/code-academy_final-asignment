import classes from './SpacerContainer.module.css';

const SpacerContainer = ({children}) => {
  return (
    <div className={classes.SpacerContainer}>
      {children}
    </div>
  )
}

export default SpacerContainer;

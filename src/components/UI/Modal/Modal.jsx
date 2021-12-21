import classes from './Modal.module.css';

const Backdrop = ({onclick}) => {
  return (
    <div className={classes.Backdrop} onClick={onclick}/>
  )
}

const Modal = ({children, removeModal}) => {
  return (
    <>
      <div className={classes.Modal}>
        {children}
      </div>
      <Backdrop onclick={removeModal}/>
    </>
  )
}

export default Modal;

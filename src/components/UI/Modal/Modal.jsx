import classes from './Modal.module.css';

const Backdrop = ({onclick, children}) => {
  return (
    <div className={classes.Backdrop} onClick={onclick}>
      {children}
    </div>
  )
}

const Modal = ({children, removeModal}) => {
  return (
    <>
      <div className={classes.Modal}>
        {children}
      </div>
      <Backdrop onclick={removeModal}>
      </Backdrop>
    </>
  )
}

export default Modal;

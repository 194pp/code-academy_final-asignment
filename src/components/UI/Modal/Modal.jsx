import classes from './Modal.module.css';
import {useState} from "react";

const Backdrop = ({onclick}) => {
  return (
    <div className={classes.Backdrop} onClick={onclick}/>
  )
}

const Modal = ({children}) => {
  const [displayModal, setDisplayModal] = useState(true);

  const onClickBackdrop = () => {
    setDisplayModal(false);
  }

  if (displayModal) {
    return (
      <>
        <div className={classes.Modal}>
          {children}
        </div>
        <Backdrop onclick={onClickBackdrop} />
      </>
    )
  } else {
    return <></>
  }
}

export default Modal;

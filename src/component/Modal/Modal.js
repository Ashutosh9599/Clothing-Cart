import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import "./Modal.css"

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />,
        document.getElementById('modal-root'))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}
        </ModalOverlay>,

        document.getElementById('modal-root')
      )}
    </Fragment>
  );
};

export default Modal;

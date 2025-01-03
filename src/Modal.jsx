import ReactDOM from 'react-dom';
import styles from "./modal.module.css";
const Modal = ({children}) =>{
    return ReactDOM.createPortal(<div id="modal" className={styles.modal}>
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>, document.getElementById('modal-root')); // container DOM node
};
export default Modal;
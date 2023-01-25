import classes from "./CartModal.module.css";
import ReactDOM from 'react-dom'

const Backdrop = props =>
{
    return <div onClick={props.onClick} className={classes.backdrop}/>
}

const ModalOverlay = props =>
{
    return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
    </div>
}
const Modal = props =>
{
    const portal = document.getElementById('overlay');
    return <div>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>, portal)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
    </div>
}

export default Modal
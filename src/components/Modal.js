import ReactDOM from 'react-dom';
const Modal = ({ show, children }) => {
    if (!show) return null;
    return ReactDOM.createPortal(
        { children }, document.getElementById('passcode')
    )
}

export default Modal;
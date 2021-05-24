import { useState } from 'react'
import reactDom from 'react-dom';
const PassCodeModal = ({ show, onClose, passcode, recipe_no }) => {
    const [code, setCode] = useState("")
    const deleteItem = () => {
        if (code === passcode) {
            console.log(localStorage.removeItem(recipe_no))
            console.log('deleted')
        }
    }
    if (!show) return null;
    return reactDom.createPortal(
        <div className="del">
            <div className="delHeader">
                <h4 onClick={onClose}>X</h4>
            </div>
            <form className="delcontents">
                <input value={code} type="number" placeholder="Enter passcode" onChange={(e) => setCode(e.target.value)} />
                <button className="confirmdel" type="submit" onClick={deleteItem}>Delete</button>
            </form>
        </div>, document.getElementById('passcode')
    )
}

export default PassCodeModal;
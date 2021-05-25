import React, { useState } from "react";
import ReactDOM from 'react-dom';
import close from './images/close1.jpg';
import './form.css';
// https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png
const AddForm = ({ open, onClose }) => {
    let count = localStorage.length;
    const [name, setName] = useState("");
    const [steps, setSteps] = useState("")
    const [recipe_no, setRecipeno] = useState(count + 1)
    const [imageHolder, setImageholder] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    const [ingName, setIngname] = useState("")
    const [passCode, setPasscode] = useState("")
    const dict = [{
        recipe_no: recipe_no,
        dishname: name,
        ingredients: ingName,
        steps: steps,
        passcode: passCode,
        image: imageHolder
    }]
    const update = () => {
        setRecipeno(recipe_no + 1)
        var c = ++count;
        dict['recipe_no'] = recipe_no;
        dict['dishname'] = name;
        dict['ingredients'] = ingName;
        dict['steps'] = steps;
        dict['passcode'] = passCode;
        dict['image'] = imageHolder;
        if (name !== "" && ingName !== "" && steps !== "")
            localStorage.setItem(c, JSON.stringify(dict));
    }
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImageholder(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    if (!open) return null;
    return ReactDOM.createPortal(
        <div>
            <form className="form">
                <button className="closeButton" onClick={onClose}><img src={close} alt="close" /></button>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name of the dish"
                    required
                />
                <input
                    type="text"
                    value={ingName}
                    onChange={e => setIngname(e.target.value)}
                    placeholder="List of ingredients"
                    required
                />
                <input
                    type="text"
                    value={steps}
                    onChange={e => setSteps(e.target.value)}
                    placeholder="Steps to cook the dish"
                    required
                />
                <input
                    type="number"
                    value={passCode}
                    onChange={e => setPasscode(e.target.value)}
                    placeholder="Passcode"
                    required
                />
                <input
                    type="file"
                    value={''}
                    name="image-upload"
                    accept="image/*"
                    onChange={imageHandler}
                    placeholder="Upload Image"
                />
                <img src={imageHolder} alt="not found" id="image-holder" />
                <button className="btnn okbtn" onClick={update} type="submit">OK</button>
            </form >
        </div >, document.getElementById('form-root')
    )
}
export default AddForm;
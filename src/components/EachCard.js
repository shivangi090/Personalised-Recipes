import React, { useState } from 'react';
import PassCodeModal from './PassCodeModal';
const EachCard = ({ name, recipe_no, ingredients, steps, passcode, image }) => {
    const [show, setShow] = useState(false)
    return (
        <div className="card">
            <div className="card_div">
                <img className="card_photo contents" src={image} alt="recipe_photo" />
            </div>
            <p className="contents">Recipe Name:{name}</p>
            <p className="contents">Ingredients:{ingredients}</p>
            <p className="contents">Steps to cook:{steps}</p>
            <button id="del" onClick={() => { setShow(true) }}>Delete</button>
            <PassCodeModal show={show} onClose={() => { setShow(false) }} passcode={passcode} recipe_no={recipe_no} />
        </div>
    )
}
export default EachCard;
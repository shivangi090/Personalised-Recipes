import React from 'react';
import image from './images/bg2.webp'
const CardDemo = ({ name, ingredients, steps }) => {
    return (
        <div className="card">
            <div className="card_div">
                <img className="card_photo contents" src={image} alt="recipe_photo" />
            </div>
            <p className="contents">Recipe Name:{name}</p>
            <p className="contents">Ingredients:{ingredients}</p>
            <p className="contents">Steps to cook:{steps}</p>
            <button id="del">Delete</button>
        </div>
    )
}
export default CardDemo;
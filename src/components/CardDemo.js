import React from 'react';
const CardDemo = ({ name, ingredients, steps }) => {
    const image = './images/bg2.webpnpm init'
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
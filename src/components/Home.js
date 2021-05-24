import React, { useState } from 'react';
import Card from './Cards.js'

const Home = ({ onOpen, children }) => {
    // *******************for search value****************************
    const [search, setSearch] = useState("")
    // ****************Search Submit function*************************
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <div className="App">
                <h1>Food Recipes</h1>
                <form className="search" onSubmit={onSubmit}>
                    <input value={search} type="text" placeholder="Search dish..." onChange={(e) => { setSearch(e.target.value) }} />
                    <input type="submit" value="Search" className="btn" />
                </form>
                <h2>Click here to add your recipe</h2>
                <input type="submit" value="Add" className="btn" onClick={onOpen} />
                {children}
            </div>
            <div>
                <Card search={search} />
            </div>
        </div>

    )
}
export default Home;
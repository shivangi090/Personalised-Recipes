import './card.css'
import EachCard from './EachCard'
import CardDemo from './CardDemo'
const Card = ({ search }) => {
    console.log(search)
    const data = []
    for (let i of Object.keys(localStorage).sort()) {
        data.push(JSON.parse(localStorage[i]))
    }
    const filteredData = data.filter(e => e[0]['dishname'].toLowerCase().includes(search.toLowerCase()));
    // console.log(a);
    // data.filter(e => console.log(e[0]['dishname'].toLowerCase().includes(search.toLowerCase())))
    //console.log(data[0][0]['image'])//---access each property of the recipe by this
    if (localStorage.length === 0) {
        return (
            <CardDemo name={"Demo Card"} ingredients={"You can add your own recipe here"} steps={"To add your recipe here you can click on ADD button above and add the details of your favourite recipes and they will be stored in a card like this. Make sure to add the picture of your recipe also. Yeah! You have done it!"} />
        )
    }
    return (
        <div>
            <h3>Here comes your favourites...</h3>

            <div className="container">
                {
                    filteredData.map((recipe, i) => (
                        <EachCard
                            key={filteredData[i][0]['recipe_no']}
                            recipe_no={filteredData[i][0]['recipe_no']}
                            name={filteredData[i][0]['dishname']}
                            ingredients={filteredData[i][0]['ingredients']}
                            steps={filteredData[i][0]['steps']}
                            passcode={filteredData[i][0]['passcode']}
                            image={filteredData[i][0]['image']}
                        />
                    )
                    )
                }
            </div>
        </div>
    )
}
export default Card;

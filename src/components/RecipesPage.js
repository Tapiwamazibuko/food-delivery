import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlRice, faXmark } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "./ProductCard";
import cookingData from '../data/cookingData';

export default function RecipesPage(){
    const [filterSelected, setFilterSelected] = React.useState([false, false, false, false, false])
    const filterNames = ["Fish", "Shellfish", "Food", "Pasta", "Easy"]
    const [result, setResult] = React.useState(cookingData)
    const recipeElements = cookingData.map(data => {
        return <ProductCard
                    key={data.id}
                    title={data.title}
                    img={data.img}
                    shipping={data.shipping}
                    sale={data.sale}
                    difficulty={data.difficulty}
                    time={data.time}
                    serving={data.serving}
                    id={data.id}
                />
    })

    function toggleFilter(index) {
        setFilterSelected( prev => {
            return prev.map((filter, i) => {
                return i === index ? !filter : filter
            })
          })

          setResult(() => {
            let array = []
            filterNames.forEach(element => {
                array.push(cookingData.filter((item) => { return item.title.includes(element)}))
            })
            return array
        })
    }

    function removeFlags(){
        setFilterSelected([false, false, false, false, false])
    }

    return(
        <div>
            <div className="main--background" style={{backgroundImage: `url(resturant.jpg)`}}>
                <img src={require(`../images/resturant.jpg`)} style={{marginBottom: "0px"}}></img>
                <div>
                    <div className="main--text">
                        <div className="footer--button">
                            <button>
                                <FontAwesomeIcon icon={faBowlRice}/>
                            </button>
                        </div>
                        <h1 style={{fontSize: '60px'}}>Recipes</h1>
                        <h4 style={{fontSize: '30px'}}>Market Fresh Seafood delivered to you door</h4>
                    </div>
                </div>
            </div>
            <div className="blog--content">
                <div className="blog--item">
                    <div>
                        <h1 className="recipe--details">Filters</h1>
                        <div className="remove--flag" style={{top: '7%'}} onClick={removeFlags}>
                            <p>Remove All</p>
                        </div>
                    </div>
                    <div className="filter--items">
                    <div className="filter--flag" onClick={() => toggleFilter(0)} 
                        style={filterSelected.at(0) ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white"}}>
                            {filterNames.at(0)}
                            { filterSelected.at(0) && <FontAwesomeIcon icon={faXmark}/>}  
                        </div>
                        <div className="filter--flag" onClick={() => toggleFilter(1)}
                        style={filterSelected.at(1) ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white"}}>
                            {filterNames.at(1)}
                            { filterSelected.at(1) && <FontAwesomeIcon icon={faXmark}/>}
                        </div>
                        <div className="filter--flag" onClick={() => toggleFilter(2)}
                        style={filterSelected.at(2) ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white"}}>
                            {filterNames.at(2)}
                            { filterSelected.at(2) && <FontAwesomeIcon icon={faXmark}/>}
                        </div>
                        <div className="filter--flag" onClick={() => toggleFilter(3)}
                        style={filterSelected.at(3) ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white"}}>
                            {filterNames.at(3)}
                            { filterSelected.at(3) && <FontAwesomeIcon icon={faXmark}/>}
                        </div>
                        <div className="filter--flag" onClick={() => toggleFilter(4)}
                        style={filterSelected.at(4) ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white"}}>
                            {filterNames.at(4)}
                            { filterSelected.at(4) && <FontAwesomeIcon icon={faXmark}/>}
                        </div>
                    </div>
                </div>

                <div className="carousel--cards recipie--carousel" style={{paddingLeft: "20px"}}>
                    {recipeElements}
                </div>
            </div>
        </div>
    )
}
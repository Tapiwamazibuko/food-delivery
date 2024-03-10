import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import seafoodData from "../data/seafoodData";
import RecipeCard from "./RecipeCard";



export default function CategoriesPage(props){
    const [filterSelected, setFilterSelected] = React.useState([false, false, false, false, false])
    const filterNames = ["Fish", "People", "Food", "Fishing", "Butter"]
    const [result, setResult] = React.useState(props.foodItems[0])
    const productsItems =  props.foodItems[0].map(element => {
            return <RecipeCard
                  key={element.id}
                  title={element.title}
                  description={element.description}
                  img={element.img}
                  measurement={element.measurement}
                  price={element.price}
                  shipping={element.shipping}
                  sale={element.sale}
                  id={element.id}
            />
        });


        function toggleFilter(index) {
            setFilterSelected( prev => {
                return prev.map((filter, i) => {
                    return i === index ? !filter : filter
                })
              })

              setResult(() => {
                let array = []
                filterNames.forEach(element => {
                    array.push(props.foodItems[0].filter((item) => { return item.title.includes(element)}))
                })
                return array
            })
        }

        console.log(result)
    return (
        <div>
            <div className="main--background" style={{backgroundImage: `url(${props.img})`}}>
                <img src={require(`../images/${props.img}`)} style={{marginBottom: "0px"}}></img>
                <div>
                    <div className="main--text">
                        <div className="footer--button">
                            <button>
                                <FontAwesomeIcon icon={props.icon}/>
                            </button>
                        </div>
                        <h1 style={{fontSize: '60px'}}>{props.title}</h1>
                        <h4 style={{fontSize: '20px', width: "50%", textAlign: "center"}}>{props.description}</h4>
                    </div>
                </div>
            </div>
            <div className="blog--content">
                <div className="blog--item">
                    <div>
                        <h1 className="recipe--details">Filters</h1>
                        <div className="remove--flag">Remove All</div>
                    </div>
                    <div className="categories--filter">
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
            </div>
            <div className="carousel--cards" style={{backgroundColor: "#DADADA", paddingBottom: "30px"}}>
                {productsItems}
            </div>
        </div>
    )
}
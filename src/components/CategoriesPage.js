import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import seafoodData from "../data/seafoodData";
import RecipeCard from "./RecipeCard";



export default function CategoriesPage(props){
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

        console.log(props.foodItems[0])
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
                        <div className="filter--flag">
                            Fish
                            <FontAwesomeIcon icon={faXmark}/>
                        </div>
                        <div className="filter--flag">
                            People
                            <FontAwesomeIcon icon={faXmark}/>
                        </div>
                        <div className="filter--flag">
                            Food
                            <FontAwesomeIcon icon={faXmark}/>
                        </div>
                        <div className="filter--flag">
                            Fishing
                            <FontAwesomeIcon icon={faXmark}/>
                        </div>
                        <div className="filter--flag">
                            Sourcing
                            <FontAwesomeIcon icon={faXmark}/>
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
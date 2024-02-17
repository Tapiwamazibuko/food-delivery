import { faChevronRight, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import seafoodData from "../data/seafoodData";
import SearchItem from "./SearchItem";
import categoriesData from "../data/categoriesData";
import cookingData from "../data/cookingData";

export default function Search(){
    const [search, setSearch] = React.useState("");
    const productItems = seafoodData.map(data =>{
        return <SearchItem
                    img={data.img}
                    title={data.title}
                    serving={data.serving}
                    key={data.id}
                />
    })

    const categoriesItems = categoriesData.map(data =>{
        return <SearchItem
                    img={data.img}
                    title={data.title}
                    key={data.id}
                />
    })

    const dataItems = cookingData.slice(1, 4);
    const cookingDataItems= dataItems.map(data => {
        return <SearchItem
                    img={data.img}
                    title={data.title}
                    key={data.id}
                />
    })

    function closeSearch(){
        document.getElementById("search").style.height === "600px" ? document.getElementById("search").style.display = "none" : document.getElementById("search").style.display = "flex";
        document.getElementById("search").style.height = document.getElementById("search").style.height === "600px" ? "0px" : "600px" ;
        document.getElementById("search").style.width = "60%";
    }

    function handleChange(){

    }

    return(
        <div id="search" className="search--container">
            <button className="search--close" onClick={closeSearch}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="form" style={{marginTop: "20px"}}>
                <span style={{border: "1px solid rgba(149, 157, 165, 0.2)"}}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "gray"}}/>
                    <input
                        type="text" id="search"
                        className="form--input"
                        value={search}
                        name="search"
                        placeholder="Search..."
                        onChange={handleChange}
                    />
                    <button>Search</button>
                </span>
            </div>
            <div className="search--content">
                <div>
                    <h4 className="search--text" style={{fontSize: "12px", letterSpacing: "2px", marginLeft: "20px"}}>TOP RESULTS</h4>
                    {productItems}
                    <button className="search--button">
                        <h2>View all Products</h2>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </button>
                </div>
                <div className="second--search">
                    <h4 className="search--text" style={{fontSize: "12px", letterSpacing: "2px", marginLeft: "20px"}}>CATEGORIES</h4>
                    {categoriesItems}
                    <h4 className="search--text" style={{fontSize: "12px", letterSpacing: "2px", marginLeft: "20px"}}>RECIPES</h4>
                    {cookingDataItems}
                    <button className="search--button">
                        <h2>View all Recipes</h2>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </button>   
                </div>
            </div>
        </div>
    )
}
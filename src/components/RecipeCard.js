import React from "react";

export default function RecipeCard(props){
    return (
        <div className="recipe--card--container">
            <button type="button" className="logo--button">M</button>
            <div className="recipe--image--container">
                <img src={require(`../images/${props.img}`)}></img>
            </div>
            <div className="recipe--text">
                <div className="recipe--title--container">
                    <h1 className="recipe--title">{props.title}</h1>

                </div>
                <div>
                    <h4 className="recipe--description">{props.description}</h4>
                </div>
                <div className="recipe--price">
                    <h5 style={{color: "#C90D12"}}>$</h5>
                    <h4 style={{color: "#C90D12"}}>{props.price}</h4>
                    <h5>{`per ${props.measurement}`}</h5>
                </div>
                <div style={{paddingTop: "10px"}}>
                    <img src={require("../images/location-icon.png")}></img>
                    <h5 className="recipe--description" style={{marginBlockStart: "0px"}}>{props.shipping}</h5>
                </div>
                
            </div>
        </div>
    )
}
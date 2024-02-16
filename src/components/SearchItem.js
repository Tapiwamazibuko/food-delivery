import React from "react";

export default function SearchItem(props){
    return(
        <div className="cart--item--container">
            <div className="cart--image--container">
                <img src={require(`../images/${props.img}`)}></img>
            </div>
            <div style={{width: "65%", paddingLeft: "20px"}}>
                <h1 className="recipe--details" style={{fontSize: "22px", marginBlockStart: "5px"}}>
                    {props.title}
                </h1>
                {
                    props.serving && 
                    <div>
                        <h3 className="search--text">Each serving serves {props.serving}</h3>
                    </div>
                }
                
            </div>
        </div>
    )
}
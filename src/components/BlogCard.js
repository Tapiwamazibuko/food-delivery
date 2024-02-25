import React from "react";

export default function BlogCard(props){
    return (
        <div className="recipe--card--container">
            <button type="button" className="logo--button">M</button>
            <div className="recipe--image--container">
                <img src={require(`../images/${props.img}`)}></img>
            </div>
            <div className="recipe--text">
                    <div className="recipe--difficluty">
                        <img className="author--img"src={require(`../images/${props.authorImg}`)}></img>
                        <h4>by </h4>
                        <h4 className="recipe--difficulty-level">Author</h4>
                    </div>
                    <div className="recipe--title--container">
                        <h1 className="recipe--title blog--title">{props.title}</h1>
                    </div>
                    <div className="recipe--difficluty">
                        <h4>{props.description}</h4>
                    </div>
                    
                </div>

        </div>
    )
}
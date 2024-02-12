import React from "react";
import { faGauge, faBowlRice, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductCard(props){
    return (
        <div className="recipe--card--container">
            <button type="button" className="logo--button">M</button>
            {props.sale && <div className="sale--flag">10% OFF</div>}
            <div className="recipe--image--container">
                <img src={require(`../images/${props.img}`)}></img>
            </div>
            <div className="recipe--text">
                <div className="recipe--title--container">
                    <h1 className="recipe--title">{props.title}</h1>

                </div>
                <div className="recipe--difficluty">
                    <FontAwesomeIcon icon={faGauge}/>
                    <h4>Difficulty: </h4>
                    <h4 className="recipe--difficulty-level">{props.difficulty}</h4>
                </div>
                <div className="recipe--difficluty" >
                    <FontAwesomeIcon icon={faBowlRice} style={{color: "#C90D12"}}/>
                    <h4>Prep/Cook time:</h4>
                    <h4 className="recipe--difficulty-level">{props.time}</h4>
                </div>
                <div className="recipe--difficluty">
                    <FontAwesomeIcon icon={faUserGroup} style={{color: "#C90D12"}}/>
                    <h4>Serving:</h4>
                    <h5 className="recipe--difficulty-level">{props.serving}</h5>
                </div>
                
            </div>
        </div>
    )
}
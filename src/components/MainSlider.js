import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function MainSlider(props){

    const style = {
        backgroundImage: `${props.img}`
    }

    return(
        <div className="main--background" style={{backgroundImage: `url(${props.img})`}}>
            <img src={require(`../images/${props.img}`)}></img>
            <div>
                <div className="main--left">
                    <button className="main--button">
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </button>
                </div>
                <div className="main--text">
                    <h1>{props.title}</h1>
                    <h4>{props.text}</h4>
                </div>
                <div className="main--right">
                    <button className="main--button">
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </button>
                </div>
            </div>
        </div>
    )
}
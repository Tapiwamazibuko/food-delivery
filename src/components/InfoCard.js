import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoCard(props){
    return(
        <div className="info--card--container">
            <div className="info--card--icon">
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <div className="info--card--title">
                <h2>{props.title}</h2>
            </div>
            <div className="info--card--description">
                <h4>{props.description}</h4>
            </div>
        </div>
    )
}
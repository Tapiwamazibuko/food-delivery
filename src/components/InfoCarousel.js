import React from "react";
import cookingTimeData from "../data/cookingTimeData";
import InfoCard from "./InfoCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoCarousel(props){
    const infoCards = props.data.map( data => {
        return <InfoCard 
                  key={data.id}
                  icon={data.icon}
                  title={data.title}
                  description={data.description}
              />
      })

    return(
        <div className="card--carousel--container">
            <div className="carousel--title">
                <button type="button" className="card--carousel--button">
                    <FontAwesomeIcon icon={props.icon} />
                </button>
                <h1>{props.firstTitle}</h1>
                <h1 className="second--title">{props.secondTitle}</h1>
            </div>
            <div className="carousel--description">
                <h5>{props.description}</h5>
            </div>
            <div className="carousel--cards">
                {infoCards}
            </div>
        </div>
    )
}
import React from "react";
import RecipeCard from './RecipeCard';
import seafoodData from '../data/seafoodData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardCarousel(props){
    const weeklySpecialsData = props.data.map( data => {
        return <RecipeCard
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  img={data.img}
                  measurement={data.measurement}
                  price={data.price}
                  shipping={data.shipping}
                  sale={data.sale}
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
                {weeklySpecialsData}
            </div>
        </div>
    )
}
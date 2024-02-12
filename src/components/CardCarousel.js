import React from "react";
import RecipeCard from './RecipeCard';
import seafoodData from '../data/seafoodData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "./ProductCard";

export default function CardCarousel(props){
    const weeklySpecialsData = props.data.map( data => {
        return props.type === "recipe" ? <RecipeCard
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  img={data.img}
                  measurement={data.measurement}
                  price={data.price}
                  shipping={data.shipping}
                  sale={data.sale}
                /> : <ProductCard
                key={data.id}
                title={data.title}
                img={data.img}
                shipping={data.shipping}
                sale={data.sale}
                difficulty={data.difficulty}
                time={data.time}
                serving={data.serving}
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
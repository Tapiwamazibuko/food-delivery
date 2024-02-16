import React from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";
import seafoodMenuData from "./data/seafoodMenuData";
import RecipePage from "./components/RecipePage";
import cookingData from "./data/cookingData";

export default function Recipe(){
    return(
        <div>
            <Header />
            <Menu 
                id="seafoodMenu"
                data={seafoodMenuData}
            />
            <RecipePage
                difficulty={cookingData[0].difficulty}
                time={cookingData[0].time}
                serving={cookingData[0].serving}
                prepTime={cookingData[0].prepTime}
                ingredients={cookingData[0].ingredients}
                overview={cookingData[0].overview}
                essentials={cookingData[0].essentials}
                img={cookingData[0].img}
             />
        </div>
    )
}
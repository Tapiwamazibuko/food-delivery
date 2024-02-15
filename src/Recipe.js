import React from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";
import seafoodMenuData from "./data/seafoodMenuData";
import RecipePage from "./components/RecipePage";
import cookingData from "./data/cookingData";
import CartItem from "./components/CartItem";
import seafoodData from "./data/seafoodData";

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
            <CartItem 
                img={seafoodData[0].img}
                sale={true}
                title={seafoodData[0].title}
                price={seafoodData[0].price}
            />
            <CartItem 
                img={seafoodData[1].img}
                sale={false}
                title={seafoodData[1].title}
                price={seafoodData[1].price}
            />
        </div>
    )
}
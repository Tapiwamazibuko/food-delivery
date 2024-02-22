import React from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";
import seafoodMenuData from "./data/seafoodMenuData";
import RecipePage from "./components/RecipePage";
import cookingData from "./data/cookingData";
import moreMenuData from "./data/moreMenuData";
import Cart from "./components/Cart";
import Search from "./components/Search";
import { useLoaderData } from 'react-router-dom';

function getRecipe(query) {
    const result = cookingData.filter((item) => { return item.id == query})
    return result[0]
  }

export async function loader({ params }) {
    const recipe = await getRecipe(params.recipeId);
    return recipe;
  }

export default function Recipe(){
    const recipe = useLoaderData();
    const [menuData, setMenuData] = React.useState(seafoodMenuData)
    function openMenu(menu){
        if(menu==="seafood") {
            setMenuData(seafoodMenuData)
        } else if(menu==="more") {
            setMenuData(moreMenuData)
        }
            
    }
    return(
        <div>
            <Cart />
            <Search />
            <Header
                onClick={openMenu}
            />
            <Menu 
                id="seafoodMenu"
                data={menuData}
            />
            <RecipePage
                difficulty={recipe.difficulty}
                time={recipe.time}
                serving={recipe.serving}
                prepTime={recipe.prepTime}
                ingredients={recipe.ingredients}
                overview={recipe.overview}
                essentials={recipe.essentials}
                img={recipe.img}
             />
        </div>
    )
}
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
    const {recipe, products, categories, cookings , search} = useLoaderData();
    const [menuData, setMenuData] = React.useState(seafoodMenuData)
    const [cartStyle, setCartStyle] = React.useState({})
    function openMenu(menu){
        if(menu==="seafood") {
            setMenuData(seafoodMenuData)
        } else if(menu==="more") {
            setMenuData(moreMenuData)
        }
            
    }

    function backgroundBlur(){
        if(Object.keys(cartStyle).length === 0)
        {
          setCartStyle({
            background: "rgba(0, 0, 0, 0.7)",
            display: "block",
            height: "100%",
            left: "0",
            position: "absolute",
            top: "0",
            width: "100%",
            zIndex: "5"
          })
          console.log("show", cartStyle)
        }else {
          setCartStyle({})
          console.log("hide", cartStyle)
        }
      }
    return(
        <div>
            <Cart 
                blur={backgroundBlur}
            />
            <div style={cartStyle}/>
            <Search />
            <Header
                onClick={openMenu}
                blur={backgroundBlur}
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
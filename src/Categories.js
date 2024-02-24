import React from "react";
import CategoriesPage from "./components/CategoriesPage";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Menu from "./components/Menu";
import seafoodMenuData from "./data/seafoodMenuData";
import moreMenuData from "./data/moreMenuData";
import Search from "./components/Search";
import { useLoaderData } from 'react-router-dom';
import seafoodData from "./data/seafoodData";

function getCategory(query) {
    const result = seafoodMenuData.filter((item) => { return item.id == query})
    return result[0]
  }

export async function loader({ params }) {
    const category = await getCategory(params.categoryId);
    const myArray = category.title.split(" ");
    let foodItems = new Array();
    myArray.forEach(element => {
        foodItems.push(seafoodData.filter((item) => { return item.title.includes(element)}))
    });
    return { category, foodItems };
  }

export default function Categories(){
    const { category, foodItems } = useLoaderData();
    const [menuData, setMenuData] = React.useState(seafoodMenuData)
    function openMenu(menu){
        if(menu==="seafood") {
            setMenuData(seafoodMenuData)
        } else if(menu==="more") {
            setMenuData(moreMenuData)
        }
            
    }

    return (
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
            <CategoriesPage
                img={category.img}
                icon={category.icon}
                title={category.title}
                description={category.description}
                foodItems={foodItems}
            />
        </div>
    )
}
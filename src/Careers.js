import React from "react";
import CareersPage from "./components/CareersPage";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Menu from "./components/Menu";
import seafoodMenuData from "./data/seafoodMenuData";
import moreMenuData from "./data/moreMenuData";
import SearchItem from "./components/SearchItem";
import seafoodData from "./data/seafoodData";
import cookingData from "./data/cookingData";

export default function Careers(){
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
            <Header
                onClick={openMenu}
            />
            <Menu 
                id="seafoodMenu"
                data={menuData}
            />
            <CareersPage/>
            <SearchItem 
                img={seafoodData[0].img}
                title={seafoodData[0].title}
                serving={seafoodData[0].serving}
            />
            <SearchItem 
                img={cookingData[0].img}
                title={cookingData[0].title}
            />
        </div>
    )
}
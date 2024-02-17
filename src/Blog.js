import React from "react";
import BlogPage from "./components/BlogPage";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Menu from "./components/Menu";
import seafoodMenuData from "./data/seafoodMenuData";
import moreMenuData from "./data/moreMenuData";
import Search from "./components/Search";

export default function Blog(){
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
            <BlogPage/>
        </div>
    )
}
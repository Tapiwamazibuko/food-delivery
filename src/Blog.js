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
    return (
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
            <BlogPage/>
        </div>
    )
}
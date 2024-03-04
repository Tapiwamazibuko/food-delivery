import React from "react";
import ProductPage from "./components/ProductPage";
import seafoodData from "./data/seafoodData";
import Header from "./components/Header";
import seafoodMenuData from "./data/seafoodMenuData";
import Menu from "./components/Menu";
import moreMenuData from "./data/moreMenuData";
import Cart from "./components/Cart";
import Search from "./components/Search";
import { useLoaderData } from 'react-router-dom';

function getProduct(query) {
    const result = seafoodData.filter((item) => { return item.id == query})
    return result[0]
  }

export async function loader({ params }) {
    const product = await getProduct(params.productId);
    return product;
  }

export default function Product(){
    const {product, products, categories, cookings , search} = useLoaderData();
    const [cartStyle, setCartStyle] = React.useState({})
    const [menuData, setMenuData] = React.useState(seafoodMenuData)
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
            <ProductPage 
                img={product.img} 
                title={product.title}
                price={product.price}
                measurement={product.measurement}
                serving={product.serving}
            />
        </div>
    )
}
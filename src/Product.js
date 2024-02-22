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
    const product = useLoaderData();
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
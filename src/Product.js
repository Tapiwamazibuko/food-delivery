import React from "react";
import ProductPage from "./components/ProductPage";
import seafoodData from "./data/seafoodData";
import Header from "./components/Header";
import seafoodMenuData from "./data/seafoodMenuData";
import Menu from "./components/Menu";

export default function Product(){
    return (
        <div>
            <Header />
            <Menu 
                id="seafoodMenu"
                data={seafoodMenuData}
            />
            <ProductPage 
                img={seafoodData[0].img} 
                title={seafoodData[0].title}
                price={seafoodData[0].price}
                measurement={seafoodData[0].measurement}
                serving={seafoodData[0].serving}
            />
        </div>
    )
}
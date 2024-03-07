import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CartItem from "./CartItem";
import seafoodData from "../data/seafoodData";
import { getProducts } from "./Search";

export async function loader({ request }) {
    const body = request.body
    const products = await getProducts(body);
    return { products};
  }

export default function Cart(props){
    const [totalPrice, setTotalPrice] = React.useState(seafoodData[1].price+seafoodData[1].price+seafoodData[1].price);

    function getWidth(){
        let percent = totalPrice * 100;
        percent /= 525;
        percent = percent.toFixed(0) > 100 ? 100 : percent.toFixed(0);
        return percent;
    }

    function closeCart(){
        document.getElementById("cart").style.width === "500px" ? document.getElementById("cart").style.display = "none" : document.getElementById("cart").style.display = "flex";
        document.getElementById("cart").style.width = document.getElementById("cart").style.width === "500px" ? "0px" : "500px" ;
        document.getElementById("cart").style.height = "100%";
        props.blur()
    }
    return(
        <div id="cart" className="cart--container">
            <div className="cart--top" style={{marginLeft: "20px"}}>
                <h1 className="recipe--details">My Cart</h1>
                <FontAwesomeIcon icon={faXmark}  onClick={closeCart}/> 
            </div>
            <div className="cart--shipping" style={{marginLeft: "30px"}}>
                <h2 className="recipe--details">Almost there!</h2>
                <h5>Spend another $25 for FREE shipping! </h5>
                <span className="cart--progress-bar">
                    <span style={{width: `${getWidth()}%`}}></span>
                </span>
            </div>
            <div style={{marginLeft: "20px"}}>
                <CartItem
                    img={seafoodData[0].img}
                    sale={true}
                    title={seafoodData[0].title}
                    price={seafoodData[0].price}
                    totalPrice={setTotalPrice}
                />
                <CartItem
                    img={seafoodData[1].img}
                    sale={false}
                    title={seafoodData[1].title}
                    price={seafoodData[1].price}
                    totalPrice={setTotalPrice}
                />
                <CartItem
                    img={seafoodData[2].img}
                    sale={false}
                    title={seafoodData[2].title}
                    price={seafoodData[2].price}
                    totalPrice={setTotalPrice}
                />
            </div>
            <div className="cart--totals">
                <div className="cart--total--text">
                    <h3>YOUR CART</h3>
                    <h2>${totalPrice.toFixed(2)}</h2>
                    <h5>Excluding delivery</h5>
                </div>
                <button>
                    Checkout
                    <FontAwesomeIcon icon={faCheck}/>
                </button>
            </div>
        </div>
    )
}
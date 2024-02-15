import React from "react";

export default function CartItem(props){
    const [quantity, setQuantity] = React.useState(1);
    const [price, setPrice] = React.useState(props.price);

    function increase(){
        setPrice(prevPrice => prevPrice+props.price)
        setQuantity(prevQuantity => prevQuantity+1)
        props.totalPrice(prev => prev+props.price)
    }

    function decrease(){
        setPrice(prevPrice => prevPrice >= props.price ? prevPrice-props.price : 0)
        setQuantity(prevQuantity => prevQuantity >= 1 ? prevQuantity-1 : 0)
        props.totalPrice(prev => prev >= props.price ? prev-props.price : 0)
    }

    return(
        <div className="cart--item--container">
            <div className="cart--image--container">
                <img src={require(`../images/${props.img}`)}></img>
            </div>
            <div style={{width: "65%", paddingLeft: "20px"}}>
                {props.sale && <div className="cart--sale--flag" style={{marginLeft: "10px"}}>save $5.00</div>}
                <h1 className="recipe--details" style={{whiteSpace: "nowrap",overflow: "hidden", textOverflow: "ellipsis", fontSize: "24px", marginBlockStart: "5px"}}>
                    {props.title}
                </h1>
                <div style={{marginLeft: "10px"}}>
                    <h3 className="cart--price">{`$${price.toFixed(2)}`}</h3>
                </div>
                <div className="product--quantity" style={{marginLeft: "10px"}}>
                    <button className="quantity--button" onClick={decrease}>
                        <h4>-</h4>
                    </button>
                    <div className="quantity--container">
                        <h3>{quantity}</h3>
                    </div>
                    <button className="quantity--button" onClick={increase}>
                        <h4>+</h4>
                    </button>
                </div>
            </div>
        </div>
    )
}
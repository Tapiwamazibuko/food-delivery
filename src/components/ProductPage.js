import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronDown, faShip, faMaximize } from "@fortawesome/free-solid-svg-icons";

export default function ProductPage(props){
    const [extra1, setExtra1] = React.useState(false);
    const [quantity, setQuantity] = React.useState(0);
    const [price, setPrice] = React.useState(0);

    function increase(){
        setPrice(prevPrice => prevPrice+props.price)
        setQuantity(prevQuantity => prevQuantity+1)
    }

    function decrease(){
        setPrice(prevPrice => prevPrice >= props.price ? prevPrice-props.price : 0)
        setQuantity(prevQuantity => prevQuantity >= 1 ? prevQuantity-1 : 0)
    }

    function handleChange(event){
        const {name, value, type} = event.target
        setExtra1(value)
    }

    const stillLoading = async () => {
        setTimeout(() => {  document.getElementById("cartAdded").style.display = "none" }, 2000);
      }

    function addToCart(event){
        const {name, value, type} = event.target
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.getElementById("cartAdded").style.display = "flex"
        stillLoading()
        
    }
    return(
        <div>
            <div id="cartAdded" className="added--to--cart">
                <h1>Item successfully Added to the Cart!</h1>
            </div>
            <div className="product--background">
            <div className="product--image">
                <button type="button" className="maximize--button">
                    <FontAwesomeIcon icon={faMaximize}/>
                </button>
                <img src={require(`../images/${props.img}`)}/>
            </div>
            <div className="product--info">
                <div className="product--title">
                    <h1>{props.title}</h1>
                </div>
                <div className="recipe--price" style={{marginBottom: "20px"}}>
                    <h5 style={{color: "#C90D12",  marginBlockStart: "10px"}}>$</h5>
                    <h4 style={{color: "#C90D12", marginBlockStart: "10px"}} >{props.price.toFixed(2)}</h4>
                    <h5 style={{color: "gray", marginBlockStart: "10px", fontWeight: "200"}}>{`per ${props.measurement}`}</h5>
                    <h5 style={{color: "gray", marginBlockStart: "10px", fontWeight: "200"}}>{`(Serves ${props.serving})`}</h5>
                </div>
                <div style={{marginBottom: "30px"}}>
                    <div className="product--dropdown">
                        <h1>Description</h1>
                        <FontAwesomeIcon icon={faChevronDown} style={{color: "#C90D12"}}/>
                    </div>
                    <div className="product--dropdown">
                        <h1>Product Specs</h1>
                        <FontAwesomeIcon icon={faChevronDown} style={{color: "#C90D12"}}/>
                    </div>
                    <div className="product--dropdown">
                        <h1>Notes</h1>
                        <FontAwesomeIcon icon={faChevronDown} style={{color: "#C90D12"}}/>
                    </div>
                </div>
                <div>
                    <h5 className="quantity--title">QUANTITY</h5>
                    <div className="product--quantity">
                        <button className="quantity--button" onClick={decrease}>
                            <h4>-</h4>
                        </button>
                        <div className="quantity--container" style={{height: "40px"}}>
                            <h3 style={{fontSize: "20px", marginTop: "4px"}}>{quantity}</h3>
                        </div>
                        <button className="quantity--button" onClick={increase}>
                            <h4>+</h4>
                        </button>
                        <div>{`$${price.toFixed(2)}`}</div>
                    </div>
                </div>
                <div>
                    <h5 className="quantity--title">EXTRAS</h5>
                    <div  className="product--quantity">
                        <div className="product--extras">
                            <input
                                type="checkbox" id="extra1"
                                value={extra1}
                                name="extra1"
                                onChange={handleChange}
                            ></input>
                            <FontAwesomeIcon icon={faShip}/>
                            <h4>Cut in half and cleaned</h4>
                        </div>
                        <div className="product--extras">
                            <input
                                type="checkbox" id="extra1"
                                value={extra1}
                                name="extra1"
                                onChange={handleChange}
                            ></input>
                            <FontAwesomeIcon icon={faShip}/>
                            <h4>Cut in half and cleaned</h4>
                        </div>
                        <div className="product--extras">
                            <input
                                type="checkbox" id="extra1"
                                value={extra1}
                                name="extra1"
                                onChange={handleChange}
                            ></input>
                            <FontAwesomeIcon icon={faShip}/>
                            <h4>Cut in half and cleaned</h4>
                        </div>
                    </div>
                </div>
                <button type="button" className="add--to--cart" onClick={addToCart}>
                    Add to Cart
                    <FontAwesomeIcon icon={faCartShopping}/>
                </button>
            </div>
            </div>
        </div>
        
    )
}
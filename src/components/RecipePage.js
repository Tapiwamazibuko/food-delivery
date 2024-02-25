import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faBowlRice, faUserGroup, faUtensils, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function RecipePage(props){
    const [allSelected, setAllSelected] = React.useState(false);
    const [price, setPrice] = React.useState(0);

    function selectAll(){
        var ele=document.getElementsByName('chk');  
        for(var i=0; i<ele.length; i++) {  
            if(allSelected==true)  {
                ele[i].checked = false;
                var itemPrice = props.ingredients[i].price
                setPrice(prevPrice => {
                    return (prevPrice-itemPrice) < 0 ? 0 : (prevPrice-itemPrice)
                })
            } else {
                if(!ele[i].checked){
                    ele[i].checked = true;
                    var itemPrice = props.ingredients[i].price
                    setPrice(prevPrice => prevPrice+itemPrice)
                }   
            }
        };
        setAllSelected(prev => !prev)

    }

    function changePrice(event){
        const {name, value, type, checked, id} = event.target
        if(checked === true){
            setPrice(prevPrice => prevPrice+props.ingredients[(id-1)].price)
        }else {
            setPrice(prevPrice => prevPrice-props.ingredients[(id-1)].price < 0 ? 0 : prevPrice-props.ingredients[(id-1)].price)
        }
    }

    const dataItems = props.ingredients.map( data => {
        return <div style={{marginBottom: "10px", display: "flex", flexDirection: "row", alignItems: "center"}} key={data.id}>
            <input
                type="checkbox" id={data.id}
                name="chk"
                className="recipe--checkbox"
                key={data.id} onChange={changePrice}></input>
            <label className="checkbox--label">{data.title}</label>
        </div>
    })

    const listItems = props.essentials.map(data => {
        return <li key={data} className="pantry--essentials" style={{marginBottom: "10px"}}>
            {data}
        </li>
    })
    return(
        <div className="product--background">
            <div className="left--pane">
                <div  style={{marginBottom: "20px"}}>
                   <h1 className="recipe--details">Details</h1> 
                   <div className="recipe--difficluty">
                        <FontAwesomeIcon icon={faGauge}/>
                        <h4>Difficulty: </h4>
                        <h4 className="recipe--difficulty-level">{props.difficulty}</h4>
                    </div>
                    <div className="recipe--difficluty" >
                        <FontAwesomeIcon icon={faBowlRice} style={{color: "#C90D12"}}/>
                        <h4>Ready in:</h4>
                        <h4 className="recipe--difficulty-level">{props.time}</h4>
                    </div>
                    <div className="recipe--difficluty">
                        <FontAwesomeIcon icon={faUserGroup} style={{color: "#C90D12"}}/>
                        <h4>Serves:</h4>
                        <h5 className="recipe--difficulty-level">{props.serving}</h5>
                    </div>
                </div>
                <div>
                    <h1 className="recipe--details">Ingredients</h1>
                    <button type="button" className="add--all--to--cart">
                        <h4>{`Add all to Cart - $${price.toFixed(2)}`}</h4> 
                        <FontAwesomeIcon icon={faCartShopping}/>
                    </button> 
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <input
                                type="checkbox" id="selectAll"
                                name="selectAll"
                                onChange={selectAll}
                                className="recipe--checkbox"
                        ></input>
                        <label className="checkbox--label">Select All</label>
                    </div>
                    <span className="line"/>
                    {dataItems}
                </div>
                <div>
                    <h2 className="recipe--details">Pantry Essentials</h2>
                    <h4 className="pantry--essentials">Products you need to complete the dish</h4>
                    <ul>
                        {listItems}
                    </ul>
                </div>
                <div>
                    <h1 className="recipe--details">Author</h1>
                </div>
            </div>
            <div className="right--pane">
                <div>
                    <div className="recipe--difficluty">
                        <FontAwesomeIcon icon={faUtensils} style={{color: "#C90D12"}}/>
                        <h4>Prep Time</h4>
                        <h5 className="recipe--difficulty-level">{props.prepTime}</h5>
                    </div>
                    <button type="button" className="recipe--divider"/>
                </div>
                <div>
                    <h1 className="recipe--details">Overview</h1>
                    <h3 className="overview--text">{props.overview}</h3>
                </div>
                <div className="recipe--image">
                    <img src={require(`../images/${props.img}`)}/>
                </div>
            </div>
        </div>
    )
}
import { faChevronRight, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useEffect} from "react";
import seafoodData from "../data/seafoodData";
import SearchItem from "./SearchItem";
import categoriesData from "../data/categoriesData";
import cookingData from "../data/cookingData";
import { Form, useLoaderData, useSubmit } from "react-router-dom";
import { matchSorter } from "match-sorter";

export async function loader({ request }) {
    const url = new URL(request.url);
    const search = url.searchParams.get("search");
    const products = await getProducts(search);
    const categories = await getCategories(search);
    const cookings = await getCookings(search);
    return { products, categories, cookings , search };
  }

export async function getProducts(query) {
    await fakeNetwork(`getProducts:${query}`);
    let products = seafoodData;
    if (query) {
        products = matchSorter(products, query, { keys: ["title"] });
    }
    else{
        products= []
    }
    return products;
}

export async function getCategories(query) {
    await fakeNetwork(`getCategories:${query}`);
    let categories = categoriesData;
    if (query) {
        categories = matchSorter(categories, query, { keys: ["title"] });
    }
    else{
        categories = []
    }
    return categories;
}

export async function getCookings(query) {
    await fakeNetwork(`getCookings:${query}`);
    let cookings = cookingData;
    if (query) {
        cookings = matchSorter(cookings, query, { keys: ["title"] });
    }
    else {
        cookings = []
    }
    return cookings;
}

export default function Search(){
    let { products, categories, cookings , search } = useLoaderData();
    const submit = useSubmit();
    
    if(!products){
        products = []
        categories = []
        cookings = []
        search = ""
    }

    useEffect(() => {
        document.getElementById("search").value = search;
      }, [search]);

    const productItems = products.map(data =>{
        return <SearchItem
                    img={data.img}
                    title={data.title}
                    serving={data.serving}
                    key={data.id}
                />
    })

    const categoriesItems = categories.map(data =>{
        return <SearchItem
                    img={data.img}
                    title={data.title}
                    key={data.id}
                />
    })

    const dataItems = cookingData.slice(1, 4);
    const cookingDataItems= cookings.map(data => {
        return <SearchItem
                    img={data.img}
                    title={data.title}
                    key={data.id}
                />
    })

    function closeSearch(){
        document.getElementById("search").style.height === "600px" ? document.getElementById("search").style.display = "none" : document.getElementById("search").style.display = "flex";
        document.getElementById("search").style.height = document.getElementById("search").style.height === "600px" ? "0px" : "600px" ;
        document.getElementById("search").style.width = "60%";
    }

    return(
        <div id="search" className="search--container">
            <button className="search--close" onClick={closeSearch}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="form" style={{marginTop: "20px"}}>
                <Form id="search-form" role="search">
                    <span style={{border: "1px solid rgba(149, 157, 165, 0.2)"}}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "gray"}}/>
                        <input
                            type="search" id="search"
                            className="form--input"
                            aria-label="Search website"
                            name="search"
                            defaultValue={search}
                            placeholder="Search..."
                            onChange={(event) => {
                                const isFirstSearch = search == null;
                              submit(event.currentTarget.form, {
                                replace: !isFirstSearch,
                              });
                              }}
                        />
                        <button>Search</button>
                    </span>
                </Form>
            </div>

            <div className="search--content">
                {productItems.length > 0 &&
                <div>
                    <h4 className="search--text" style={{fontSize: "12px", letterSpacing: "2px", marginLeft: "20px"}}>TOP RESULTS</h4>
                    {productItems}
                    <button className="search--button">
                        <h2>View all Products</h2>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </button>
                </div>}
                {(categoriesItems.length > 0 || cookingDataItems.length > 0) &&
                <div className="second--search">
                    <h4 className="search--text" style={{fontSize: "12px", letterSpacing: "2px", marginLeft: "20px"}}>CATEGORIES</h4>
                    {categoriesItems}
                    <h4 className="search--text" style={{fontSize: "12px", letterSpacing: "2px", marginLeft: "20px"}}>RECIPES</h4>
                    {cookingDataItems}
                    <button className="search--button">
                        <h2>View all Recipes</h2>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </button>
                </div> }
            </div>
        </div>
    )
}

let fakeCache = {};

async function fakeNetwork(key) {
    if (!key) {
      fakeCache = {};
    }
  
    if (fakeCache[key]) {
      return;
    }
  
    fakeCache[key] = true;
    return new Promise(res => {
      setTimeout(res, Math.random() * 800);
    });
  }
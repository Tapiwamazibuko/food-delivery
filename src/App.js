import './App.css';
import Header from './components/Header';
import MainSlider from './components/MainSlider';
import mainData from './data/mainData';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CardCarousel from './components/CardCarousel';
import weeklySpecialData from './data/weeklySpecialData';
import browseByCookingTimeData from './data/browseByCookingTimeData';
import InfoCarousel from './components/InfoCarousel';
import cookingTimeData from './data/cookingTimeData';
import cuisineData from './data/cuisineData';
import seafoodData from './data/seafoodData';
import cookingData from './data/cookingData';
import SubscribeForm from './components/SubscribeForm';
import Footer from './components/Footer';
import Menu from './components/Menu';
import seafoodMenuData from './data/seafoodMenuData';
import Cart from './components/Cart';
import Search from "./components/Search";
import { useState, useRef, useEffect } from "react";
import React from 'react';
import moreMenuData from "./data/moreMenuData";


function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);
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
        height: "auto",
        minHeight: "100%",
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

  const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-300px" }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
      console.log(isIntersecting);
      if (isIntersecting) {
        ref.current.querySelectorAll("div").forEach((el) => {
          el.classList.add("slide-in");
        });
      } else {
        ref.current.querySelectorAll("div").forEach((el) => {
          el.classList.remove("slide-in");
        });
      }
    }, [isIntersecting]);

  const mainSliderData = mainData.map( data => {
    return <MainSlider
              key={data.id}
              title={data.title}
              text={data.text}
              img={data.img}
            />
  })

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
      <Carousel showThumbs={false}> 
        {mainSliderData}
      </Carousel> 
      <main ref={ref} style={{backgroundColor: "#DADADA"}}>
        <CardCarousel 
          icon={weeklySpecialData[0].icon}
          firstTitle={weeklySpecialData[0].firstTitle}
          secondTitle={weeklySpecialData[0].secondTitle}
          description={weeklySpecialData[0].description}
          data={seafoodData}
          type="recipe"
        />
        <InfoCarousel 
            icon={browseByCookingTimeData[0].icon}
            firstTitle={browseByCookingTimeData[0].firstTitle}
            secondTitle={browseByCookingTimeData[0].secondTitle}
            description={browseByCookingTimeData[0].description}
            data={cookingTimeData}
        />
        <CardCarousel 
            icon={weeklySpecialData[1].icon}
            firstTitle={weeklySpecialData[1].firstTitle}
            secondTitle={weeklySpecialData[1].secondTitle}
            description={weeklySpecialData[1].description}
            data={seafoodData}
            type="recipe"
          />
        <InfoCarousel 
            icon={browseByCookingTimeData[1].icon}
            firstTitle={browseByCookingTimeData[1].firstTitle}
            secondTitle={browseByCookingTimeData[1].secondTitle}
            description={browseByCookingTimeData[1].description}
            data={cuisineData}
          />
        <CardCarousel 
            icon={weeklySpecialData[2].icon}
            firstTitle={weeklySpecialData[2].firstTitle}
            secondTitle={weeklySpecialData[2].secondTitle}
            description={weeklySpecialData[2].description}
            data={cookingData}
            type="product"
        />
      </main>
      <SubscribeForm/>
      <Footer/>
    </div>
  );
}

export default App;

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

function App() {
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
      <Header></Header>
      <Menu 
        id="seafoodMenu"
        data={seafoodMenuData}
      />
      <Carousel> 
      {mainSliderData}
      </Carousel> 
      <CardCarousel 
        icon={weeklySpecialData[0].icon}
        firstTitle={weeklySpecialData[0].firstTitle}
        secondTitle={weeklySpecialData[0].secondTitle}
        description={weeklySpecialData[0].description}
        data={seafoodData}
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
      />
      <SubscribeForm/>
      <Footer/>
    </div>
  );
}

export default App;

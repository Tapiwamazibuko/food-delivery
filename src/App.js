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
      <Carousel> 
      {mainSliderData}
      </Carousel> 
      <CardCarousel 
        icon={weeklySpecialData[0].icon}
        firstTitle={weeklySpecialData[0].firstTitle}
        secondTitle={weeklySpecialData[0].secondTitle}
        description={weeklySpecialData[0].description}
      />
      <InfoCarousel 
        icon={browseByCookingTimeData.icon}
        firstTitle={browseByCookingTimeData.firstTitle}
        secondTitle={browseByCookingTimeData.secondTitle}
        description={browseByCookingTimeData.description}
      />
      <CardCarousel 
        icon={weeklySpecialData[1].icon}
        firstTitle={weeklySpecialData[1].firstTitle}
        secondTitle={weeklySpecialData[1].secondTitle}
        description={weeklySpecialData[1].description}
      />
    </div>
  );
}

export default App;

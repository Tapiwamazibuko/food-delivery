import './App.css';
import Header from './components/Header';
import MainSlider from './components/MainSlider';
import mainData from './data/mainData';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CardCarousel from './components/CardCarousel';
import weeklySpecialData from './data/weeklySpecialData';
import cookingTimeData from './data/cookingTimeData';
import InfoCard from './components/InfoCard';

function App() {
  const mainSliderData = mainData.map( data => {
    return <MainSlider
              key={data.id}
              title={data.title}
              text={data.text}
              img={data.img}
            />
  })

  const infoCards = cookingTimeData.map( data => {
    return <InfoCard 
              icon={data.icon}
              title={data.title}
              description={data.description}
          />
  })

  return (
    <div>
      <Header></Header>
      <Carousel> 
      {mainSliderData}
      </Carousel> 
      <CardCarousel 
        icon={weeklySpecialData.icon}
        firstTitle={weeklySpecialData.firstTitle}
        secondTitle={weeklySpecialData.secondTitle}
        description={weeklySpecialData.description}
      />
      {infoCards}
    </div>
  );
}

export default App;

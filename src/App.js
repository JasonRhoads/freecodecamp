import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import LoadMoreData from './components/load-more-data';

function App() {
  return (
    <div className='App'>

      {/* Accordian Component */}
      {/* <Accordian /> */}

      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component*/}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image slider Component*/}
      {/* <ImageSlider 
        url={"https://picsum.photos/v2/list"} 
        page={"1"} 
        limit={"10"}/> */}
      
      {/* Load More Data Component*/}
      <LoadMoreData />
    </div>
  );
}

export default App;

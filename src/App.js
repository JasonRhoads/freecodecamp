import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';

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
      {/* <LoadMoreData /> */}

      {/* Tree View Component / Menu UI Component / Recursive Menu Component */}
      {/* <TreeView menus={menus}/> */}

      {/* QR Code Generator Component */}
      {/* <QRCodeGenerator /> */}

      {/* Light and Dark Mode Component */}
      <LightDarkMode />
    </div>
  );
}

export default App;

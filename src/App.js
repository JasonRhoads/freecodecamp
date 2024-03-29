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
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutocomplete from './components/search-autocomplete-with-api'
import TicTacToe from './components/tic-tac-toe';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag';
import UseFetchHookTest from './components/use-fetch/test';
import UseOnClickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';

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
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator Component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* Custom Tabs Component */}
      {/* <TabTest /> */}

      {/* Custom Modal Popup Component */}
      {/* <ModalTest /> */}

      {/* Github Profile Finder Component */}
      {/* <GithubProfileFinder /> */}


      {/* Search Autocomplete with API Component */}
      {/* <SearchAutocomplete /> */}

      {/* Tic Tac Toe Component */}
      {/* <TicTacToe /> */}
      

      {/* Feature Flag Component */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch - Custom Hook */}
      {/* <UseFetchHookTest /> */}

      {/* useOnClickOutside Hook */}
      {/* <UseOnClickOutsideTest /> */}

      {/* useWindowResize Hook */}
      {/* <UseWindowResizeTest /> */}

      {/* Scroll to top and bottom component */}
      <ScrollToTopAndBottom />
    </div>
  );
}

export default App;


const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordian: true,
    showTreeView: true,
    showTabs : true
  };

  function featureFlagsDataServiceCall(){

    return new Promise((resolve, reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject('Some error occured! Please trt again.')
    })
  }

  export default featureFlagsDataServiceCall;
//Ссылка на задание - https://paper.dropbox.com/published/4CvTLWanGKizevyDJSEvob3

function App(props) {
      const isDay = props.hours < 18;

      return(isDay ? "сейчас день": "сейчас вечер");

};

App(24);




export default App;

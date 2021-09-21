import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BadComponent from "./BadComponent";
import SomeBlock from "./SomeBlock"



ReactDOM.render(
  <React.StrictMode>
    <App />
      <BadComponent/>
      <SomeBlock/>

  </React.StrictMode>,
  document.getElementById('root')
);


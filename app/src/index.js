
import './index.css';

import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import thunk from "redux-thunk";
import React from 'react'


import Pokemon from './components/pokemon'
import {pokeReducer} from './reducers/pokeReducer'



const store = createStore(pokeReducer,applyMiddleware(logger,thunk));

function App() { 

  return (
    <div className="App">              
      
      <Pokemon />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

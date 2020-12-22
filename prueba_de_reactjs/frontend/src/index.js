import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './Redux/store'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./CSS/styles.css"

import { register } from 'timeago.js';
import locale from "timeago.js/lib/lang/es";
register("es_ES", locale);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

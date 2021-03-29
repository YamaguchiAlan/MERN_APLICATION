import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './Redux/store'
import axios from 'axios'

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CSS/styles.css"
import onScroll from './onScroll'
import './Media-Queries'

onScroll()

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api`
axios.defaults.withCredentials = true

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
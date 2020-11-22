import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import moduleName from 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';

import { register } from 'timeago.js';
import locale from "timeago.js/lib/lang/es";
register("es_ES", locale);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

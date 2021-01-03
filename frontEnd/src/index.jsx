import React from 'react';
import App from './app.jsx';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {store} from "./store/store.js"; 
import 'normalize.css';

ReactDOM.render(
        <Provider store={store}>
           <App/>
        </Provider>
    ,document.getElementsByClassName('App')[0]
);
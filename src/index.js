import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

axios.interceptors.request.use(reqConfig => {
    console.log(reqConfig)
    // Edit request config before returning
    return reqConfig
},  err => {
    console.log(err)
    return Promise.reject(err)
});

axios.interceptors.response.use(resConfig => {
    console.log(resConfig)
    // Edit response config before returning
    return resConfig
}, err => {
    console.log(err)
    return Promise.reject(err)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

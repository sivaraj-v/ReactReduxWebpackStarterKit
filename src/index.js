import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App/App';
import Store from './Redux/Store'

ReactDOM.render(
    <Provider id='Provider' store={Store} style={{ height:'100vh', padding:0 }}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept();
}
  
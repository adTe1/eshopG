// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';        // Redux Provider
import { BrowserRouter } from 'react-router-dom'; // Single BrowserRouter
import store from './store';                   // Your Redux store
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>            {/* 1) Provide Redux store to the entire app */}
    <BrowserRouter>                   {/* 2) One BrowserRouter for your whole app */}
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();

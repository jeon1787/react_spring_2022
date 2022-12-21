import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //css import
import MyReactApp from './App'; //MyReactApp component import
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyReactApp />
  </React.StrictMode>
);

reportWebVitals();

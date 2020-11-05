import React from 'react'; // Dit moeten we importeren om JSX te kunnen herkennen en vertalen
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MyInfo from "./MyInfo"

ReactDOM.render(
<MyInfo />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
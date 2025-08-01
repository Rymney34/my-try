import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Header} from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import AutoLayoutExample from './AutoLayout';
import DashboardLayoutBasic from './muiTest';

const elem = React.createElement('h2',null, 'Hello world!');



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <AutoLayoutExample />
      <DashboardLayoutBasic/>
      <App />
 
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

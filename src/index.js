import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/ConfigStore';

// i18n

import './i18n';

// setup SignalR 

import * as signalR from '@aspnet/signalr'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DOMAIN_WS } from './utils/Setting/config';

export const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN_WS}DatVeHub`).configureLogging(signalR.LogLevel.Information).build();
connection.start().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}).catch(err => {
  console.log(err);
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

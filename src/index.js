import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/app';
import './styles/main-styles';

ReactDOM.render(
  // <Provider>
  <HashRouter basename="/">
    <App />
  </HashRouter>,
  // </Provider>,
  document.getElementById('root'),
);

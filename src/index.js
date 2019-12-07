import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  // <Provider>
  <HashRouter basename="/">
    <h1>Init</h1>
  </HashRouter>,
  // </Provider>,
  document.getElementById('root'),
);

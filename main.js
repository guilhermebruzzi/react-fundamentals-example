import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import "!style!css!./index.css";

ReactDom.render(
  <App />,
  document.querySelector('#app')
);

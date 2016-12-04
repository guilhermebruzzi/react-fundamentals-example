import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div styleName="my-container">Hello World</div>
    );
  }
}

export default CSSModules(App, styles);

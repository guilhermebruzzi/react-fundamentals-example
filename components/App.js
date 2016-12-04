import React, { Component } from 'react';

// import CSSModules from 'react-css-modules';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.myContainer}>Hello World</div>
    );
  }
}

export default App;

// export default CSSModules(App, styles);

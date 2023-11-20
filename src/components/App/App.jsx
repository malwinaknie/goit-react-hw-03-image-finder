import React, { Component } from 'react';
import styles from './app.module.css'
import Searchbar from '../Searchbar/Searchbar';


class App extends Component {
  render() {
    return (
      <div className={(styles['App'])}>
        <Searchbar />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Shop from './containers/Shop/Shop';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <p1>Welcome to my shop !</p1>
        <Shop />
      
      
      </div>
    );
  }
}

export default App;

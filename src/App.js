import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';
import Shop from './containers/Shop/Shop';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Shop />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

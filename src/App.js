import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Shop from './containers/Shop/Shop';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


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

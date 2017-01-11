import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Rackulator from './components/Rackulator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="images/Rockulator_logo_white.png" className="App-logo" alt="logo" />
          <h5>Welcome to Rackulator</h5>
        </div>
        <Rackulator />
      </div>
    );
  }
}

export default App;

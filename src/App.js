import React, { Component } from 'react';
import Hello from './Hello/Hello';
import Navbar from './Nav/Navbar';
import './index.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hello />
      </div>
    );
  }
}

export default App;

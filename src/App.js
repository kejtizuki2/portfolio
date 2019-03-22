import React, { Component } from 'react';
import Hello from './Hello/Hello';
import Navbar from './Nav/Navbar';
import Project from './Project/Project';
import './index.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hello />
        <div className="gridContainer">
          <Project title="SunWise" image={require("./assets/img/SunWise/sunwise-main1.png")} />
          <Project title="Dogs training app" image={require("./assets/img/Dogs/dogo.png")} className="gridCellCentered"/>
        </div>
        <div className="gridContainer">
          <Project title="Mikeller friends" image={require("./assets/img/Mikeller/main.png")} />
          <Project title="Parallel coordinates" image={require("./assets/img/DataVis/main.png")} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Hello from './Hello/Hello';
import Navbar from './Nav/Navbar';
import Project from './Project/Project';
import Experience from './Experience/Experience';
import './index.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hello />
        <div className="gridContainer">
          <Project title="SunWise" image={require("./assets/img/SunWise/sunwise-main1.png")}
          description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
          keywords="UX, UI, User Testing, Personal Informatics" />
          <Project title="Dogs training app" image={require("./assets/img/Dogs/dogo.png")}
          className="gridCellCentered"
          description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
          keywords="UX, UI, User Testing, Personal Informatics"
          />

        </div>
        <div className="gridContainer">
          <Project title="Mikeller friends" image={require("./assets/img/Mikeller/main.png")}
          description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
          keywords="UX, UI, User Testing, Personal Informatics"/>
          <Project title="Parallel coordinates" image={require("./assets/img/DataVis/main.png")}  description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
            keywords="UX, UI, User Testing, Personal Informatics" />
        </div>
        <Experience />
      </div>
    );
  }
}

export default App;

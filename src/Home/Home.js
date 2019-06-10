import React, { Component } from 'react';
import Hello from '../Hello/Hello';
import Navbar from '../Nav/Navbar';
import Project from '../Project/Project';
import Experience from '../Experience/Experience';
import Skill from '../Skill/Skill';
import Footer from '../Footer/Footer';
import { BrowserRouter as Link, Router, Route } from "react-router-dom";
import '../index.scss';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
        <div className="gridContainer">
          <Link to="/sunwise">
          <Project title="SunWise" image={require("../assets/img/SunWise/sunwise-main1.png")}
          className="gridCellCentered"
          description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
          keywords="UX, UI, User Testing, Interaction Design"
          history={this.props.history}
          redirect="sunWise"
          />

          </Link>
          <Project title="SF movies visualization" image={require("../assets/img/SF/main.png")}
          description="Visualization of movies locations over years in San Francisco"
          keywords="Data Visualization, Coding"
          history={this.props.history}
          redirect="SFdataVis"
        />


        </div>
        <div className="gridContainer">

          <Link to="/dogs">
          <Project title="Dogs training app" image={require("../assets/img/Dogs/dogo.png")}
          className="gridCellCentered"
          description="Keep your dog engaded and motivated even when you're not at home"
          keywords="UX, UI, User Testing, Interaction Design"
          history={this.props.history}
          redirect="dogsApp"
          />
          </Link>


          <Project title="Mikeller friends" image={require("../assets/img/Mikeller/main.png")}
          description="Mikeller app"
          keywords="UX, Prototyping"
          history={this.props.history}
          redirect="mikellerApp"
        />

        </div>

        <div className="gridContainer">
        <Project title="Brushing techniques for parallel coordinates" image={require("../assets/img/DataVis/main3.png")}
          description="Research and user testing of different brushing techniques for parallel coordinates"
          keywords="UI, UX, Data Visualization, Coding, Research"
          history={this.props.history}
          redirect="parallelCoordinates"
        />

        <Project
          image={require("../assets/img/Costa/main.png")}
          title="New Costa cruise experience"
          history={this.props.history}
          description="Experience costa"
          keywords="UI, Ideation, Concept, Rapid prototyping"
          redirect="costa"
        />
        </div>


        <Experience />


      </div>
    );
  }
}

export default Home;

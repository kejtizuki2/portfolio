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
          <Link to="/augmentedHearing">
          <Project title="Augmented Hearing" image={require("../assets/img/AH/web.png")}
          className="gridCellCentered"
          description="Augmented hearing app created as a digital tool to interact with a hearing aid."
          keywords="UI, UX, Concept, Prototyping"
          history={this.props.history}
          redirect="augmentedHearing"
          />
          </Link>

          <Link to="/sunwise">
          <Project title="SunWise" image={require("../assets/img/SunWise/sunwise-main1.png")}
          className="gridCellCentered"
          description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
          keywords="UX, UI, User Testing, Interaction Design"
          history={this.props.history}
          redirect="sunWise"
          />
          </Link>

        </div>

        <div className="gridContainer">


          <Project title="SF movies visualization" image={require("../assets/img/SF/main.png")}
            description="Visualization of movies locations over years in San Francisco"
            keywords="Data Visualization, Coding"
            history={this.props.history}
            redirect="SFdataVis"
          />


          <Link to="/dogs">
          <Project title="Dogs training app" image={require("../assets/img/Dogs/dogo.png")}
          className="gridCellCentered"
          description="Keep your dog engaded and motivated even when you're not at home"
          keywords="UX, UI, User Testing, Interaction Design"
          history={this.props.history}
          redirect="dogsApp"
          />
          </Link>

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
          keywords="UI, Ideation, Concept, Prototyping"
          redirect="costa"
        />
        </div>

        <div className="gridContainer">
        <Project title="Mikeller friends" image={require("../assets/img/Mikeller/main.png")}
        description="Mikeller app"
        keywords="UX, Prototyping"
        history={this.props.history}
        redirect="mikellerApp"
        />

        </div>


        <Experience />


      </div>
    );
  }
}

export default Home;

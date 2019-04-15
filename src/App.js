import React, { Component } from 'react';
import Hello from './Hello/Hello';
import Navbar from './Nav/Navbar';
import Project from './Project/Project';
import Experience from './Experience/Experience';
import Skill from './Skill/Skill';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import ProjectOverview from './ProjectOverview/ProjectOverview';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.scss';


class App extends Component {
  render() {
    return (
      <Router>

      <Navbar />

      <Route exact path="/" component={Home} />
      <Route exact path="/sunWise" component={() => <ProjectOverview
        bgImage={require("./assets/img/SunWise/sunwise-main1.jpg")}
        title="SunWise"
        history={this.props.history}
        description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
        keywords="UX, UI, User Testing, Interaction Design"
        tools="Adobe Photoshop, Adobe Illustrator, React Native"
      />}
      />
      <Route exact path="/dogsApp" component={() => <ProjectOverview
        bgImage={require("./assets/img/Dogs/dogo.png")}
        title="Dogs training app"
        history={this.props.history}
        description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
        keywords="UX, UI, User Testing, Interaction Design"
        tools="Adobe Photoshop, Adobe Illustrator"
      />}
      />
      <Route exact path="/SFdataVis" component={() => <ProjectOverview
        bgImage={require("./assets/img/SF/main.png")}
        title="San Francisco Data Visualization"
        history={this.props.history}
        description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
        keywords="UX, Prototyping"
        tools="Python, HTML, CSS, D3.js"
      />}
      />
      <Route exact path="/mikellerApp" component={() => <ProjectOverview
        bgImage={require("./assets/img/Mikeller/main.png")}
        title="Mikeller app"
        history={this.props.history}
        description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
        keywords="UI"
        tools="Adobe Illustrator"
      />}
      />
      <Route exact path="/parallelCoordinates" component={() => <ProjectOverview
        bgImage={require("./assets/img/DataVis/main3.png")}
        title="Parallel coordinates"
        history={this.props.history}
        description="Visualization of movies locations over years in San Francisco"
        keywords="Data Visualization"
        tools="Python, HTML, CSS, D3.js"
      />}
      />

      <Footer />

    </Router>
    );
  }
}

export default App;

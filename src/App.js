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

      <Route exact path="/" component={Home} />
      <Route exact path="/sunWise" component={() => <ProjectOverview image={require("./assets/img/SunWise/sunwise-main1.png")} />} />
      <Route exact path="/dogsApp" component={() => <ProjectOverview image={require("./assets/img/Dogs/dogo.png")} />} />
      <Route exact path="/SFdataVis" component={Skill} />
      <Route exact path="/mikellerApp" component={Skill} />
      <Route exact path="/parallelCoordinates" component={Skill} />

    </Router>
    );
  }
}

export default App;

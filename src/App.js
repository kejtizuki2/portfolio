import React, { Component } from 'react';
import Hello from './Hello/Hello';
import Navbar from './Nav/Navbar';
import Project from './Project/Project';
import Experience from './Experience/Experience';
import Skill from './Skill/Skill';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import ProjectOverview from './ProjectOverview/ProjectOverview';
import ProjectSunWise from './ProjectSunWise/ProjectSunWise';
import ProjectMikeller from './ProjectMikeller/ProjectMikeller';
import ProjectDogs from './ProjectDogs/ProjectDogs';
import ProjectCoordinates from './ProjectCoordinates/ProjectCoordinates';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.scss';


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>

      <Route exact path="/" component={Home} />
      <Route exact path="/sunWise" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/SunWise/sunwise-main1.jpg")}
        title="SunWise"
        history={this.props.history}
        description="Protect your skin from high UV index. Know when to stop sunbathing."
        keywords="UX, Digital Design, User Testing"
        tools="Adobe Photoshop, Adobe Illustrator"
        longDesc="This project aims to
develop a mobile application that helps its users minimize the sunshine’s
risks while still enjoying its benefits. The application prevents
sun overexposure by allowing users to track the time they
spend outdoors in relation to the UV Index levels. The project was developed as a part of Personal Data Interaction class at DTU."
/> <ProjectSunWise /></div>}
      />
      <Route exact path="/dogsApp" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/Dogs/dogo.png")}
        title="Dogs training app"
        history={this.props.history}
        description="Keep your dog engaded and motivated even when you're not at home."
        keywords="UX, UI, User Testing, Interaction Design"
        tools="Adobe Photoshop, Adobe Illustrator"
      /><ProjectDogs /></div>}
      />

      <Route exact path="/parallelCoordinates" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/DataVis/main3.png")}
        title="Parallel coordinates"
        history={this.props.history}
        description="Research and user testing of different brushing techniques for parallel coordinates"
        keywords="Data Visualization"
        tools="Python, HTML, CSS, D3.js"
        longDesc="Even though parallel coordinates can successfully solve
the issue of visualizing multidimensional data, they often lead to
overplotting when datasets are too large, making the visualization
illegible and the underlying patterns undiscoverable. This is a huge
problem since people fail to understand the information hidden in
the data when they see nothing but visual clutter. This project aims to
improve the overall user experience when interacting with parallel
coordinates and presents five types of brushing that are specifically
designed to filter the data in different ways."
      /><ProjectCoordinates /></div>}
      />
      <Route exact path="/SFdataVis" component={() => <ProjectOverview
        bgImage={require("./assets/img/SF/main.png")}
        title="San Francisco Data Visualization"
        history={this.props.history}
        description="Visualization of movie locations over years in San Francisco"
        keywords="UX, Prototyping"
        tools="Python, HTML, CSS, D3.js"
      />}
      />
      <Route exact path="/mikellerApp" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/Mikeller/main.png")}
        title="Mikeller app"
        history={this.props.history}
        description="Mikeller app"
        keywords="UI"
        tools="Adobe Illustrator"
      /><ProjectMikeller /></div>}
      />
      <Footer />

    </Router>
    );
  }
}

export default App;

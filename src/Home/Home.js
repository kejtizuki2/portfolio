import React, { Component } from 'react';
import Hello from '../Hello/Hello';
import Navbar from '../Nav/Navbar';
import Project from '../Project/Project';
import Experience from '../Experience/Experience';
import Skill from '../Skill/Skill';
import Footer from '../Footer/Footer';
import {Link, Router, Route } from "react-router-dom";
import '../index.scss';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hello />
        <div className="gridContainer">
          <Link to="/sunwise">
            <Project title="SunWise" image={require("../assets/img/SunWise/sunwise-main1.png")}
            description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
            keywords="UX, UI, User Testing, Personal Informatics, Coding, Data Visualization"></Project>
          </Link>
          <Project title="Dogs training app" image={require("../assets/img/Dogs/dogo.png")}
          className="gridCellCentered"
          description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
          keywords="UX, UI, User Testing, Interaction Design"
          />


        </div>
        <div className="gridContainer">
          <Project title="Mikeller friends" image={require("../assets/img/Mikeller/main.png")}
          description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
          keywords="UX, Prototyping"/>
          <Project title="Parallel coordinates" image={require("../assets/img/DataVis/main3.png")}  description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
            keywords="UI, Data Visualization, Coding" />
        </div>
        <div className="gridContainer">
          <Project title="SF movies visualization" image={require("../assets/img/SF/main.png")}
          description="Visualization of movies locations over years in San Francisco"
          keywords="Data Visualization" />
        </div>
        <Experience />

        <Footer />
      </div>
    );
  }
}

export default Home;

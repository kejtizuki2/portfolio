import React, { Component } from 'react';
import Hello from './Hello/Hello';
import Navbar from './Nav/Navbar';
import Project from './Project/Project';
import Experience from './Experience/Experience';
import Skill from './Skill/Skill';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import './index.scss';


class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <Route exact path="/" component={Home} />
      <Route path="/sunwise" component={Skill} />

    </BrowserRouter>
    );
  }
}

export default App;

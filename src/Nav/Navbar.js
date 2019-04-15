import React from 'react';
import './navbar.scss';

export default class Navbar extends React.Component {

  render() {

    return(
      <nav className="navigation">
        <ul>
          <li>Kasia Żukowska</li>
          <li>Work</li>
          <li>Resume</li>
          <li>Contact me</li>
        </ul>
      </nav>
    )
  }
}

import React from 'react';
import './navbar.scss';

export default class Navbar extends React.Component {

  render() {

    return(
      <nav className="navigation">
        <ul>
          <li>Work</li>
          <li>Contact me</li>
        </ul>
      </nav>
    )
  }
}

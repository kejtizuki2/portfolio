import React from 'react';
import './navbar.scss';

export default class Navbar extends React.Component {

  render() {

    return(
      <nav className="navigation">
        <ul>
          <li><a href="">Work</a></li>
          <li><a href="">Contact me</a></li>
        </ul>
      </nav>
    )
  }
}

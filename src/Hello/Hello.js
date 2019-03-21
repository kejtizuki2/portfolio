import React from 'react';
import './hello.scss';
import {linkedinIcon} from './../assets/img/001-linkedin.png';

export default class Hello extends React.Component {

  render() {

    return(
      <div className="hello">
        <div className="hello-description">Hi! My name is <strong>Katarzyna Zukowska</strong>, I’m a UX designer
        and frontend developer. Currently doing my internship
        in Designit, Copenhagen.
        <div className="icons">
          <a><img src={linkedinIcon} /></a>
          <a><img src="./../assets/img/002-behance.png" /></a>
          <a><img src="./../assets/img/github.png" /></a>
        </div>
        </div>
      </div>
    )
  }
}

import React from 'react';
import './hello.scss';

export default class Hello extends React.Component {

  render() {

    return(
      <div className="hello">
        <div className="hello-description">Hi! My name is <strong>Kasia Żukowska</strong>, I’m a UX designer
        and freelance frontend developer. Currently doing my internship
        in <a href="https://www.designit.com/">Designit, Copenhagen</a>.
        
        <div className="icons">
          <a href="https://www.linkedin.com/in/katarzyna-%C5%BCukowska-23398194/"><img src={require("./../assets/img/001-linkedin.png")} alt="linkedin"/></a>
          <a href="https://www.behance.net/kejtizukife8c"><img src={require("./../assets/img/002-behance.png")} alt="https:/google.com"/></a>
          <a href="https://github.com/kejtizuki"><img src={require("./../assets/img/github.png")} alt="github"/></a>
        </div>
        </div>
      </div>
    )
  }
}

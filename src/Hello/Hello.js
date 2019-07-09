import React from 'react';
import './hello.scss';

export default class Hello extends React.Component {

  render() {

    return(
      <div className="hello">
        <div className="hello-description">Hi! My name is <a href="mailto:kejtizuki@gmail.com" className="link">Kasia Żukowska</a>, I’m a UX designer
        and freelance frontend developer. Currently doing my internship
        in <a href="https://www.designit.com/" className="link">Designit, Copenhagen</a>.

        <div className="icons">
          <a href="https://www.linkedin.com/in/katarzyna-%C5%BCukowska-23398194/"><img src={require("./../assets/img/001-linkedin.png")} alt="linkedin"/></a>
          <a href="https://www.behance.net/kejtizukife8c"><img src={require("./../assets/img/002-behance.png")} alt="https:/google.com"/></a>
          <a href="https://github.com/kejtizuki"><img src={require("./../assets/img/github.png")} alt="github"/></a>
          <a href="https://kejtizuki.cargo.site"><img src={require("./../assets/img/photo.png")} alt="photography portfolio"/></a>
        </div>
        </div>
      </div>
    )
  }
}

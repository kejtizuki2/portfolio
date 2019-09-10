import React from 'react';
import ReactTooltip from 'react-tooltip'
import './hello.scss';

export default class Hello extends React.Component {

  render() {

    return(
      <div className="helloContainer">
      <div className="hello">
        <ReactTooltip className="myTooltip"/>
        <div className="hello-description">Hi! My name is <a href="mailto:kejtizuki@gmail.com" className="link">Kasia Żukowska</a>, I’m a UX designer
        and freelance frontend developer. Currently doing my internship
        in <a href="https://www.designit.com/" className="link">Designit, Copenhagen</a>.

        <div className="icons">
          <a href="https://www.linkedin.com/in/katarzyna-%C5%BCukowska-23398194/" data-tip="My digital CV"><img src={require("./../assets/img/001-linkedin.png")} alt="linkedin"/></a>
          <a href="https://www.behance.net/kejtizukife8c" data-tip="Project space"><img src={require("./../assets/img/002-behance.png")} alt="https:/google.com"/></a>
          <a href="https://github.com/kejtizuki" data-tip="Code playground"><img src={require("./../assets/img/github.png")} alt="github"/></a>
          <a href="https://kejtizuki.cargo.site" data-tip="Photography"><img src={require("./../assets/img/photo.png")} alt="photography portfolio"/></a>
        </div>
        </div>

      </div>
      <div id="workLink">
      <a href="">See my work <img src={require("./../assets/img/arrow-down.png")} alt="arrow" className="icon"/></a>
      </div>

    </div>
    )
  }
}

import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectCosta extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/Costa/main.png")} className="mainImg"/>
        <iframe width={1920/2} height={1080/2} src="https://xd.adobe.com/embed/63c677a1-60d3-4132-757f-49ec3a30178a-15f7/" frameborder="0" allowfullscreen></iframe>
      </div>
    )
  }
}

export default withRouter(ProjectCosta);

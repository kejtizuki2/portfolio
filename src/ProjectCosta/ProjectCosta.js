import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectCosta extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/Costa/main.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Creative Process</h2>  <p>We started our process with
          a brainstorming session and research of the websites offering
similar experiences to Costa. We found that launching such a service is not very far from
launching a restaurant or activities in the city itself.
First, we taught about the customer segment and
formulated the problems related to Costa experience. We understood the complexity of
offering such a service but it allowed us to research on the specific use cases we were
interested about.</p></div>
        <div className="col3"></div>
        </div>

        <div className="row">
        <div className="col7"><h2 className="title">Motivation</h2>  <p>The main motivation is that ships
          are left empty when the travelers get down to visit the cities. Therefore empty spaces and services
          can still be used to generate profit for Costa. We also want to engage people who never went on a cruise
          or are a bit skeptical about it and hesitate to book the full crusie experience.</p></div>
        <div className="col3"></div>
        </div>

        <h2 className="title">Business Model Canvas</h2>
        <img src={require("./../assets/img/Costa/mvp.png")} className="mainImg"/>
        <h2 className="title">Prototype</h2>
          <iframe width={1040} height={693} src="https://xd.adobe.com/embed/63c677a1-60d3-4132-757f-49ec3a30178a-15f7/" frameborder="0" allowfullscreen></iframe>
      </div>
    )
  }
}

export default withRouter(ProjectCosta);

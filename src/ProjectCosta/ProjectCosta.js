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
formulated the problems related to Costa experience. Further, we discussed we understood every
step that customers would take on booking our hop-on
service. Variations such as: “is the customer booking for tonight or days in advance?” “Is the
customer coming with his/her partner or with his/her whole family?” “Is the customer
coming for a full day of activities or for only a specific one?” where thought thoroughly and
addressed in our concept. While tackling these variations we understood the complexity of
offering such a service but it allowed us to research on the specific use cases we were
interested about.</p></div>
        <div className="col3"></div>
        </div>
          <iframe width={1040} height={693} src="https://xd.adobe.com/embed/63c677a1-60d3-4132-757f-49ec3a30178a-15f7/" frameborder="0" allowfullscreen></iframe>
      </div>
    )
  }
}

export default withRouter(ProjectCosta);

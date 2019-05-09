import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectCoordinates extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/Coordinates/main.png")} className="mainImg"/>
      </div>
    )
  }
}

export default withRouter(ProjectCoordinates);

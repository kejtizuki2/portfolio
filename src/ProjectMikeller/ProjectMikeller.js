import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectMikeller extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/Mikeller/presentX.png")} className="mainImg"/>
      </div>
    )
  }
}

export default withRouter(ProjectMikeller);

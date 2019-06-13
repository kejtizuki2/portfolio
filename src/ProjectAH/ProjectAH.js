import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectAH extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/AH/webmain.png")} className="mainImg"/>

        <h2 className="title">Wireframes / Flow</h2>
        <img src={require("./../assets/img/AH/uxmap.png")} className="mainImg"/>


        <img src={require("./../assets/img/AH/presetsView.png")} className="mainImg"/>
        <div className="row">
          <div className="col5"><img src={require("./../assets/img/AH/prototype-preset-card.gif")} className="prototypeImg"/><img src={require("./../assets/img/AH/prototype-choose-filter.gif")} className="prototypeImg"/>
          </div>
          <div className="col5 padding80Left"><h2 className="title">Presets</h2>
          Presets can be accessed either from the preset list or from home screen.
          Home screen shortcut allows user to choose preferred preset without entering the list view. The app
          learns on user's actions and remembers the presets that are used most often. It suggests 4 most often used filters, each form
          different category.
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(ProjectAH);

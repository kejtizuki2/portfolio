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

        <div className="row margin40">
          <div className="col5"><img src={require("./../assets/img/AH/prototype-choose-filter.gif")} className="prototypeImg"/><img src={require("./../assets/img/AH/prototype-preset-card.gif")} className="prototypeImg"/>
          </div>
          <div className="col5 padding80Left verticalCenter"><h2 className="title">Presets</h2>
          Presets can be accessed either home screen or from the preset list.
          Home screen shortcut allows user to choose preferred preset without entering the list view. The app
          learns on user's actions and remembers the presets that are used most often. It suggests 4 most often used filters, each form
          different category.
          </div>
        </div>

        <div className="margin80"><h2 className="title">New preset</h2></div>
        <div className="margin40 row cardsFlowBg">
          <img src={require("./../assets/img/AH/volume.gif")} className="prototypeImg gifImgBorder"/>
          <div className="cards">

            <img src={require("./../assets/img/AH/orientation.png")} className="prototypeImgSmall"/>
            <img src={require("./../assets/img/AH/equalizer.png")} className="prototypeImgSmall"/>
            <img src={require("./../assets/img/AH/label.png")} className="prototypeImgSmall"/>
            <img src={require("./../assets/img/AH/done.png")} className="prototypeImgSmall"/>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(ProjectAH);

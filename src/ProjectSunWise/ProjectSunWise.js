import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectSunWise extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/SunWise/sunwise-main.jpg")} className="mainImg"/>

        <div className="">
          <div className="row">
          <div className="col7">
          <h2 className="title">Motivation</h2>
          Nowadays, the harmful effect of UV radiation is increasing with
      time as a result of the thinning of the ozone layer. Nevertheless,
      people still seem to ignore or forget the warnings communicated
      by the different media channels. Of course, sun rays have some
      positive effect to humans’ biological system, but the negative effects
      outweigh the positive ones. As an example, being exposed to
      sunshine without taking some precautions can cause temporary
      and permanent eye and skin damage.</div>
          <div className="col3"></div>
        </div>

        <div className="">
          <div className="row">
          <div className="col7">
          <h2 className="title">Personal informatics</h2>
          <p>SunWise is designed and developed based on
      the <strong><a href="http://www.personalinformatics.org/docs/lab/2010-chi-ianli-stage-based-model.pdf">Stage-based Model of Personal Informatics System</a></strong>. Its aim
      is to help people realize, be aware and act on the dangers of UV
      exposure.</p>

        <div className="sbm">
          <h3 className="personal">Preparation</h3>
          <p>The users will
          be driven by motivation to measure their sun exposure patterns.
          The system itself is a mobile platform application.</p>
        </div>
        <div className="sbm">
          <h3>Collection</h3>
          <p>In order to be able to analyze user activity and warn the user for
      dangers, some information is needed to be collected. The system
      has to be aware when the user is exposed to sunshine and how big is
      the UV Index. Therefore, during collection phase the users
      will record their data based on those two variables.</p>
        </div>
        <div className="sbm">
          <h3>Integration</h3>
          <p>The data is displayed in the application.</p>
        </div>
        <div className="sbm">
          <h3>Reflection</h3>
          <p>The reflection stage in the system stands for conclusions
      that the user may draw by reading the tips or analyzing the charts
      in order to see patterns.</p>
        </div>
        <div className="sbm">
          <h3>Action</h3>
          <p>The user makes decisions about
      sunbathing actions, such as putting on sunscreen, going to the
      shadow or even stopping sunbathing</p>
        </div></div>
          <div className="col3"></div>
        </div>


  </div>

<h2 className="title">Design Process</h2>

<img src={require("./../assets/img/SunWise/process.png")} className="mainImg"/>



      <div className="iterations">

        <div className="">
          <div className="row">
          <div className="col7">
          <h2 className="title">Phase 1</h2>
          After initial face-to-face user testing adn problem definition the non-functional protoype was created and tested face-to-face with
          the potential users. The following screens were tested:</div>
          <div className="col3"></div>
        </div>
        </div>

          <img src={require("./../assets/img/SunWise/firstPrototype.png")} className="colMax"/>

          <div className="">

            <h2 className="title">Research findings</h2>
            <img src={require("./../assets/img/SunWise/feedback.png")} className="colMax margin40"/>
          </div>
        </div>
        <div className="">
        <div className="row">
          <div className="col7"><h2 className="title">Phase 2</h2><p>Taking into consideration all the issues mentioned above, the
      group proceeded to the second iteration, in which the application
      was redesigned. Apart from implementing the suggestions from
      feedback, we decided that the application has to use principles
      from iOS Human Interface Guidelines.
      The old navigation was replaced with tap bar, which allowed better
      hierarchy of information and application structure. This design
      forced that the title of each screen is shown on the top of the view,
      which helps orientate better where the user is in the application.
      Current UV Index level is displayed in a circular progress bar, instead of a
      simple circle.  Besides the screens that the first
      prototype included, calendar view has been added
      to sum up hours spent on sun during the month.</p></div>
      <div className="col3"></div>
        </div>

      <div className="col-max center margin80">
          <img src={require("./../assets/img/SunWise/screen_home.png")} className="prototypeImg"/>
          <img src={require("./../assets/img/SunWise/statistics.gif")} className="prototypeImg"/>
          <img src={require("./../assets/img/SunWise/screen_calendar.png")} className="prototypeImg"/>
          <img src={require("./../assets/img/SunWise/screen_about.png")} className="prototypeImg"/>
      </div>
      </div>

      </div>

      <h2 className="title margin80">Prototype</h2>
      <div className="prototype">
      <iframe src="https://marvelapp.com/5jgaeg8?emb=1&iosapp=false&frameless=false" width="352" height="801" allowTransparency="true" frameborder="0">
      </iframe>
      </div>

      </div>
    )
  }
}

export default withRouter(ProjectSunWise);

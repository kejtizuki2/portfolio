import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectSunWise extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/SunWise/sunwise-main.png")} className="mainImg"/>
    <div className="row">
      <div className="col3"><h2 className="title">/02 Motivation</h2></div>
    <div className="col7">  <p>Nowadays, the harmful effect of UV radiation is increasing with
time as a result of the thinning of the ozone layer. Nevertheless,
people still seem to ignore or forget the warnings communicated
by the different media channels. Of course, sun rays have some
positive effect to humans’ biological system, but the negative effects
outweigh the positive ones. As an example, being exposed to
sunshine without taking some precautions can cause temporary
and permanent eye and skin damage
</p></div>
    </div>

  <div className="row">
  <div className="col3">  <h2 className="title">/03 Personal informatics</h2></div>
    <div className="col7"><p>SunWise is designed and developed based on
the <strong><a href="http://www.personalinformatics.org/docs/lab/2010-chi-ianli-stage-based-model.pdf">Stage-based Model of Personal Informatics System</a></strong>. Its aim
is to help people realize, be aware and act on the dangers of UV
exposure.</p>

  <div className="sbm">
    <h3>Preparation</h3>
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
  </div>


  </div>


  </div>
        <h2 className="title">/04 Design Process</h2>
        <p>The design of the prototype has been crafted during three iterations
phases.</p>
      <div className="iterations">
        <div className=""><h3 className="number">Phase 1</h3>
          During the first iteration the non-functional protoype was created and tested face-to-face with
          the potential users. The following screens were tested:

          <img src={require("./../assets/img/SunWise/firstPrototype.png")} className="colMax margin40"/>

          <div className="">
            <h3 className="number">Research findings</h3>
            <div className="row">
              <div className="col5 research">
                <img src={require("./../assets/img/SunWise/old1-fix.png")} className="padding20"/>
                <p id="firstInsight" className="padding20">The users need to have a
                  possibility to enter the application in order to see statistics, even
                  when they don't want to sunbath at the moment.</p>
              </div>
              <div className="col5 research">
                <img src={require("./../assets/img/SunWise/old2-fix.png")} className="padding20"/>
                <div className="">
                  <p className="padding20">The main screen (UV Index) was not clear to the users, they didn't understand what do
                  the bubbles represent. Therefore, it should show only information about the current value. </p>
                <p id="stopInsight" className="padding20">The stop button should be more visible</p></div>
              </div>
            </div>
            <div className="row">
              <div className="col5 research">
                <img src={require("./../assets/img/SunWise/old3-fix.png")} className="padding20 padding40"/>
                <div className="">
                  <p className="padding20">Double navigation panel on top of the screen was misleading therefore navigation patterns need to be changed</p>
                  <p className="padding20" id="chartInsight">It turned out that line chart was not an appropriate
    data visualization in this case. As the users are normally exposed to sun only during few hours of the day,
    bar chart would be a better idea for the
    next prototype. Additionally, on
    the line chart it was hard to distinguish the colors assigned to UV
    Index values.</p></div>
              </div>
              <div className="col5 research">
                <img src={require("./../assets/img/SunWise/old4-fix.png")} className="padding20"/>
                <p>The app was too colorful causing problems with understanding what does each color mean.</p>
              </div>
            </div>
          </div>
        </div>
        <div className=""><h3 className="number">Phase 2</h3>

      Taking into consideration all the issues mentioned above, the
group proceeded to the second iteration, in which the application
was redesigned. Apart from implementing the suggestions from
feedback, we decided that the application has to use principles
from iOS Human Interface Guidelines.

      <div className="row">
        <div className="col5">
          <img src={require("./../assets/img/SunWise/screen_home.png")} className="prototypeImg"/>
        </div>
        <div className="col5">
          <p>  The old navigation was replaced with tap bar, which allowed better
  hierarchy of information and application structure. This design
  forced that the title of each screen is shown on the top of the view,
  which helps orientate better where the user is in the application.
  Current UV Index level is displayed in a circular progress bar, instead of a
simple circle.
</p>
        </div>
      </div>

      <div className="row">
        <div className="col5">
          <img src={require("./../assets/img/SunWise/statistics.gif")} className="prototypeImg"/>
        </div>
        <div className="col5">
          <p>
</p>
        </div>
      </div>

      <div className="row">
        <div className="col5">
          <img src={require("./../assets/img/SunWise/screen_calendar.png")} className="prototypeImg"/>
        </div>
        <div className="col5">
          <p> Besides the screens that the first
prototype included, calendar view has been added
to sum up hours spent on sun during the month.
</p>
        </div>
      </div>


      </div>


      <div className=""><h3 className="number">Phase 3</h3></div>

      </div>
      <div className="prototype"><iframe src="https://marvelapp.com/5jgaeg8?emb=1&iosapp=false&frameless=false" width="352" height="801" allowTransparency="true" frameborder="0"></iframe>
    </div>
      </div>
    )
  }
}

export default withRouter(ProjectSunWise);
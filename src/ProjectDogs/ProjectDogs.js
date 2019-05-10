import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectDogs extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/Dogs/screens.png")} className="mainImg"/>
        <div className="row">
        <div className="col3"><h2 className="title">Problem</h2></div>
        <div className="col7">  <p>Problem
Dogs are often left home alone because their owner has to go to work every day, leaving dogs bored and understimulated.
Owners can feel like they are neglecting their dogs when they leave home and feel guilty about it.

        </p></div>
        </div>

        <div className="row">
        <div className="col3"><h2 className="title">Solution</h2></div>
        <div className="col7">  <p>A camera based AI system connected to a tv that trains a dog through exercises and treats.
        The owner can access the system remotely through a smartphone app, where it’s possible to keep track of the dog’s progress and control training.
        </p></div>
        </div>

        <div className="row">
        <div className="col3"><h2 className="title">Unique Value Proposition</h2></div>
        <div className="col7">  <p>Train your dog and keep it occupied when you’re not around.
        Your dog will stay stimulated and healthy.
        You will be able to track its progress, if you don’t have time to train it in person. </p>
        </div>
        </div>

        <div className="row">
        <div className="col3"><h2 className="title">Customer Segment</h2></div>
        <div className="col7">
        <p>Dog owners:
          <ul>
            <li>With full time occupation</li>
            <li>Without alternative care (single households)</li>
            <li>Who live in small apartments where dog can’t explore on its own (inner city)</li>
            <li>Who feel guilty about leaving their dog alone</li>
          </ul>
        </p>
        </div>
        </div>

        <div className="row">
        <div className="col3"><h2 className="title">Goals</h2></div>
        </div>
        <img src={require("./../assets/img/Dogs/1.png")} className="mainImg"/>

        <div className="row">
        <div className="col3"><h2 className="title">User Story Map</h2></div>
        </div>
        <img src={require("./../assets/img/Dogs/USM.png")} className="mainImg"/>


        <div className="row">
        <div className="col3"><h2 className="title">Wireframes</h2></div>
        </div>
        <img src={require("./../assets/img/Dogs/2.png")} className="mainImg"/>

        <div className="row">
        <div className="col3"><h2 className="title">Validation</h2></div>
        <div className="col7">
        <p>The validation survey was completed by 54 subjects. It contained the following quesions:
        <ul>
          <li>How many dogs do you own? (single choice question)</li>
          <li>How often do you train your dog? (single choice question)</li>
          <li>How many hours are you occupied in the week? (single choice question)</li>
          <li>Is your dog badly behaved when you are not around? If so, what kind of behaviour does it display? (single choice question)</li>
          <li>If I leave my dog at home alone, I sometimes feel guilty. (scale)</li>
          <li>When I leave my dog unattended, I sometimes feel like I am neglecting it. (scale)</li>
          <li>When I leave my dog unattended, I sometimes feel like I am neglecting it. (scale)</li>
          <li>How would you feel about an automated training tool for your dog? (open)</li>
        </ul>
        </p>
        </div>
        </div>

        <img src={require("./../assets/img/Dogs/results-mapped.png")} className="colMax margin40"/>
        <div className="center"><iframe src="https://marvelapp.com/272a3b6?emb=1&iosapp=false&frameless=false" width="452" height="901" allowTransparency="true" frameborder="0"></iframe></div>
      </div>
    )
  }
}

export default withRouter(ProjectDogs);

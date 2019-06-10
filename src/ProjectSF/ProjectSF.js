import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectSF extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/SF/main-view.png")} className="mainImg"/>
        <div className="row">
        <div className="col7"> <h2 className="title">Motivation</h2> <p>The dataset for the project contained the filming locations of movies shot in San Francisco,
          starting from 1924. The group chose this dataset because San Francisco is one of the most popular locations
          for filmmakers, offering a lot of iconic landmarks and beautiful landscapes.
          The Bay Area has a unique charm impossible to find elsewhere in the West Coast,
          making it the perfect place to shoot Oscar-worthy films.
    </p></div>
    <div className="col3"></div>
        </div>

      <div className="row">
      <div className="col7"> <h2 className="title">Goals</h2> <p>One of the main goals regarding
        this project was to find out where exactly certain scenes from famous movies were shot.
        We achieved this by visualizing the filming locations on the map and filtering them
        by their release year. We also wanted to find meaningful connections between production companies,
        distributors and directors and analyze the recurring patterns, so we created a sunburst diagram and
        bubble charts which will be detailed below.
      </p></div>
      <div className="col3"></div>
      </div>

      <h2 className="title">Features</h2>
      <div className="row">
      <div className="col7">  <p><h2>Map with brushable timeline</h2>
The map is showing the districts of San Francisco along with all filming locations from 1924 to present day.
First thing that can be noticed from the map is that a considerable amount of movies were shot in the
North-Eastern part, in close proximity to Golden Gate Bridge and all the other top-rated tourist attractions.
Secondly, we also added a timeline containing all the years between 1924-2018, and as we move the brush over
the timeline, it can be clearly seen how powerful the movie industry became in the past few decades: from only a
handful of movies last century to hundreds nowadays. It goes without saying that Hollywood loves San Francisco.
      </p></div>
    </div>

      <img src={require("./../assets/img/SF/sf-map.gif")} className="mainImg"/>

        <div className="row">
        <div className="col7">  <p><h2>Bubble visualization</h2>
  Bubble charts visualization was created to present the data and give the users an option to filter the data
  according to their preferences. It is possible to group movies by director, production company or distributor.
  The visualization gives a possibility to choose timeframes (by choosing one of the timeframes from select list). </p></div>
        <div className="col3"></div>
        </div>


        <img src={require("./../assets/img/SF/distributions3.gif")} className="mainImg"/>
      </div>
    )
  }
}

export default withRouter(ProjectSF);

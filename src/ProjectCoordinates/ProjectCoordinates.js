import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectCoordinates extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        This page is currently being built.
        <img src={require("./../assets/img/Coordinates/main.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Problem</h2><p>Visualizing multi-dimensional data has always been a challenging
task for many and it has been proved that the human brain was
only trained to perceive 2 dimensions. One of the most well known
and widely used strategies to tackle this issue is represented
by parallel coordinates, which are powerful enough to display an
entire dataset in no time.
This type of visualization allows users to present multiple dimensions
all at once. However, as parallel coordinates are successful enough to visualize
multivariate data, they come with certain limitations that need
to be solved to ensure a smoother user experience.
One of them is that large datasets create a lot of visual clutter and all the
horizontal lines in the plot (known as "polylines") are subject to overlapping,
thus obscuring any meaningful patterns that might be observed. These patterns
are crucial in data analysis, since they are the key to revealing
interesting stories about the data.

        </p></div>
        <div className="col3"></div>
        </div>

        <div className="row">
        <div className="col7"><h2 className="title">Goal</h2><p>The goal of the project was to implement parallel coordinates
          visualization allowing for multiple brushing techniques. Different types of brushing
          techniques were introduced and tested during the user tests.
        </p></div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/Coordinates/dimensions.gif")} className="mainImg"/>
        <img src={require("./../assets/img/Coordinates/brush-simple.gif")} className="mainImg"/>
        <img src={require("./../assets/img/Coordinates/line-brush.gif")} className="mainImg"/>
      </div>
    )
  }
}

export default withRouter(ProjectCoordinates);

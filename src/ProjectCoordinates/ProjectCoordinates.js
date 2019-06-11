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

        <div className="row">
        <div className="col7"><h2 className="title">Dimensions</h2><p>The default behavior when uploading
          a .csv dataset is to render the
          parallel coordinates based on all dimensions, sorted in alphabetical
          order. However, one can remove (or add) dimensions in
          case they are not needed by toggling the corresponding dimension
          button and also change the order of the vertical axes by dragging
          them to left or right.
        </p></div>
        <div className="col3"></div>
        </div>

          <img src={require("./../assets/img/Coordinates/dimensions.gif")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Direct Selection</h2><p>Direct selection, also known as 0-order
brushing, occurs when you hover over one line in the chart. More
specifically, each time the user places the mouse over a polyline,
additional information about its corresponding dataset entry will
be displayed in a table below.
If user clicks on a highlighted line, that line remains saved in the
table for further exploration until removed. Users are allowed to
select multiple lines from the chart and compare their values in
the table. The "Reset" button deselects all the
lines and the plot goes back to its initial state.
        </p></div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/Coordinates/direct-selection.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Simple Brushing</h2><p>Simple brushing is the most basic form
of brushing. The central aim of this technique is to
restrict the dimensions between a min and max value.
        </p></div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/Coordinates/simple-brush.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Line Brushing</h2><p>Line brushing is a 2D selection brushing
method which can be performed by drawing lines in the areas
between each 2 axes. The
selection contains all entries that pass through all of the active
lines (Figure 8). The users can remove the lines and draw new ones
by clicking anywhere close to their surrounding area.
        </p></div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/Coordinates/line-brush.png")} className="mainImg"/>
      </div>
    )
  }
}

export default withRouter(ProjectCoordinates);

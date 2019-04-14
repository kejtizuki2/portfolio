import React from 'react';
import './projectOverview.scss';

class ProjectOverview extends React.Component {



  render() {

    const {
        title,
        image,
        redirect
      } = this.props;

    return(
      <div className="">
        <img src={image} />
      </div>
    )
  }
}

export default ProjectOverview;

import React from 'react';
import './ProjectOverview.scss';

class ProjectOverview extends React.Component {



  render() {

    const {
        title
      } = this.props;

    return(
      <div className="">
        {title}
      </div>
    )
  }
}

export default ProjectOverview;

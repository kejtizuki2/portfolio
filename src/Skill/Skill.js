import React from 'react';
import './skill.scss';

class Skill extends React.Component {



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

export default Skill;

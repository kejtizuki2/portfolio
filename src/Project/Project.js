import React from 'react';
import './project.scss';

const Project = ({ image, title }) => { {

    return(
      <div className="gridCell" style={{ backgroundImage: `url(${image})` }}>
        <div className="cellInfo">
          <p>{title}</p>
          <img src={require("./../assets/img/arrow-right.png")} className="icon"/>
        </div>
      </div>
    )
}}

export default Project;

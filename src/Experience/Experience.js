import React from 'react';
import './experience.scss';

class Experience extends React.Component {

  render() {

    const list = [
      {name: "Designit", url: "https://designit.com/"},
      {name: "Dixa", url: "https://dixa.com/"},
      {name: "Cachet", url: "https://http://www.cachet.dk/.com/"},
      {name: "IBM", url: "https://ibm.com/"},
    ]

    const listMapped = list.map((e) =>
      <li>{e.name}</li>
    );

    return(
      <div className="experience">
        <div className="header"><h2>WORK EXPERIENCE</h2></div>
        <div className="listView">
          <ul>{listMapped}</ul>
        </div>
        <div className="description"></div>
      </div>
    )
  }
}

export default Experience;

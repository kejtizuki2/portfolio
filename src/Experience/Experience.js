import React from 'react';
import './experience.scss';

class Experience extends React.Component {

  render() {

    const list = [
      {name: "Designit", url: "https://designit.com/", description: "Intern"},
      {name: "Dixa", url: "https://dixa.com/", description: "Worked on customer service software. I took part in redesign process of the platform."},
      {name: "Cachet", url: "https://http://www.cachet.dk/.com/", description: "I participated in the development of Internet-based Cognitive Assessment Tool (ICAT) - a web-based tool that assesses verbal memory, working memory, and psychomotor speed using short tasks. The platform was created to conduct digital assessment of cognition in affective disorders. Usually this kind of assessment is conducted by the doctor and patient as pen-and-pencil test and during my project I worked on digitalisation of the test. Besides being responsible for frontend development I participated in brainstorming sessions, I sketched mockups on paper and worked on creation of flowcharts. I also participated in validation and redesign of the platform, including the layout and graphical design of each page, the instructions to the participants, the use of speech recognition, feedback to the participants after each task, the use of input modalities (i.e. keyboard, mouse, and touch), and the informed consent pages. "
    },
      {name: "IBM", url: "https://ibm.com/", description: "My major tasks were related to the implementation of frontend part of the website designed for IBM Finance Department. Besides the development, I crafted the user interface of the platform, designed interaction patterns and researched use cases. I participated in all stages of the development."},
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

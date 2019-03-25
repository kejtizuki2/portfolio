import React from 'react';
import './experience.scss';

class Experience extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  showElem(e) {
    this.setState({
      currentIndex: e.id
    })
    console.log('AFTER HOVER', this.state.currentIndex)
  }


  render() {

    const list = [
      {id: 0, name: "Designit", url: "https://designit.com/", description: "Intern"},
      {id: 1, name: "Dixa", url: "https://dixa.com/", description: "Worked on customer service software. I took part in redesign process of the platform."},
      {id: 2, name: "Cachet", url: "https://http://www.cachet.dk/.com/", description: "I participated in the development of Internet-based Cognitive Assessment Tool (ICAT) - a web-based tool that assesses verbal memory, working memory, and psychomotor speed using short tasks. The platform was created to conduct digital assessment of cognition in affective disorders. Usually this kind of assessment is conducted by the doctor and patient as pen-and-pencil test and during my project I worked on digitalisation of the test. Besides being responsible for frontend development I participated in brainstorming sessions, I sketched mockups on paper and worked on creation of flowcharts. I also participated in validation and redesign of the platform, including the layout and graphical design of each page, the instructions to the participants, the use of speech recognition, feedback to the participants after each task, the use of input modalities (i.e. keyboard, mouse, and touch), and the informed consent pages. "
    },
      {id: 3, name: "IBM", url: "https://ibm.com/", description: "My major tasks were related to the implementation of frontend part of the website designed for IBM Finance Department. Besides the development, I crafted the user interface of the platform, designed interaction patterns and researched use cases. I participated in all stages of the development."},
      {id: 4, name: "SoInteractive", description: "SOI"}
    ]

    const listMapped = list.map((e, index) =>
      <li key={index}><p onMouseOver={this.showElem.bind(this, e)} className={(e.id === this.state.currentIndex) ? 'listView-elem active' : "listView-elem"}>{e.name}</p></li>
    );


    return(
      <div className="experience">
        <div className="header"><h2>WORK EXPERIENCE</h2></div>
        <div className="experience-explained">
        <div className="listView">
          <ul>{listMapped}</ul>
        </div>
        <div className="description">
          {list[this.state.currentIndex].description}
        </div>
        </div>
      </div>
    )
  }
}

export default Experience;

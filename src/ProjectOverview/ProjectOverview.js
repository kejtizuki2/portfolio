import React from 'react';
import './projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";
var classNames = require('classnames');

class ProjectOverview extends React.Component {


  constructor(props) {
    super(props);
    console.log(props)
  }

  handleOnClick = () => {
    console.log("redirect home");
    this.props.history.push("/");
  };


  render() {

    const {
        title,
        bgImage,
        description,
        keywords,
        tools,
      } = this.props;

    const headerClasses = classNames({
      'projectHeader': true,
      'sunwise': title === 'SunWise',
      'dogs': title === 'Dogs training app',
      'sfData': title === 'San Francisco Data Visualization',
      'mikeller': title === 'Mikeller app',
      'coordinates': title === 'Parallel coordinates'

    });

    return(
      <div>
      <div className={headerClasses}>
        <div className="projectTitle">
        <div>
          <Link to="/">
          <div className="iconBg" onClick={this.handleOnClick}>
            <img src={require("./../assets/img/arrow-left-white.png")} alt="arrow" className="iconArrow"/>
          </div>
          </Link>
        </div>
        <h1 className="title">{title}</h1>
        </div>
        <p className="projectDescription">{description}</p>
      </div>
      <div className="basicContainer">
        <div className="col4">
        <h2 className="title">/01 Details</h2>
        <h4 className="title">Role</h4>
        <p>{keywords}</p>
        <h4 className="title">Tools</h4>
        <p>{tools}</p>
        </div>
        <div className="col6 more">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(ProjectOverview);

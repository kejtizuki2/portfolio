import React from 'react';
import './project.scss';

class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    }
  }

  imageHover = () => {
    this.setState({
      isHovered: !this.state.isHovered
    })
    console.log('state', this.state.isHovered)
  }

  handleOnClick = () => {
    console.log("redirect");
    this.props.history.push(this.props.redirect);
  };

  render() {

    const {
        image,
        title,
        description,
        keywords
      } = this.props;

    return(
      <div className="gridCell" onClick={this.handleOnClick}>
        <div className="gridImgWrap" onMouseOver={this.imageHover} onMouseOut={this.imageHover}>
          <img src={image} className="gridImg"/>
          {
            (this.state.isHovered === true) &&
            <div className="textContainer" >
              <div className="headerTop">
                <h1 className="title">{title}</h1>
                <p>{description}</p>
              </div>
              <div className="keywords">
                <p>{keywords}</p>
                <img src={require("./../assets/img/arrow-right-white.png")} className="iconArrow"/>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Project;

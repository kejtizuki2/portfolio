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

  render() {

    const {
        image,
        title
      } = this.props;

    return(
      <div className="gridCell">
        <div className="gridImgWrap">
          <img src={image} className="gridImg"/>
        </div>
        <div className="cellInfo">
          <p>{title}</p>
          <img src={require("./../assets/img/arrow-right.png")} className="icon"/>
        </div>
      </div>
    )
  }
}

export default Project;

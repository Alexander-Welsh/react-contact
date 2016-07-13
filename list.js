import React from 'react';
import { Link } from 'react-router'

export default React.createClass({
  render: function () {
    return (
   	<Link to={"/contact/" + this.props.id}>
    <div id="cont">
    <div className="imgspan">
      <img className="thumbs" src={this.props.picture} /> 
      <span className="work">{this.props.name}</span>
    </div>
    </div>
    </Link>
    )
  }
})
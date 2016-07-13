import React from 'react';
import { hashHistory } from 'react-router';
import Phone from 'react-icons/lib/fa/phone'
import Globe from 'react-icons/lib/fa/globe'
import User from 'react-icons/lib/fa/user'
import Envel from 'react-icons/lib/fa/envelope'


export default React.createClass({
  handleBack: function () {
    hashHistory.goBack();
  },
  render: function () {
    return (
      <div id="Contact">
        <button onClick={this.handleBack}>{"<-"}</button>
        <div><img id="mainImg" src={this.props.people.image} /></div>
        <p><span className="i"><User /></span>{this.props.people.name}</p>
        <p id="email"><span className="i"><Envel /></span>{this.props.people.email}</p>
        <p><span className="i"><Phone /></span>{this.props.people.phone}</p>
        <p><span className="i"><Globe /></span>{this.props.people.location}</p>
      </div>
    )
  }
})


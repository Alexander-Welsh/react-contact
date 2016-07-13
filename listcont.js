import React from 'react';
import users from './randomUsers.json';
import ContactList from './mainlist.js';



export default React.createClass({
  getInitialState: function() {
    return {
      people: []
    }
},
  componentWillMount: function(){
  	console.log(users)
  	this.setState({
  		people: users


  	})

  },
  render: function () {
    return (
      <ContactList people={this.state.people} />

    )
  }
})

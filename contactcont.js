import React from 'react';
import Contact from './contact'
import users from './randomUsers.json'


export default React.createClass({
	getInitialState: function(){
		return{
			people: {}
		}
	},
	componentWillMount: function() {
		
		this.setState({
			people: getContactbyReg(this.props.params.contactId)
		})

	},
  	render: function () {
		return (

	    	<div>

	    	<Contact people={this.state.people} />

	    	</div>

	      
	    )
 	}
})

function getContactbyReg(id){
			var people= users.filter(function(user){
				return Number(user.registered)=== Number(id);
			})
			return {
				image:people[0].picture.large,
				phone:people[0].phone,
				name: people[0].name.first + " " + people[0].name.last,
				location:people[0].location.city +", " + people[0].location.state,
				email:people[0].email
			}

		}

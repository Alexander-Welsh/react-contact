import React from 'react';
import People from './list.js'



export default React.createClass({
  render: function () {
    return (
      <div id="nameHolder">

      	{/* Comment in JSX  */}
        <p id="peeps">My Peeps</p> {this.props.people.map(function(person){
        	return <People key={person.registered} id={person.registered} picture={person.picture.thumbnail} name={person.name.first + " " + person.name.last} />

        })
    }
      </div>
    )
  }
})
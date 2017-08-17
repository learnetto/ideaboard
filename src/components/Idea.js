import React, { Component } from 'react'

class Idea extends Component {
	handleClick = () => { this.props.onClick(this.props.idea.id) }

	handleDelete = () => { this.props.onDelete(this.props.idea.id) }

	render () {
		return(
		  <div className="tile">
		  	<span className="deleteButton" onClick={this.handleDelete}>x</span>
		    <h4 onClick={this.handleClick}>{this.props.idea.title}</h4>
		    <p onClick={this.handleClick}>{this.props.idea.body}</p>
		  </div>
		)
	}
}

export default Idea

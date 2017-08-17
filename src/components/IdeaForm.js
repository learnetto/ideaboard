import React, { Component } from 'react'
import axios from 'axios'

class IdeaForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
      title: this.props.idea.title,
      body: this.props.idea.body
		}
	}

  handleInput = (e) => {
    this.props.resetNotification()
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const idea = {title: this.state.title, body: this.state.body }
    axios.put(
      `http://localhost:3001/api/v1/ideas/${this.props.idea.id}`,
      {idea: idea}
      )
    .then(response => {
      console.log(response)
      this.props.updateIdea(response.data)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="tile">
      	<form onBlur={this.handleBlur} >
					<input className='input' type="text" name="title" placeholder='Enter a Title'
            value={this.state.title} onChange={this.handleInput}
            ref={this.props.titleRef} />
					<textarea className='input' name="body" placeholder='Describe your idea'
            value={this.state.body} onChange={this.handleInput}></textarea>
      	</form>
      </div>
    );
  }
}

export default IdeaForm

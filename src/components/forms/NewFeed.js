import React, { Component } from 'react'

export default class NewFeed extends Component {
  state = {
    handle: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    // pass in addFeed function here
    this.setState({ handle: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type='text'
            name='handle'
            onChange={event => this.handleChange(event)}
            value={this.state.handle}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

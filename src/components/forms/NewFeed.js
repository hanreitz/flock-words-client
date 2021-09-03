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
    this.props.addFeed(this.state.handle)
    this.setState({ handle: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input
            type='text'
            name='handle'
            onChange={event => this.handleOnChange(event)}
            value={this.state.handle}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

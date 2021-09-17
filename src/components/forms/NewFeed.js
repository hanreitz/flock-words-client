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
      <div className="col-lg-3">
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <div className="form-group">
            <label forHTML="handle">Add Feed </label>
            <input
              type='text'
              className="form-control"
              name='handle'
              onChange={event => this.handleOnChange(event)}
              value={this.state.handle}
            />
          </div>
          <button type="submit" class="btn btn-default">Add</button>
        </form>
      </div>
    )
  }
}

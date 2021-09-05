import React, { Component } from 'react'
import { connect } from 'react-redux'
import DataPage from '../components/DataPage'

class DataContainer extends Component {
  render() {
    const data = this.props.data.data
    return (
      <div>
        <DataPage tweets={data} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(DataContainer)
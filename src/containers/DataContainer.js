import React, { Component } from 'react'
import { connect } from 'react-redux'
import DataPage from '../components/DataPage'
import { getData } from '../actions/feeds/feedActions'

class DataContainer extends Component {
  
  componentDidMount(){
    this.props.getData()
  }

  render() {
    const data = this.props.data.filter(word => word.value > 5)
    return (
      <div>
        <DataPage data={data} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, { getData })(DataContainer)
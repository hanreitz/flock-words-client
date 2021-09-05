import React, { Component } from 'react'
import Wordcloud from '../components/wordcloud/Wordcloud'
import { connect } from 'react-redux'
import { getData } from '../actions/feeds/feedActions'

class WordcloudContainer extends Component {
  
  componentDidMount() {
    this.props.getData()
  }

  render() {
    const data = this.props.data
  
    return (
      <div className='wordcloud-container'>
        <Wordcloud data={data} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, { getData })(WordcloudContainer)
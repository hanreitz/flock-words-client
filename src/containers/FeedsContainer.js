import React, { Component } from 'react'
import { connect } from 'react-redux'
import Feed from '../components/feeds/Feed'

class FeedsContainer extends Component {

  render() {

    return (
      <div className='feeds-container'>
        {this.props.feeds.map(feed => <Feed feed={feed} key={feed.handle} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { feeds: state.feeds }
}

export default connect(mapStateToProps)(FeedsContainer)
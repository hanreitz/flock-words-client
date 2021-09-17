import React from 'react'

export default function AboutPage() {
  return (
    <div className="well">
      <div className="panel panel-default">
        <div className="panel-body">
          <h3 className='page-title'>About</h3>
          <p>This application was made using the <a href='https://developer.twitter.com/en/docs/twitter-api'>Twitter API</a>.</p>

          <p>The GitHub repositories for this project are available <a href='https://github.com/hanreitz/flock-words-api'>here</a> (backend) and <a href='https://github.com/hanreitz/flock-words-client'>here</a> (frontend).</p>

          <p>To learn more about the development of this project, please check out my blog post.</p>
        </div>
      </div>
    </div>
  )
}

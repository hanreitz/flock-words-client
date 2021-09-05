import React from 'react'

export default function AboutPage() {
  return (
    <div>
      <h3 className='page-title'>About</h3>
      <p>This application was made using the Twitter API</p>

      <p>The GitHub repositories for this project are available <a href='https://github.com/hanreitz/flock-words-api'>here</a> (backend) and <a href='https://github.com/hanreitz/flock-words-client'>here</a> (frontend).</p>

      <p>To learn more about the development of this project, please check out my blog post.</p>
    </div>
  )
}

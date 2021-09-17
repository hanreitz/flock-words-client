import React from 'react'

const DataTable = props => {
  return (
    <div className="panel-body">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Word</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(word => <tr><td>{word.text}</td><td>{word.value}</td></tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
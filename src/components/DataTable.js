import React from 'react'

const DataTable = props => {
  return (
    <div>
      <table className='data-table'>
        <tr>
          <th>Word</th>
          <th>Count</th>
        </tr>
        {props.data.map(word => <tr><td>{word.text}</td><td>{word.value}</td></tr>)}
      </table>
    </div>
  )
}

export default DataTable
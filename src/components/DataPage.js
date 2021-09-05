import React from 'react'
import DataTable from './DataTable'

const DataPage = props => {

  return (
    <div>
      <h3 className='page-title'>
        Data
      </h3>
      <DataTable data={props.data} />
    {/* 
        header
        information about current feeds
        table of words and their counts
    */}
    </div>
  )
}

export default DataPage
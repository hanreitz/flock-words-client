import React from 'react'
import DataTable from './DataTable'

const DataPage = props => {

  return (
    <div className="well">
      <h3 className="text text-justify">
        Data
      </h3>
      <DataTable data={props.data} className="container" />
    {/* 
        header
        information about current feeds
        table of words and their counts
    */}
    </div>
  )
}

export default DataPage
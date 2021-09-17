import React from 'react'
import DataTable from './DataTable'

const DataPage = props => {

  return (
    <div className="well">
      <h3 className="text text-justify">
        Data
      </h3>
      <div className="panel panel-default">
        <DataTable data={props.data} />
      </div>
    {/* 
        header
        information about current feeds
        table of words and their counts
    */}
    </div>
  )
}

export default DataPage
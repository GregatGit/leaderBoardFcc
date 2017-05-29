import React from 'react'

const CamperRow = (props) => {

  return (
    <tr>
      <th>{props.position}</th>
      <th>{props.name}</th>
      <th>{props.recentPoints}</th>
      <th>{props.allTimePoints}</th>
    </tr>
  )
}

export default CamperRow

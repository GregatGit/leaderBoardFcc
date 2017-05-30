import React from 'react'

const CamperRow = (props) => {

  return (
    <tr>
      <th>{props.position}</th>
      <th>
        <img src={props.img} width="50" height="50"/>
        {props.name}
      </th>
      <th>{props.recentPoints}</th>
      <th>{props.allTimePoints}</th>
    </tr>
  )
}

export default CamperRow

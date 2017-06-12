import React from 'react'

const CamperRow = (props) => {
  let url = `https://freecodecamp.com/${props.name}`
  return (
    <tr>
      <th>{props.position}</th>
      <th>
        <a href={url}target="_blank">
        <img src={props.img} width="50" height="50"/></a>
        {props.name}
      </th>
      <th>{props.recentPoints}</th>
      <th>{props.allTimePoints}</th>
    </tr>
  )
}

export default CamperRow

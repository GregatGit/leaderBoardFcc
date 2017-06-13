import React from 'react'
import '../css/camperRowStyle.css'
import '../css/rowImg.scss'

const CamperRow = (props) => {
  let url = `https://freecodecamp.com/${props.name}`
  return (
    <tr className='rowLine'>
      <th>{props.position}</th>
      <th>
        <a href={url}target="_blank">
        <img src={props.img} className='rowImg' width="50" height="50"/></a>
        {props.name}
      </th>
      <th>{props.recentPoints}</th>
      <th>{props.allTimePoints}</th>
    </tr>
  )
}

export default CamperRow

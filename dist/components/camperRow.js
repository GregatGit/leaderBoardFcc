import React from 'react'
import '../css/rowImg.scss'

const CamperRow = (props) => {
  let url = `https://freecodecamp.com/${props.name}`
  return (
    <tr className='rowLine'>
      <th className='firstBox'>{props.position}</th>
      <th className='firstBox'>
        <a href={url}target="_blank">
        <img src={props.img} className='rowImg' width="50" height="50"/></a>
      </th>
      <th>
        <strong>
        {props.name}
        </strong>
      </th>
      <th>{props.recentPoints}</th>
      <th>{props.allTimePoints}</th>
    </tr>
  )
}

export default CamperRow

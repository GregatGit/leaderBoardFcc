import React from 'react'
import '../css/buttons.scss'

const MyButton = (props) => {
  return (
    <button 
      onClick={props.changeOver}
      className="button">
      {props.text}    
    </button>
  )
}


export default MyButton
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

/*
You can't modify props in a component
So what you're doing here is adding some new state to your component. But the stateProp that you pass into the component as props is immutable
If you want to update the stateProp, you need to pass in a function that edits the state in the parent component, and then passes back in the update prop to the child component
Daniel Tait
Daniel
Also if you want to store the name of an object property in a variable you have to use bracket notation to access that property and the only way you could do it that way would be by changing state without using setState (don't do that) or by making a copy of state and altering that one property like stateCopy[stateProp] = data; this.setState(stateCopy);
*/
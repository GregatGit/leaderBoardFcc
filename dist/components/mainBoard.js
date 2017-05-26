import React, { Component } from 'react'
import recentText from '../../data/recent.json'
import CamperRow from './camperRow'

class Board extends Component {
  constructor(props){
    super(props)
  }

  render () {
    const camperRows = recentText.map((user, index) => {
      return (<CamperRow
            position={index + 1}
            name={user.username}
            recentPoints={user.recent}
            allTimePoints={user.alltime}
           />)
    })
    return (
      <div>
        <h1>Camper Leader Board</h1>
        <p>the list</p>
        <table>
        <tbody>
         {camperRows}
           </tbody>
        </table>
      </div>
    )
  }
}

export default Board

/*
[{"username":"anthonygallina1","img":"https://avatars.githubusercontent.com/u/11003055?v=3","alltime":4672,"recent":537,"lastUpdate":"2017-05-24T13:51:09.512Z"},{"username":"indefinite0212","img":"https://avatars1.githubusercontent.com/u/26141499?v=3","alltime":1019,"recent":525,"lastUpdate":"2017-05-24T13:22:36.041Z"},{"username":"diomed","img":"https://avatars3.githubusercontent.com/u/72777?v=3","alltime":4263,"recent":519,"lastUpdate":"2017-05-24T13:51:08.588Z"},
*/
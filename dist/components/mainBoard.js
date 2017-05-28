import React, { Component } from 'react'
import recentText from '../../data/recent.json'
import CamperRow from './camperRow'
// import dataRecent from '../../data/downData'
const recentApi = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
const allTimeApi = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'

class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      recent: ''
    }
    this.setState({recent: this.getData(recentApi)})
  }

  getData (url) {
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status)
          return
        }
        // Examine the text in the response
        response
          .json()
          .then((data) => data)
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err)
    })
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

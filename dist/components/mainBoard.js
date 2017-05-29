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
      recent: '',
      recentLoaded: false,
      alltimeLoaded: false,
      apiCalled: false,
      onTheBoard: 'recent'
    }
    this.changeList = this.changeList.bind(this)
  }

// api calls
componentDidMount() {
  fetch(recentApi).then((response) => {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status)
      return
    }
    response
      .json()
      .then((data) => {
        this.setState({recent: data, recentLoaded: true, apiCalled: true})
      })
  })
  fetch(allTimeApi).then((response) => {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status)
      return
    }
    response
      .json()
      .then((data) => {
        this.setState({alltime: data, alltimeLoaded: true, apiCalled: true})
      })
  }).catch((err) => {
    console.log('Fetch Error :-S', err)
  })
} // componentDidMount

changeList  () {
  if (this.state.apiCalled){
    let str = 'alltime'
    if (this.state.onTheBoard === 'alltime')
      str = 'recent'
    this.setState({onTheBoard: str})
  }
}

render() {
  let camperRows = 'campers details coming'
  let buttonText = 'recent/alltime'
  
  if (this.state.apiCalled) {
    let myArr = []
    if (this.state.onTheBoard === 'recent') {
      myArr = this.state.recent
    } else {
      myArr = this.state.alltime
    }
    camperRows = myArr.map((user, index) => {
      return (<CamperRow
        position={index + 1}
        name={user.username}
        recentPoints={user.recent}
        allTimePoints={user.alltime}/>)
    })
  }

  return (
    <div>
      <h1>Camper Leader Board</h1>
      <button onClick={this.changeList}>{buttonText}</button>
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

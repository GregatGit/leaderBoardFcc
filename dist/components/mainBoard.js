import React, { Component } from 'react'
import CamperRow from './camperRow'
import MyButton from './buttons'
import '../css/mainBoardStyles.scss'

const recentApi = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
const alltimeApi = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'

class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      recent: '',
      recentLoaded: false,
      alltimeLoaded: false,
      apiCalled: false,
      onTheBoard: 'RECENT'
    }
    this.changeList = this.changeList.bind(this)
  }

// api calls
componentDidMount() {
  fetch(recentApi).then((response) =>{
    response.json()
    .then((data) => {
      this.setState({recent: data, recentLoaded: true, apiCalled: true})
    })
  })
  fetch(alltimeApi).then((response) =>{
    response.json()
    .then((data) => {
      this.setState({alltime: data, alltimeLoaded: true, apiCalled: true})
    })
  })
} // componentDidMount

changeList () {
  if (this.state.apiCalled){
    let str = 'ALL-TIME'
    if (this.state.onTheBoard === 'ALL-TIME')
      str = 'RECENT'
    this.setState({onTheBoard: str})
  }
}

render() {
  let camperRows = 'campers details coming'

  if (this.state.alltimeLoaded && this.state.recentLoaded) {
    let myArr = []
    if (this.state.onTheBoard === 'RECENT') {
      myArr = this.state.recent
    } else {
      myArr = this.state.alltime
    }
    camperRows = myArr.map((user, index) => {
      return (<CamperRow
        id={index.toString()}
        position={index + 1}
        name={user.username}
        recentPoints={user.recent}
        allTimePoints={user.alltime}
        img={user.img}
      />)
    })
  }

  return (
    <div>
      <h1>Camper Leader Board</h1>
      <MyButton changeOver={this.changeList} text={this.state.onTheBoard} />
      <table>
        <tbody>
          <tr>
            <th>Position</th>
            <th></th>
            <th>Username</th>
            <th>Points-Recent</th>
            <th>Points-AllTime</th>
          </tr>
          {camperRows}
        </tbody>
      </table>
    </div>
  )
}
}

export default Board

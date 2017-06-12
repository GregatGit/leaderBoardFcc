import React from 'react'
import ReactDOM from 'react-dom'
import Board from './components/mainBoard'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div>
        <h1>Free Code Camp Leaderboard</h1>
        <p>a freeCodeCamp challange</p>
        <Board />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-container'))

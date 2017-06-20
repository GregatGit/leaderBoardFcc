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
        <img alt="freeCodeCamp logo" class="" src="https://www.freecodecamp.com/design-style-guide/img/freeCodeCamp-alternative.png" />
        <p>a freeCodeCamp challange</p>
        <p>by Greg Duncan</p>
        <Board />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-container'))

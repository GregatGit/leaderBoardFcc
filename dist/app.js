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
        <h1>My Webpack App</h1>
        <p>Built and then with react and webpack</p>
        <Board />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-container'))

import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>My Webpack App</h1>
        <p>Built and then with react and webpack</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-container'))

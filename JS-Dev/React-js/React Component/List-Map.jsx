// React js - List & Map
import React from 'react'

// main application
class App extends React.Component {

  constructor() {
    super()
    this.list = [
      'apple', 'banana', 'orange', 'grpae', 'guava'
    ]
  }

  render() {
    return (
      <>
        {this.list.map(function (value, index, array) {
          return <li>{index} . {value}</li>
        })}
      </>
    )
  }
}

export default App;
// React js - Component
import React from 'react'

// main application
class App extends React.Component {

  // app constructor
  constructor() {
    super()
  }

  // component definition
  comp(){
    const style = {
      'color': 'red',
      'background-color': 'yellow'
    }
    return(
      <div style={style}>
        This is new Component
      </div>
    )
  }

  // render main app
  render() {
    return this.comp()
  }
}

export default App;
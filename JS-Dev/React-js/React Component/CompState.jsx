// React js - Forms
import React from 'react'

// main application
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  inc = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  dec = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <>
        <div>
          <form>
            <input type='button' value={'INC'} onClick={this.inc} />

            <div>{this.state.count}</div>

            <input type='button' value={'DEC'} onClick={this.dec} />
          </form>
        </div>
      </>
    )
  }
}

export default App;
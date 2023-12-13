// React js - React rendering

import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      color: 'white',
      bool: false
    }
  }

  change = () => {
    this.setState({
      color: this.state.bool ? 'red' : 'orange',
      bool: !this.state.bool
    })
  }

  comp = () => {
    return (
      <>
        <div style={{
          display: 'inline'
        }}>
          <button onClick={this.change}>Change</button>
          <div style={{
            height: '10vh',
            width: '10vh',
            backgroundColor: this.state.color,
            transition: '1.0s ease-in-out',
          }}></div>
        </div>
      </>
    )
  }

  render() {
    return (
      <>
        <div>
          This is main App <br />
          {<this.comp />}
        </div>
      </>
    )
  }
}

export default App;
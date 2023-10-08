import React from 'react';
// import logo from './logo.svg';
import './App.css';

export default App;

function App() {
  return (
    <>
      <StateTest></StateTest>
    </>
  )
}

class StateTest extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <>
        <div>count: {this.state.count} <br /></div>
        <button onClick={() => {
          this.setState({
            count: this.prevState.count + 1
          })
        }}>Inc</button>

        <button onClick={() => {
          this.setState({
            count: this.prevState.count - 1
          })
        }}>Dec</button>
      </>
    )
  }
}
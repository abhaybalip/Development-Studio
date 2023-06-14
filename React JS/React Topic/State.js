import React from 'react';
// import logo from './logo.svg';
import './App.css';

export default App;

function App() {
  return (
    < Button/>
  )
}

class Button extends React.Component {
  state = {
    color: 'black',
    height: '5vh',
    width: '10vh'
  }
  clicked(){
    console.log('Button clicked !')
    var btn = document.getElementById("button")
    btn.setAttribute('style', 'color: red;')
  }
  render() {
    var { color, height, width } = this.state
    return (
      <button id='button' style={{ color, height, width }} onClick={this.clicked()}>My Button</button>
    )
  }
}
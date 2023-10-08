import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super()
    this.change = false
    this.clicked = this.clicked.bind(this)
  }

  render() {
    return (
      <div id='card'>
        <div id='name'>Name Surname</div>
        <br />
        <div id='dob'>29 Feb 2000</div>
        <br />
        <button onClick={this.clicked}>Change</button>
      </div>
    );
  }

  clicked() {
    var e = document.getElementById('name');
    if (this.change) {
      ReactDOM.findDOMNode(e).style.color = '';
      this.change = false;
    } else {
      ReactDOM.findDOMNode(e).style.color = 'red';
      this.change = true;
    }
    console.log('Hi');
  }
}

export default App;

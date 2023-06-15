import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        count = {this.state.count}
        <br />
        <button onClick={this.clicked}>Increment</button>
      </div>
    );
  }

  clicked(){
    var num = this.state.count;
    this.setState({
      count: num + 1
    });
    this.forceUpdate()
  };
}

export default App;
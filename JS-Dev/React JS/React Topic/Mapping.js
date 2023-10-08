import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.list = [10, 50, 30, 70, 40, 20, 50, 60, 0]
    this.list_traverse = this.list.map((item)=>{
        return(
            <li>{item}</li>
        )
    })
  }
  render(){
    return(
      <div id="main-div">
        <ul>{this.list_traverse}</ul>
      </div>
    );
  }
}

export default App;
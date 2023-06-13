import React from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends React.Component{
  data = {
    name : 'NameSurname',
    age  : 20,
    prof : 'student'
  }
  render(){
    const data = this.data
    return(
      <div>
        {data.name + data.age + data.prof}
      </div>
    )
  }
}
export default App;
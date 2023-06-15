// React Componenet
// Function - Class


import React from 'react';
// import logo from './logo.svg';
import './App.css';
export default App;

function App() {
  return (
    Greet('World')
  )
}

function Greet(Name){
    return(
        <h3>Hello {Name}</h3>
    )
}

class GreetMe extends React.Component{
    render(Name){
        return(
            <h3>Hello {Name}</h3>
        )
    }
}